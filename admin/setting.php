<?php
/**
 * @author 友人a丶
 *
 * 将config配置的后台元素输出成表单元素
 * 初始化config内的所有配置
 */

/**
 * 注册菜单
 * */
function nicen_replay_menu_register() {
	foreach ( PLUGIN_nicen_replay as $item ) {
		add_menu_page(
			$item['page_title'],
			$item['menu_title'],
			$item['capablity'],
			$item['id'],
			$item['callback']
		);
	}
}

add_action( 'admin_menu', 'nicen_replay_menu_register' );


/**
 * 注册表单
 * */
function nicen_replay_config_register() {

	/**
	 * 注册自定义字段
	 * */
	register_setting( "nicen_replay_plugin", "nicen_replay_publish_date_start" ); //主题首页副标题
	register_setting( "nicen_replay_plugin", "nicen_replay_publish_date_end" ); //主题首页副标题
	register_setting( "nicen_replay_plugin", "nicen_replay_publish_time_start" ); //主题首页副标题
	register_setting( "nicen_replay_plugin", "nicen_replay_publish_time_end" ); //主题首页副标题
	register_setting( "nicen_replay_plugin", "nicen_replay_plugin_watermark_filter_width_min" ); //水印过滤宽度最小值
	register_setting( "nicen_replay_plugin", "nicen_replay_plugin_watermark_filter_width_max" ); //水印过滤宽度最大值
	register_setting( "nicen_replay_plugin", "nicen_replay_plugin_watermark_filter_height_min" ); //水印过滤宽度最大值
	register_setting( "nicen_replay_plugin", "nicen_replay_plugin_watermark_filter_height_max" ); //水印过滤宽度最大值


	foreach ( PLUGIN_nicen_replay as $item ) {
		/**
		 * 如果有分节
		 * */
		if ( isset( $item['sections'] ) ) {

			foreach ( $item['sections'] as $section ) {

				/**
				 * 循环注册分节
				 * */
				add_settings_section(
					$section['id'],
					$section['title'],
					function () use ( $section ) {
						return $section['callback'] ?? [];
					},
					$item['id']
				);

				/**
				 * 如果有字段
				 * */
				if ( isset( $section['fields'] ) ) {

					foreach ( $section['fields'] as $field ) {

						/**
						 * 注册字段
						 * */
						register_setting( $item['id'], $field['id'] ); //主题首页副标题


						/**
						 * 回调函数如果有自定义输出
						 * */
						if ( isset( $field['before'] ) ) {
							esc_html( $field['before']() );
						}


						/**
						 * 添加字段
						 * */
						add_settings_field(
							$field['id'],
							$field['title'],
							$field['callback'],
							$item['id'],
							$section['id'],
							$field['args'] ?? []
						);


						/**
						 * 回调函数如果有自定义输出
						 * */
						if ( isset( $field['after'] ) ) {
							esc_html( $field['after']() );
						}

					}
				}
			}
		}
	}
}


/**
 * 初始化主题设置
 * */
add_action( 'admin_init', 'nicen_replay_config_register' );
