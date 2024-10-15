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
				'title'    => '数据列表',
				'callback' => [
					"after" => "nicen_replay_player"
				],
			],
			[
				"id"     => "nicen_replay_basic",
				'title'  => '基础设置',
				'fields' => [
					[
						'id'       => 'text_info',
						'title'    => '功能设置说明',
						'callback' => 'nicen_replay_plugin_form_text',
						'args'     => [
							'info' => '<span style="color: red;">用于设置录制用户行为功能生效范围的一些选项<br/>根据自身需求来定制插件功能</span>'
						]
					],
					[
						'id'       => 'nicen_replay_protect_article',
						'title'    => '不录制密码保护的文章',
						'callback' => 'nicen_replay_form_switch',
						'args'     => [
							'tip' => '开启后，将不会对密码保护的文章进行录制'
						]
					],
				]
			],
			[
				"id"       => "nicen_replay_update",
				'title'    => '插件升级',
				'callback' => [
					"after" => "nicen_replay_update"
				],
			],
			[
				"id"       => "nicen_replay_vip",
				'title'    => 'Pro版',
				'callback' => [
					"after" => "nicen_replay_vip"
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
	"nicen_replay_plugin_private"  => md5( time() . rand( 0, 9999 ) ),
	/* 不录制密码保护的文章 */
	"nicen_replay_protect_article" => 1,
] );




