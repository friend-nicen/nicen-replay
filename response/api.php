<?php
/**
 * @author 友人a丶
 * @date ${date}
 * 外部图片下载
 */

/* 添加rest_api_init动作钩子，在WordPress初始化REST API时注册自定义路由 */
add_action( 'rest_api_init', 'nicen_replay_rest_register_routes' );

/* 初始化 */
add_action( 'init', 'nicen_replay_remove_rest_api_hooks' );

/**
 * @return void
 * 保证rest_api运行
 */
function nicen_replay_remove_rest_api_hooks() {
	/* 解除屏蔽 REST API */
	if ( version_compare( get_bloginfo( 'version' ), '4.7', '>=' ) ) {
		remove_all_filters( 'rest_authentication_errors' );
	} else {
		/* 解除屏蔽 REST API */
		remove_all_filters( 'json_enabled' );
		remove_all_filters( 'json_jsonp_enabled' );
		/* Filters for WP-API version 2.x */
		remove_all_filters( 'rest_enabled' );
		remove_all_filters( 'rest_jsonp_enabled' );
	}
}


/* 定义注册路由的函数 */
function nicen_replay_rest_register_routes() {


	register_rest_route( 'api/v4', '/ip', array(
		'methods'  => 'GET', // 指定允许的方法，这里以GET为例
		'callback' => 'nicen_replay_getip', // 指定处理请求的回调函数
	) );

	register_rest_route( 'api/v4', '/event', array(
		'methods'  => 'POST', // 指定允许的方法，这里以GET为例
		'callback' => 'nicen_replay_event', // 指定处理请求的回调函数
	) );

	register_rest_route( 'api/v5', '/events', array(
		'methods'  => 'POST', // 指定允许的方法，这里以GET为例
		'callback' => 'nicen_replay_get_all_logs', // 指定处理请求的回调函数
	) );

	register_rest_route( 'api/v5', '/get', array(
		'methods'  => 'POST', // 指定允许的方法，这里以GET为例
		'callback' => 'nicen_replay_get_event', // 指定处理请求的回调函数
	) );
}

/**
 * @return WP_Error|WP_HTTP_Response|WP_REST_Response
 * 获取用户的IP
 */
