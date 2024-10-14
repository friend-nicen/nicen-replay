<?php
/**
 * Plugin Name: nicen-replay
 * Plugin URI:https://nicen.cn/2893.html
 * Description: 一款可以监控并回放用户行为的插件
 * Version:1.0.0
 * Author: 友人a丶
 * Author URI: https://nicen.cn
 * Text Domain: nicen-replay
 * License: GPLv2 or later
 */

/**
 * 定义全局命名空间
 * */


define( 'nicen_replay_path', plugin_dir_path( __FILE__ ) ); //插件目录
define( 'nicen_replay_url', plugin_dir_url( __FILE__ ) ); //插件URL

//this is the root of website's path. call $_SERVER['DOCUMENT_ROOT'],I think it's safe;
//Think's

/*文件系统根目录*/
define( 'nicen_replay_root', $_SERVER['DOCUMENT_ROOT'] );

/*站点根目录*/
define( 'nicen_replay_site_root', str_replace( $_SERVER['DOCUMENT_ROOT'], "", WP_CONTENT_DIR ) );

include_once nicen_replay_path . '/config.php'; //加载插件配置
include_once nicen_replay_path . '/admin/install.php'; //安装时触发


register_activation_hook( __FILE__, "nicen_replay_install" );//初始化插件
register_deactivation_hook( __FILE__, 'nicen_replay_end' ); //卸载插件

/*导入模块*/
include_once nicen_replay_path . '/admin/common.php'; //公共变量和方法
include_once nicen_replay_path . '/response/api.php'; //接口响应
include_once nicen_replay_path . '/admin/load.php'; //加载后台插件资源

/**
 * 只在后台才触发
 * */
if ( is_admin() ) {
	include_once nicen_replay_path . '/admin/form.php'; //加载后台设置表单
	include_once nicen_replay_path . '/admin/setting.php';//渲染表单
	include_once nicen_replay_path . '/admin/initialize.php'; //初始化插件功能
}


