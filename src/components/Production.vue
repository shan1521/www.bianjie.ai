<template>
	<div class="production_container">
		<div class="production_header_content_wrap">
			<div class="production_header_content">
				<h2>公链技术服务-IRISnet</h2>
				<h5>支撑联盟链快速落地的先进技术 · 未来公有链与联盟链融合的发展基石</h5>
			</div>
		</div>
		<div class="production_text_content">
			<!-- <div class="production_text_title">支撑分布式商业应用 IRISnet</div> -->
			<div class="production_video_content"></div>
			<div class="production_text_about_content">
				<h5 class="production_text_title">关于 IRISnet</h5>
				<p class="production_list_item">IRIS Network（简称 IRISnet）是支持DeFi等各种复杂分布式应用的区块链网络，基于高效的<a href="https://tendermint.com/" target="_blank" style="color: #155fff;"> Tendermint </a>和<a href="https://cosmos.network/sdk" target="_blank" style="color:#155fff;"> Cosmos SDK </a>开发。其主网 IRISHub 是 Cosmos 的「多 Hub 多 Zone 」跨链大生态中一个重要的 Hub，也是第一个实现了区块链不分叉、自进化治理升级的 BPoS 网络。</p>
				<p class="production_list_item">IRIS Hub 创新性的引入了面向服务的架构、在区块链上构建服务层，支持公有链、联盟链以及传统商业系统之间的无缝集成，使数据和复杂计算能够跨异构网络互联互通，实现服务跨链调用，是底层区块链研发实力在公链领域的验证。</p>
				<p class="production_list_item">边界智能作为 IRISnet 区块链技术的核心开发团队之一，开发了 iService 跨链服务 SDK 工具包，并用于<router-link :to="`/products/bean`" style="color: #155fff;">区块链边缘分析网络 BEAN </router-link>及<router-link :to="`/products/isch`" style="color:#155fff;">跨链服务联盟枢纽 ISCH </router-link>的高效建设，极大降低了联盟链的开发实施难度，推动了区块链前沿技术支撑商业应用场景的技术发展。</p>
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
    @media print {
        .production_container{
			.production_header_content_wrap{
				-webkit-print-color-adjust: exact;
			}
            .production_text_content{
                max-width: 1400px;
            }
        }
    }
	.production_container{
		width: 100%;
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
		.production_text_content{
			max-width: 12rem;
			margin: 0 auto 2.63rem auto;
			.production_text_title{
				color: #0C253A;
				font-size: 0.18rem;
				line-height: 0.25rem;
				text-align: center;
				font-weight: bold;
				margin: 1rem 0 0.4rem 0;
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
		}
	}
</style>
