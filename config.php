<?php


/**
 * 后台所有表单
 * */
const PLUGIN_nicen_rrweb = [
	[
		"id"         => "nicen_rrweb_plugin",//主题后台设置字段
		"menu_title" => '用户行为回放',
		'page_title' => '用户行为回放',
		'callback'   => 'nicen_rrweb_setting_load',
		'capablity'  => 'manage_options',
		"sections"   => [
			[
				"id"       => "nicen_rrweb_player",
				'title'    => 'Pro版',
				'callback' => [
					"render" => "nicen_rrweb_player"
				],
			]
		]
	]
];


/**
 * 主题所有配置
 * 键=>默认值
 * */
define( 'nicen_rrweb_CONFIG', [

] );




