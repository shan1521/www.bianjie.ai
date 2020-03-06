<template>
	<div class="production_container">
		<div class="production_header_content_wrap">
			<div class="production_header_content">
				<h2>联盟链产品-BEAN</h2>
				<h5>融合区块链技术和AI边缘计算 · 共同发现和释放行业数据价值</h5>
			</div>
		</div>
		<div class="production_content_container">
			<div class="production_text_content">
				<div class="production_text_title">区块链智能信息边缘分析网络 BEAN</div>
				<p class="production_list_item">区块链智能信息边缘分析网络 ( Blockchain Edge Analytics Network，简称BEAN)，是基于<router-link :to="`/products/irisnet`" style="color: #015FFF"> IRISnet 区块链技术</router-link>的分布式智能信息分析和数据交换网络，利用传统分布式人工智能研究中的模型并行性和 SOA 设计模式，将区块链技术应用到分布式分析服务。提供保护数据隐私、尊重数据拥有者权利的加密分布式智能分析及数据交换服务，通过 AI 和区块链技术释放数据价值，支持数据可信分析和交换。</p>
				<p class="production_list_item">BEAN 的基础网络可配置出支持<router-link :to="`/application/cooperation`" style="color:#015FFF">医疗健康</router-link>数据分析和交换、<router-link :to="`/application/finance`" style="color: #015fff">金融创新</router-link>等各自场景的联盟应用链，可提供链上使用授权、基于语义技术智能抽取、数据使用非侵入式审计等功能。这些技术会让链上分布式业务协作时的数据搜索、交换及使用变成可能，也可用于<router-link :to="`/application/multi-trust`" style="color: #015fff">存证授权</router-link>、<router-link :to="`/application/digital-asset`" style="color: #015fff">数字资产化</router-link>等场景的区块链技术支持。</p>
				<p class="production_list_item">BEAN 还可以通过<router-link :to="`/products/isch`" style="color:#015FFF">跨链服务联盟枢纽 ISCH </router-link>和其他区块链网络交互，实现传统商业系统与分布式商业系统的链上链下通联。</p>
			</div>
		</div>
		<p class="production_bean_title">系统架构</p>
		<div class="bean_img_wrap">
			<img src="../assets/bean/bean.png" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		name: "Production"
	}
</script>

<style scoped lang="less">
	@media print {
		.production_container{
			.production_header_content_wrap{
				-webkit-print-color-adjust: exact;
			}
			.production_content_container{
				.production_text_content{
					max-width: 1400px;
				}
			}

		}
	}
	.production_container{
		width: 100%;
		background: #fafafa;
		.production_header_content_wrap{
			background: url("../assets/home/IRISnet.png") no-repeat center center;
			background-size: cover;
			height: 4.6rem;
			display: flex;
			align-items: center;
			justify-content: center;
			.production_header_content{
				text-align: center;
				h2{
					font-size: 0.6rem;
					color: #fff;
					line-height: 0.84rem;
					font-weight: lighter;
				}
				h5{
					font-size: 0.22rem;
					color: #fff;
					line-height: 0.3rem;
					font-weight: lighter;
					margin-top: 0.2rem;
				}
			}
		}
		.production_content_container{
			background: #fff;
			.production_text_content{
				max-width: 12rem;
				padding-bottom: 1rem;
				margin: 0 auto;
				.production_text_title{
					font-size:0.18rem;
					text-align: center;
					margin: 0 0 0.4rem 0;
					color: #0C253A;
					font-weight: 600;
					padding-top: 1rem;
				}
				.production_list_item{
					color: #0C253A;
					line-height: 0.28rem;
					font-size: 0.14rem;
				}
				.production_list_item:nth-of-type(2){
					margin-top: 0.14rem;
				}
				.production_list_item:nth-of-type(3){
					margin-top: 0.14rem;
				}
			}
		}
		.production_bean_title{
			text-align: center;
			font-size: 0.18rem;
			font-weight: 600;
			color: #0c253a;
			line-height: 0.25rem;
			padding: 0.6rem 0;
		}
		.bean_img_wrap{
			max-width: 12rem;
			margin: 0 auto 1rem auto;
			img{
				width: 100%;
			}
		}
	}
	@media screen and (max-width: 1200px){
		.production_container{
			.production_header_content_wrap{
				.production_header_content{
					h5{
						box-sizing: border-box;
						padding:  0 0.2rem;
					}
				}
			}
			.production_text_content{
				box-sizing: border-box;
				padding:  0 0.2rem;
			}
			.bean_img_wrap{
				box-sizing: border-box;
				padding: 0 0.2rem;
			}
		}
	}
	@media screen and (min-width: 500px) and (max-width: 768px){
		.production_container{
			.production_header_content_wrap{
				.production_header_content{
					h2{
						font-size: 0.48rem;
					}
				}
			}
			.production_text_content{
				margin-bottom: 0.5rem;
			}
			.bean_img_wrap{
				box-sizing: border-box;
				padding: 0 0.2rem;
				margin: 0 auto 0.5rem auto;
			}
		}
	}

	@media screen  and (max-width: 500px) {
		.production_container{
			.production_header_content_wrap{
				.production_header_content{
					h2{
						font-size: 0.32rem;
					}
					h5{
						font-size: 0.14rem;
						line-height: 0.21rem;
						padding: 0 0.6rem;
					}
				}
			}
			.production_text_content{
				margin-bottom: 0.5rem;
			}
			.bean_img_wrap{
				margin: 0 auto 0.5rem auto;
				box-sizing: border-box;
				padding: 0 0.2rem;
			}
		}
	}
</style>
