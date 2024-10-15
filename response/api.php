<?php

/**
 * @author 友人a丶
 * @date ${date}
 * 响应接口请求
 */

class Nicen_Replay_response {

	private static $self;
	private $private;
	private $root;

	private function __construct() {
		$this->private = get_option( "nicen_replay_plugin_private" );
		$this->root    = nicen_replay_path . "events/" . nicen_replay_config( 'nicen_replay_plugin_private' ) . "/";
	}


	/**
	 * 获取用户的IP
	 */
	private function nicen_replay_getip() {

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
		$this->success( 'success', $ip );
	}


	/**
	 * 记录事件
	 */
	private function nicen_replay_event() {

		/* 读取JSON参数 */
		$json = json_decode( file_get_contents( "php://input" ), true );


		/* 验证参数 */
		if ( ! isset( $json['ip'] ) || ! isset( $json['events'] ) ) {
			$this->error( '参数异常' );
		}

		/* 判断数据文件是否存在 */
		$root = nicen_replay_path . "events";
		if ( ! file_exists( $root ) || ! is_writable( $root ) ) {
			$this->error( '插件异常' );
		}


		/* 参数过滤 */
		$ip = sanitize_text_field( $json['ip'] );


		/* 创建当天日期的文件夹 */
		$date_folder = date( 'Y-m-d' ); // 获取当前日期并格式化为YYYY-MM-DD
		$events_dir  = $this->root . $date_folder; // 拼接目录路径

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
		$this->success( 'success', $ip );
	}


	/**
	 * 获取所有日志
	 */
	private function nicen_replay_get_all_logs() {

		/* 读取请求体中的JSON参数 */
		$json = json_decode( file_get_contents( "php://input" ), true );

		/* 验证参数 */
		$ip   = isset( $json['ip'] ) ? sanitize_text_field( $json['ip'] ) : '';
		$date = ! empty( $json['date'] ) ? sanitize_text_field( $json['date'] ) : date( 'Y-m-d' );

		/* 构造文件路径 */
		$glob = $ip ? $this->root . $date . '/' . $ip . '*' : $this->root . $date . '/*.*';


		/* 获取匹配的文件列表 */
		$files = glob( $glob );
		$data  = [];

		/* 遍历文件 */
		foreach ( $files as $file ) {
			/* 计算文件 */
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
		$this->success( 'ok', [
			"total"        => 0,
			"per_page"     => count( $data ),
			"current_page" => 1,
			"last_page"    => 1,
			'data'         => $data
		] );
	}

	/**
	 * 获取特定事件
	 */
	private function nicen_replay_get_event() {

		/* 读取请求体中的JSON参数 */
		$json = json_decode( file_get_contents( "php://input" ), true );

		/* 验证参数 */
		$date = ! empty( $json['date'] ) ? sanitize_text_field( $json['date'] ) : date( 'Y-m-d' );
		$file = sanitize_text_field( $json['file'] );

		/* 构造文件路径 */
		$file_path = $this->root . $date . '/' . $file;

		/* 检查文件是否存在 */
		if ( ! file_exists( $file_path ) ) {
			$this->error( '日志文件不存在' );
		}

		/* 读取文件内容 */
		$json_lines = explode( "\n", file_get_contents( $file_path ) );
		$data       = array_map( function ( $item ) {
			return json_decode( $item, true );
		}, $json_lines );

		/* 返回成功响应 */
		$this->success( 'ok', $data );
	}


	/**
	 * 接收响应
	 * */
	public function response() {


		/**
		 * 接手响应
		 * */

		try {

			/**
			 * 获取用户IP
			 * */
			if ( isset( $_GET['nicen_replay_getip'] ) ) {
				$this->nicen_replay_getip();
			}

			/**
			 * 事件上报
			 * */
			if ( isset( $_GET['nicen_replay_event'] ) ) {
				$this->nicen_replay_event();
			}


			/**
			 * 事件查询
			 * */
			if ( isset( $_GET['nicen_replay_get_all_logs'] ) ) {
				$this->auth();
				$this->nicen_replay_get_all_logs();
			}


			/**
			 * 事件下载
			 * */
			if ( isset( $_GET['nicen_replay_get_event'] ) ) {
				$this->auth();
				$this->nicen_replay_get_event();
			}


		} catch ( \Throwable $e ) {
			$this->error( $e->getMessage() );
		}

	}


	/**
	 * 验证接口权限
	 * */
	public function auth() {

		if ( empty( $_GET['private'] ) && empty( $_POST['private'] ) ) {
			$this->error( '密钥为空' );
		}

		if ( ( $_GET['private'] ?? "" ) != $this->private && ( $_POST['private'] ?? "" ) != $this->private ) {
			$this->error( '密钥有误' );
		}
	}


	/**
	 * @param $msg
	 * 错误响应
	 */
	private function error( $msg ) {
		return exit( json_encode( [
			'code'   => 0,
			'errMsg' => $msg
		], JSON_UNESCAPED_UNICODE ) );
	}


	/**
	 * @param $msg
	 * 成功响应
	 */
	private function success( $msg, $data ) {
		return exit( json_encode( [
			'code'   => 1,
			'errMsg' => $msg,
			'data'   => $data
		], JSON_UNESCAPED_UNICODE ) );
	}

	/**
	 * 获取单例
	 * */
	public static function getInstance() {
		/*如果实例不存在*/
		if ( ! self::$self ) {
			self::$self = new self();
		}

		return self::$self;
	}


}


add_action( 'plugins_loaded', 'nicen_replay_on_loaded' );

function nicen_replay_on_loaded() {
	( Nicen_Replay_response::getInstance() )->response(); //接收请求
}
