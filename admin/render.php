<?php

/**
 * @author 友人a丶
 * @date 2022/8/27
 * 表单自定义的渲染函数
 */


/**
 * 插件升级
 */
function nicen_replay_player() {

	$domain = site_url();

	?>
    <div class="player">
        <iframe src="<?php echo nicen_replay_url; ?>/response/player.html?api=<?php echo $domain; ?>"></iframe>
    </div>
	<?php
}


/**
 * 插件升级
 */
function nicen_replay_update() {

	echo '
		<a-form-item :label-col="labelCol" label="版本信息">
		  		当前版本（1.0.0）/ 最新版本（{{version}}）
	    </a-form-item>
	    <a-form-item :label-col="labelCol" label="BUG反馈">
		  		微信号good7341、Github提交issue、博客nicen.cn下方留言均可
	    </a-form-item>
	    <a-form-item :label-col="labelCol" label="仓库地址">
		  		Github：<a target="_blank" href="https://github.com/friend-nicen/nicen-replay">https://github.com/friend-nicen/nicen-replay</a>
				<br />
				Gitee：<a target="_blank" href="https://gitee.com/friend-nicen/nicen-replay">https://gitee.com/friend-nicen/nicen-replay</a>
				<br />
				博客：<a target="_blank" href="https://nicen.cn/7565.html">https://nicen.cn/7565.html</a>
				<br />
				仓库内的版本永远是最新版本，如您觉得插件给你带来了帮助，欢迎star！祝您早日达成自己的目标！
	    </a-form-item>
	     <a-form-item :label-col="labelCol" label="礼轻情意重">
	     
	      <a-popover placement="top" trigger="hover">
		    <template slot="content">
		      <img style="max-width:300px" :src="donate[0]"/>
		    </template>
		    
		    <a-button type="link">
		      微信支持
		    </a-button>
		    
		  </a-popover>
		  <a-popover placement="top" trigger="hover"> 
		  
		    <template slot="content">
		      <img style="max-width:300px" :src="donate[1]"/>
		    </template>
		    
		    <a-button type="link">
		      支付宝支持
		    </a-button>
		    
		  </a-popover>
		  <a-popover placement="top" trigger="hover">
		  
		    <template slot="content">
		     <img style="max-width:300px" :src="donate[2]"/>
		    </template>
		    
		    <a-button type="link">
		      QQ支持
		    </a-button>
		    
		  </a-popover>
	     		
	     		
	     		
	    </a-form-item>
	';

}


/**
 * 插件升级
 */
function nicen_replay_vip() {
	?>
    <div class="vip">
        <div class="top">免费版只提供基础功能，更多功能请使用Pro版：</div>

        <div v-html="html"></div>

        <div class="bottom">
            -------> 下载Pro版（无使用限制，下载的插件一直是最新版）：
            <a href="https://nicen.cn/collect/download"
               target="_blank">https://nicen.cn/collect/download</a>
        </div>

    </div>

	<?php
}