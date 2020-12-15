<template>
	<div class="production_container">
		<div class="production_header_content_wrap">
			<div class="production_header_content">
				<h2>底层技术服务-IRISnet</h2>
				<h5>支撑联盟链快速落地的先进技术 · 建立企业级联盟融合的发展基石</h5>
			</div>
		</div>
		<div class="production_content_container">
			<div class="production_text_content">
				<div class="production_video_content"></div>
				<div class="production_text_about_content">
					<h5 class="production_text_title">自进化的跨链服务网络 IRISnet</h5>
					<p class="production_list_item"><a href="https://www.irisnet.org/" target="_blank" style="color: #155fff">IRIS Network（简称 IRISnet）</a>是支持 DeFi 等各种复杂分布式应用的区块链网络，基于高效的<a href="https://tendermint.com/" target="_blank" style="color: #155fff;"> Tendermint </a>和<a href="https://cosmos.network/sdk" target="_blank" style="color:#155fff;"> Cosmos SDK </a>开发。其主网 IRISHub 是 Cosmos 的「多 Hub 多 Zone 」跨链大生态中一个重要的 Hub，也是第一个实现了区块链不分叉、自进化治理升级的 BPoS 网络。其开发团队包括获得多个技术创新⼤奖的边界智能（Bianjie）以及 Cosmos 核⼼开发团队 Tendermint 。</p>
					<p class="production_list_item">IRISnet 提供⽀持 DeFi 应⽤开发的多种基础模块，并能⽀持开放网络、联盟链以及传统商业系统之间的⽆缝集成，使得数据和复杂计算能够跨异构网络互联互通，实现服务的跨链调⽤。</p>
					<p class="production_list_item">边界智能作为 IRISnet 区块链技术的核心开发团队之一，开发了 iService 跨链服务 SDK 工具包，并用于区块链边缘分析网络 BEAN 及跨链服务联盟枢纽 ISCH 的高效建设，极大降低了联盟链的开发实施难度，推动了区块链前沿技术支撑商业应用场景的技术发展。</p>
				</div>
			</div>
		</div>
		<p class="production_irisnet_title">IRISnet 的跨链服务生态</p>
		<div class="irisnet_content">
			<div class="irisnet_content_wrap">
				<img src="../assets/home/irisnet_framework.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Production"
	}
</script>

<style scoped lang="less">
	@import "../style/convert";
    @media print {
        .production_container{
	        background: #fff !important;
			.production_header_content_wrap{
				-webkit-print-color-adjust: exact;
			}
	        .irisnet_content{
		       .irisnet_content_wrap{
				   max-width: ~`convertPxToCm("700px")`!important;
			       img{
				       max-height: ~`convertPxToCm("500px")`!important;
			       }
			   }
	        }
			.production_content_container{
				.production_text_content{
					padding-bottom:~`convertPxToCm('150px')` !important;
					.production_text_about_content{
						.production_text_title{
							padding-top: ~`convertPxToCm('40px')` !important;

						}
					}
				}
			}
			.production_irisnet_title{
				padding-top: ~`convertPxToCm('60px')` !important;

			}
        }
    }
	.production_container{
		width: 100%;
		background: #fafafa;
		.production_header_content_wrap{
			background: url("../assets/home/IRISnet.svg") no-repeat center center;
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
					;
				}
				h5{
					font-size: 0.22rem;
					color: #fff;
					line-height: 0.3rem;
					;
					margin-top: 0.2rem;
				}
			}
		}
		.production_irisnet_title{
			text-align: center;
			font-size: 0.18rem;
			font-weight: 600;
			color: #0c253a;
			line-height: 0.25rem;
			padding: 0.6rem 0;
		}
		.production_content_container{
			background: #fff;
			.production_text_content{
				max-width: 12rem;
				padding-bottom: 1rem;
				margin: 0 auto;
				.production_text_title{
					color: #0C253A;
					font-size: 0.18rem;
					line-height: 0.25rem;
					text-align: center;
					font-weight: bold;
					margin: 0 0 0.4rem 0;
					padding-top: 1rem;
				}
				.production_text_about_content{
					.production_text_title{

					}
					.production_list_item{
						font-size: 0.14rem;
						color: #0C253A;
						line-height: 0.28rem;
					}
					.production_list_item:nth-of-type(2){
						margin: 0.14rem 0;
					}
				}
			}
		}
		.irisnet_content{
			.irisnet_content_wrap{
				max-width: 12rem;
				margin: 0 auto;
				padding: 0 0 1rem 0;
				display: flex;
				justify-content: center;
				img{
					max-width: 5rem;
					max-height: 6.82rem;
				}
			}
		}
	}
	@media screen and (max-width: 1200px){
		.production_container{
			.irisnet_content{
				.irisnet_content_wrap{
					padding: 0 0.2rem 0.5rem 0.2rem;
				}
			}
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
		}
	}
	@media screen and (min-width: 500px) and (max-width: 768px){
		.production_container{
			.irisnet_content{
				.irisnet_content_wrap{
					padding: 0 0.2rem 0.5rem 0.2rem;
				}
			}
			.production_header_content_wrap{
				.production_header_content{
					h2{
						font-size: 0.48rem;
					}
				}
			}
		}
	}

	@media screen  and (max-width: 500px) {
		.production_container{
			.irisnet_content{
				.irisnet_content_wrap{
					padding: 0 0.2rem 0.5rem 0.2rem;
					img{
						width: 100%;
					}
				}
			}
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
		}
	}
</style>
