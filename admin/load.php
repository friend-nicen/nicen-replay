<?php


/**
 * 后台主题设置页面，外部文件加载
 * */
function nicen_replay_admin_load_source() {

	wp_enqueue_script( 'vuejs', nicen_replay_url . 'assets/vue.min.js', [ 'jquery' ] );

	wp_enqueue_script( 'moments', 'https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/moment.js/2.29.1/moment.min.js' );
	wp_enqueue_script( 'base64', nicen_replay_url . 'assets/base64.min.js' );

	wp_enqueue_script( 'antd', nicen_replay_url . 'assets/antd.min.js', [ 'jquery', 'vuejs' ] );
	wp_enqueue_style( 'antdcss', 'https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/ant-design-vue/1.7.8/antd.min.css' );

	wp_enqueue_style( 'admincss', nicen_replay_url . 'assets/admin.css', array(), filemtime( nicen_replay_path . 'assets/admin.css' ) );
	wp_enqueue_script( 'adminjs', nicen_replay_url . 'assets/admin.js', array(), filemtime( nicen_replay_path . 'assets/admin.js' ), true );
	wp_enqueue_script( 'loadjs', nicen_replay_url . 'assets/load.js', array(), filemtime( nicen_replay_path . 'assets/load.js' ), true );

	wp_enqueue_script( 'axios', 'https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/axios/0.26.0/axios.min.js' );

	/**
	 * 内联的js代码
	 * */
	wp_add_inline_script( "adminjs", vsprintf( "
	const PLUGIN_CONFIG=%s;
	const NICEN_VERSION='%s';", [
		json_encode( nicen_replay_config() ),
		esc_js( NICEN_VERSION )
	] ), 'before' );


	$path = nicen_replay_path . 'events';

	if ( ! is_writable( $path ) ) {
		/*输出本地化日志*/
		echo '<script>window.addEventListener("load",()=>{alert("' . esc_js( $path ) . '数据目录不可写，插件无法生效！");})</script>', 'after';
	}


}


/**
 * 后台加载样式和脚本
 * */
if ( strpos( $_SERVER['QUERY_STRING'] ?? "", 'nicen_replay_plugin' ) !== false ) {
	add_action( 'admin_enqueue_scripts', 'nicen_replay_admin_load_source' ); //加载前台资源文件
}


/**
 * 前台加载监控
 */
function nicen_replay_front() {
	/* 加载外部库 */
	wp_enqueue_script( 'replay', nicen_replay_url . 'assets/replay.js', array(), filemtime( nicen_replay_path . 'assets/replay.js' ), true );
	/* 内联的js */
	wp_add_inline_script( "replay", 'replayInit();' );
}

add_action( 'wp_enqueue_scripts', 'nicen_replay_front' );