function nicen_replay_getip() {

	$ip = $_SERVER['REMOTE_ADDR'];

	/* 判断IP */
	if ( isset( $_SERVER['HTTP_CLIENT_IP'] ) ) {
		$ip = $_SERVER['HTTP_CLIENT_IP'];
	} elseif ( isset( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ) {
		$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
		$ip = explode( ',', $ip );
		$ip = trim( $ip[0] ); // 只取第一个IP地址
	} elseif ( isset( $_SERVER['HTTP_X_REAL_IP'] ) ) {
		$ip = $_SERVER['HTTP_X_REAL_IP'];
	}

	/* 响应 */

	return rest_ensure_response( [
		"code"   => 1,
		"errMsg" => 'success',
		"data"   => $ip
	] );
}


/**
 * @return WP_Error|WP_HTTP_Response|WP_REST_Response
 * 获取用户的IP
 */
function nicen_replay_event() {

	/* 读取JSON参数 */
	$json = json_decode( file_get_contents( "php://input" ), true );


	/* 验证参数 */
	if ( ! isset( $json['ip'] ) || ! isset( $json['events'] ) ) {
		return rest_ensure_response( [
			"code"   => 0,
			"errMsg" => '参数异常'
		] );
	}

	/* 判断数据文件是否存在 */
	$root = nicen_replay_path . "events";
	if ( ! file_exists( $root ) || ! is_writable( $root ) ) {
		return rest_ensure_response( [
			"code"   => 0,
			"errMsg" => '插件异常'
		] );
	}


	/* 参数过滤 */
	$ip = sanitize_text_field( $json['ip'] );


	/* 创建当天日期的文件夹 */
	$date_folder = date( 'Y-m-d' ); // 获取当前日期并格式化为YYYY-MM-DD
	$events_dir  = $root . '/' . $date_folder; // 拼接目录路径

	/* 检查目录是否存在，如果不存在则创建 */
	if ( ! file_exists( $events_dir ) ) {
		mkdir( $events_dir, 0777, true ); // 创建目录，设置权限，并递归创建
	}

	/* 以IP作为文件名 */
	$file_name = sanitize_file_name( $ip ); // 清理文件名以确保安全
	$file_path = $events_dir . '/' . $file_name . '.txt'; // 拼接文件路径

	/* 将events变量追加到文件内 */
	/* 首先，我们需要确保$events是一个数组，然后对其进行JSON编码 */
	$events_data = json_encode( $json['events'], JSON_UNESCAPED_UNICODE ) . "\n";

	/* 将数据追加到文件中 */
	file_put_contents( $file_path, $events_data, FILE_APPEND | LOCK_EX );

	/* 返回成功的响应 */

	return rest_ensure_response( [
		"code"   => 1,
		"errMsg" => 'success',
		"data"   => $ip
	] );
}


/**
 * 获取所有日志
 *
 * @return WP_REST_Response
 */
function nicen_replay_get_all_logs() {

	/* 读取请求体中的JSON参数 */
	$json = json_decode( file_get_contents( "php://input" ), true );

	/* 验证参数 */
	$ip   = isset( $json['ip'] ) ? sanitize_text_field( $json['ip'] ) : '';
	$date = ! empty( $json['date'] ) ? sanitize_text_field( $json['date'] ) : date( 'Y-m-d' );

	/* 构造文件路径 */
	$glob = $ip ? nicen_replay_path . 'events/' . $date . '/' . $ip . '*' : nicen_replay_path . 'events/' . $date . '/*.*';


	/* 获取匹配的文件列表 */
	$files = glob( $glob );
	$data  = [];

	/* 遍历文件 */
	foreach ( $files as $file ) {
		if ( is_file( $file ) ) {
			/* 获取文件大小 */
			$size = round( filesize( $file ) / 1024 / 1024, 2 ) . ' MB';
			/* 获取文件名信息 */
			$info = explode( "_", basename( $file, ".txt" ) );
			/* 添加到数据数组 */
			$data[] = [
				'ip'   => $info[0],
				'city' => nicen_replay_ip( $info[0] ), // 需要实现Common::ip()方法
				'time' => filemtime( $file ),
				'date' => $date,
				'size' => $size,
				'file' => basename( $file ),
			];
		}
	}

	/* 返回成功响应 */

	return rest_ensure_response( [
		'code'   => 1,
		'errMsg' => 'ok',
		'data'   => [
			"total"        => 0,
			"per_page"     => count( $data ),
			"current_page" => 1,
			"last_page"    => 1,
			'data'         => $data
		]
	] );
}

/**
 * 获取特定事件
 *
 * @return WP_REST_Response
 */
function nicen_replay_get_event() {
	/* 读取请求体中的JSON参数 */
	$json = json_decode( file_get_contents( "php://input" ), true );

	/* 验证参数 */
	$date = ! empty( $json['date'] ) ? sanitize_text_field( $json['date'] ) : date( 'Y-m-d' );
	$file = sanitize_text_field( $json['file'] );

	/* 构造文件路径 */
	$file_path = nicen_replay_path . 'events/' . $date . '/' . $file;

	/* 检查文件是否存在 */
	if ( ! file_exists( $file_path ) ) {
		return rest_ensure_response( [
			"code"   => 0,
			"errMsg" => '日志文件不存在'
		] );
	}

	/* 读取文件内容 */
	$json_lines = explode( "\n", file_get_contents( $file_path ) );
	$data       = array_map( function ( $item ) {
		return json_decode( $item, true );
	}, $json_lines );

	/* 返回成功响应 */

	return rest_ensure_response( [
		'code'   => 1,
		'errMsg' => 'ok',
		'data'   => $data
	] );
}