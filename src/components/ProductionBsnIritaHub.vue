<template>
	<div class="production_container">
		<div class="production_header_content_wrap">
			<div class="production_header_content">
				<h2>异构区块链跨链平台-BSN-IRITA HUB</h2>
				<h5>国内适配异构公链及联盟链数量最多 · 跨系统可信数据交互和服务调用</h5>
			</div>
		</div>
		<div class="production_content_container">
			<div class="production_text_content">
				<div class="production_text_title"></div>
				<p class="production_list_item">IRITA HUB 是 IRITA 联盟链产品线中专注跨链服务的产品，IRITA HUB 既可以支持 Hyperledger Fabric、FISCO BCOS、梧桐链等联盟链之间的跨链交互，还可以支持联盟链与以太坊、<router-link :to="`/products/irisnet`" style="color: #155fff">IRISnet</router-link> 等公有链的跨链交互，以及访问 Chainlink 预言机等链外可信数据，为实现跨链可信数据交互和跨链协作提供重要的技术基础。</p>
				<p class="production_list_item">IRITA 的跨链机制采用了业界最具创新性的 IBC + iService，其核心的 iService 模块能高效支持包括异构系统跨链、链和大数据存储层等在内的链上/链下/跨链应用层交互。 边界智能相关跨链技术已经开源及拥有自主的创新专利，并受到全球业界广泛认可。</p>
				<p class="production_list_item">IRITA HUB 已经部署在 BSN 国内版和国际版，以及一些国内金融监管链环境中，实现传统金融系统、分布式金融区块链应用、以及其他复杂商业系统间的可信互操作和数据共享，形成未来金融创新服务的业务交互和价值交换枢纽，助力实体经济与数字经济全面融合。</p>
			</div>
		</div>
		<p class="production_bean_title">系统架构</p>
		<div class="bean_img_wrap">
			<img src="../assets/bean/irita_hub.png" alt="">
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
