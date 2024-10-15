<?php


/**
 * 后台所有表单
 * */
const PLUGIN_nicen_replay = [
	[
		"id"         => "nicen_replay_plugin",//主题后台设置字段
		"menu_title" => '用户行为回放',
		'page_title' => '用户行为回放',
		'callback'   => 'nicen_replay_setting_load',
		'capablity'  => 'manage_options',
		"sections"   => [
			[
				"id"       => "nicen_replay_player",
				'title'    => '回放',
				'callback' => [
					"render" => "nicen_replay_player"
				],
			],
			[
				"id"       => "nicen_replay_update",
				'title'    => '插件升级',
				'callback' => [
					"render" => "nicen_replay_update"
				],
			],
			[
				"id"       => "nicen_replay_vip",
				'title'    => 'Pro版',
				'callback' => [
					"render" => "nicen_replay_vip"
				],
			]
		]
	]
];


/**
 * 主题所有配置
 * 键=>默认值
 * */
define( 'nicen_replay_CONFIG', [
	/* 随机接口秘钥 */
	"nicen_replay_plugin_private" => md5( time() . rand( 0, 9999 ) )
] );




