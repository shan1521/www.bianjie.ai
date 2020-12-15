<template>
	<div class="home_copy_right_content_wrap">
		<div class="home_copy_right_content">
			<span>版权所有©2016-2020 上海边界智能科技有限公司</span>
			<a href="http://beian.miit.gov.cn" target="_blank">沪ICP备17020986号</a>
			<span>
				<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502009028" target="_blank">沪公网安备31011502009028号</a>
				<img src="../assets/home/police_badge.png" alt="">
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Footer"
	}
</script>

<style scoped lang="less">
	@media print {
		.home_copy_right_content_wrap{
			display: none;
		}
	}
	.home_copy_right_content_wrap{
		background: #fafafa;
		border-top: 0.01rem solid #EDEDED;
		.home_copy_right_content{
			padding: 0.2rem 0.05rem;
			max-width: 12rem;
			margin: 0 auto;
			display: flex;
			justify-content: center;
			align-items: center;
			color: rgba(12, 37, 58, 0.6);
			a{
				color: rgba(12, 37, 58, 0.6);
				margin-left: 0.3rem;
			}
			img{
				margin-left: 0.1rem;
				width: 0.16rem;
				height: 0.16rem;
			}
		}
	}
	@media screen and (max-width: 790px){
		.home_copy_right_content_wrap{
			.home_copy_right_content{
				margin-top: 0.1rem;
				flex-direction: column;
			}
		}
	}
</style>
