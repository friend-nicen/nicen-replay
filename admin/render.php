<?php

/**
 * @author 友人a丶
 * @date 2022/8/27
 * 表单自定义的渲染函数
 */


/**
 * 插件升级
 */
function nicen_rrweb_player() {

	$scheme = ! empty( $_SERVER['HTTPS'] ) && $_SERVER['HTTPS'] !== 'off' ? 'https' : 'http';
	$domain = $scheme . '://' . $_SERVER['HTTP_HOST'];

	?>
    <div class="player">
        <iframe src="<?php echo nicen_rrweb_url; ?>/response/player.html?api=<?php echo $domain; ?>"></iframe>
    </div>
	<?php
}