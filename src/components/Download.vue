<template>
	<div class="about_container_content">
		<div class="about_content_wrap">
			<div class="about_content">
				<h2>了解更多</h2>
			</div>
		</div>
		<div class="content">
			<span>敬请期待</span>
		</div>
		<div class="qr_content">
			<div class="qr_content_wrap">
				<h1>关注与联系</h1>
				<div class="qr_img_content">
					<img src="../assets/home/qr_bianjie.png" alt="">
				</div>
				<p content="mail_content">联系我们: contact@bianjie.ai</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Download"
	}
</script>

<style scoped lang="less">
	.about_container_content{
		width: 100%;
		.about_content_wrap{
			background: url("../assets/home/about.jpg") no-repeat center center;
			background-size: cover;
			height: 4.6rem;
			display: flex;
			align-items: center;
			justify-content: center;
			.about_content{
				text-align: center;
				h2{
					font-size: 0.6rem;
					line-height: 0.84rem;
					color: #fff;
					;
				}
				h5{
					margin-top: 0.2rem;
					font-size: 0.22rem;
					line-height: 0.3rem;
					;
					color: #fff;
				}
			}
		}
		.content{
			background: #fafafa;
			min-height: 3rem;
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
			span{
				font-size: 0.4rem;
				text-align: center;
			}
		}
		.qr_content{
			margin-top: 1rem;
			width: 100%;
			.qr_content_wrap{
				max-width: 12rem;
				margin: 0 auto;
				text-align: center;
				margin-bottom: 1rem;
				h1{
					text-align: center;
					margin-bottom: 0.2rem;
					font-size: 0.18rem;
				}
				.qr_img_content{
					width: 1.38rem;
					margin: 0 auto;
					img{
						width: 100%;
					}
				}
			}
		}
	}
	@media screen and (max-width: 1200px){
		.about_container_content{
		
		}
	}
	@media screen  and (max-width: 768px){
		.about_container_content{
			.about_content_wrap{
				.about_content{
					h2{
						font-size: 0.42rem;
					}
					h5{
						font-size: 0.18rem;
						margin: 0.2rem 0.2rem 0 0.2rem;
					}
				}
			}
			
		}
	}
	@media screen and (max-width: 375px){
		.about_container_content{
			.about_content_wrap{
				.about_content{
					text-align: center;
					h2{
						font-size: 0.32rem;
					}
					h5{
						text-align: center;
						margin: 0.2rem 0.6rem 0 0.6rem;
						font-size: 0.14rem;
						line-height:0.21rem;
					}
				}
			}
		}
	}
</style>
