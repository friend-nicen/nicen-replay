<?php

/**
 * 公共数据和方法
 * */

global $nicen_replay_CONFIGS; //声明全局变量

$nicen_replay_CONFIGS = []; //保存所有插件配置

/**
 * 遍历整个配置
 * */
foreach ( nicen_replay_CONFIG as $key => $value ) {
	$nicen_replay_CONFIGS[ $key ] = get_option( $key );
}

/**
 * 返回指定配置
 * */
function nicen_replay_config( $key = '' ) {
	global $nicen_replay_CONFIGS;
	if ( empty( $key ) ) {
		return $nicen_replay_CONFIGS;
	} else {
		return $nicen_replay_CONFIGS[ $key ];
	}
}


/**
 * @param $ip
 *
 * @return false|string
 * IP归属地查询
 */
function nicen_replay_ip( $ip ) {

	$json = json_decode( file_get_contents( "http://mini.nicen.cn/ip?query=" . $ip ), true );

	if ( empty( $json['code'] ) ) {
		return "未知";
	} else {
		$data = $json['data']; //数据源

		return "{$data['provice']}{$data['city']} {$data['icp']}";
	}


}