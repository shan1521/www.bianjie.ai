<template>
	<div class="production_container">
		<div class="production_header_content_wrap">
			<div class="production_header_content">
				<h2>联盟链产品-ISCH</h2>
				<h5>区块链与传统企业应用的创新融合 · 业务交互和价值交换的生态枢纽</h5>
			</div>
		</div>
		<div class="production_text_content">
			<div class="production_text_title">跨链服务联盟枢纽 ISCH</div>
			<p class="production_list_item">联盟链服务枢纽（IRIS Service Consortium Hub，简称 ISCH ）是基于开源的<router-link :to="`/products/irisnet`" style="color:#155fff;"> IRISnet 区块链技术</router-link>中 iService 开源工具包开发的联盟链产品。IRISnet 是领先的区块链跨链服务网络，通过在区块链上创新性地构建服务层，能高效支持跨异构区块链或链上链下的互操作，让复杂的商业逻辑保留在原有系统或在链下执行，通过服务在区块链网络上实现多方可信协作。ISCH 支持参与商业协作的分布式应用系统，作为服务消费方通过 iService 高效地调用其他区块链（甚至是传统系统）在 ISCH 上发布的数据和计算服务。</p>
			<p class="production_list_item">区块链技术的主流应用主要在<router-link :to="`/application/finance`" style="color: #155fff;">供应链金融</router-link>、<router-link :to="`/application/digital-asset`" style="color: #155fff;">资产证券化</router-link>、<router-link :to="`/application/multi-trust`" style="color: #155fff;">数据共享</router-link>、<router-link :to="`/application/multi-trust`" style="color:#155fff;">存证授权</router-link>、跨境支付等领域的可信协同。边界智能正与合作伙伴共同实践将ISCH用于<router-link :to="`/application/finance`" style="color:#155fff;">金融创新</router-link>领域，实现传统金融系统、分布式金融区块链应用、<以及其他复杂商业系统间的可信互操作></以及其他复杂商业系统间的可信互操作>和数据共享，形成未来金融创新服务的业务交互和价值交换枢纽，助力实体经济与数字经济全面融合。</p>
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
			margin: 0 auto 1rem auto;
			.production_text_title{
				text-align: center;
				margin: 1rem 0 0.4rem 0;
				color: #0C253A;
				font-size: 0.18rem;
				font-weight: bold;
				line-height: 0.25rem;
			}
			p{
				font-size: 0.14rem;
				color: #0C253A;
				line-height: 0.28rem;
				margin-bottom: 0.14rem;
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
