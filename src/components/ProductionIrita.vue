<template>
	<div class="production_container">
		<div class="production_header_content_wrap">
			<div class="production_header_content">
				<h2>联盟链产品-IRITA</h2>
				<h5>Cosmos 生态的首个企业级开源项目 · 创新支持基于 iService 的链上链下通联</h5>
			</div>
		</div>
		<div class="production_text_content">
			<div class="production_text_title">跨域行业互信联盟产品 IRITA</div>
			<p class="production_list_item">
				跨域行业互信联盟产品（ Inter-Realm Industry Trust Alliance，简称IRITA ）是 Cosmos 生态中第一个企业级联盟链产品，基于现代区块链技术框架<a href="https://tendermint.com/" target="_blank" style="color: #155fff;"> Tendermint </a>和<router-link :to="`/products/irisnet`" style="color:#155fff;"> IRIS SDK </router-link>，并结合边界智能团队多年行业经验打造而成。</p>
			<p class="production_list_item">IRITA 具有保护隐私的数据加密共享、高效的共识协议、领先的跨链技术、实用性极强的链上链下系统交互能力、灵活的数字资产建模与交易支持以及大数据技术支撑的业务分析 6 大核心技术优势，可广泛应用于金融、医疗健康、供应链等多种商业场景，为实体经济提供基于区块链信任机器的价值赋能。</p>
			<p class="production_list_item">IRITA 现有 Professional 和 Lite 两个版本。<a href="https://github.com/bianjieai/irita" target="_blank" style="color: #155fff;">开源的 Lite </a>可以供开发者学习、快速上手熟悉 IRITA 的体系架构、并部署行业验证应用系统</p>
		<!--	<div class="production_list_content">
				<p class="production_list_title">IRITA 可以灵活使用在多种行业，尤其在<router-link :to="`/application/finance`" style="color: #155fff;">金融创新</router-link>行业，围绕<router-link :to="`/application/digital-asset`" style="color: #155fff;">资产数字化</router-link>后的确权和流通，具有6大核心技术优势：</p>
				<p>1）共识底层：<a href="https://tendermint.com/" target="_blank"  style="color: #155fff;">Tendermint </a>是首个可以在互联网级别可应用的拜占庭共识协议，是Libra也沿用的共识技术</p>
				<p>2）<a href="https://cosmos.network/" target="_blank" style="color: #155fff;">跨链 IBC </a>: 国际合作团队贡献了业内公认的、领先跨链技术标准设计与实施；支持各种异构链间可信交互</p>
				<p>3）数据授权共享：数据在链上加密存储，保护各方数据所有权和隐私；只有用户授权，数据才会共享给第三方</p>
				<p>4）iService：链上链下各类型系统的交互，基于<router-link :to="`/products/irisnet`" style="color:#155fff;"> IRIS SDK </router-link>将各类技术的有机结合、自然演进过渡</p>
				<p>5）数字资产建模与交易：支持对数字资产数据多元结构的灵活建模；非常适合实现链上交易平台（DEX）；以 NFT（非同质化通证）为基础，支持供应链、知识产权、医疗、存证等各领域的数字资产化</p>
				<p>6）大数据支持：自带存储层支持云存储和分布式存储；数据仓库和链式数据结合支持链上数据高效全生命周期查询</p>
			</div>-->
		</div>
		<div class="production_irita_core_content">
			<div class="production_content_wrap">
				<h2 class="production_title">核心技术优势</h2>
				<ul class="production_core_list_content">
					<li class="production_core_list_item" v-for="item in coreArray">
						<div class="production_core_list_item_img_icon">
							<img :src="item.src" alt="">
						</div>
						<h3 class="production_core_list_item_title">{{item.title}}</h3>
						<div class="production_list_content">
							<p class="production_core_list_item_section">{{item.section}}</p>
							<p class="production_core_list_item_section_second">{{item.sectionSecond}}</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="production_irita_img_content">
			<div class="production_irita_img_wrap">
				<div class="production_irita_img">
					<h3 class="production_irita_title">系统架构</h3>
					<img src="../assets/irita/irita.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Production",
		data() {
			return {
				coreArray:[
					{
						src: require("../assets/irita/tendermint.png"),
						title:'高效共识-Tendermint',
						section:'互联网级别可应用的拜占庭共识协议，Libra也沿用此技术'
					},
					{
						src: require("../assets/irita/ibc.png"),
						title:'先进跨链技术-IBC协议',
						section:'团队贡献的业内公认的、国际领先跨链技术标准设计与实施',
						sectionSecond:'支持各种异构链间可信交互'
					},
					{
						src: require("../assets/irita/privacy.png"),
						title:'隐私计算-数据授权共享',
						section:'数据在链上加密存储，保护各方数据所有权和隐私',
						sectionSecond:'只有用户授权数据才会共享给第三方'
					},
					{
						src: require("../assets/irita/tx.png"),
						title:'数字资产建模与交易',
						section:'支持对数字资产数据多元结构的灵活建模非常适合实现链上交易平台（DEX）以NFT（非同质化通证）为基础，支持各领域的数字资产化'
					},
					{
						src: require("../assets/irita/data.png"),
						title:'大数据支持',
						section:'自带存储层支持云存储和分布式存储；数据仓库和链式数据结合支持链上数据高效全生命周期查询'
					},
					{
						src: require("../assets/irita/iservice.png"),
						title:'面向服务-iService',
						section:'链上链下可信交互，高效支持对于ERP等各类传统系统的集成'
					},
				]
			}
		}
	}
</script>

<style scoped lang="less">
	@media print {
		.production_container{
			background: #fff !important;
			.production_header_content_wrap{
				-webkit-print-color-adjust: exact;
				.production_header_content{
					h5{
						padding: 0 ~`fontSize('20px')`!important;
					}
				}
			}
			.production_text_content{
				padding-bottom: ~`fontSize('60px')`!important;;
				.production_list_item{
					padding: 0 ~`fontSize('20px')`!important;
				}
			}
			.production_irita_core_content{
				.production_content_wrap{
					.production_core_list_content{
						.production_core_list_item{
							margin-top: ~`fontSize('20px')` !important;;
							margin-right: ~`fontSize('61px')` !important;
						}
					}
				}
			}
			.production_irita_img_content{
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
					text-align: center;
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
				font-size:0.18rem;
				text-align: center;
				color: #0C253A;
				margin: 1rem 0 0.4rem 0;
				font-weight: bold;
			}
			.production_list_item{
				font-size: 0.14rem;
				line-height: 0.28rem;
				color: #0C253A;
			}
			.production_list_item:nth-of-type(2){
				margin-top: 0.16rem;
			}
			.production_list_item:nth-of-type(3){
				margin-top: 0.16rem;
			}
			.production_list_content{
				margin-top: 0.25rem;
				color: #0C253A;
				p{
					font-size: 0.14rem;
					margin-bottom: 0.14rem;
				}
			}
		}
		.production_irita_core_content{
			background: #fff;
			.production_content_wrap{
				max-width: 12rem;
				margin: 0 auto;
				padding-top: 1rem;
				padding-bottom: 1rem;
				.production_title{
					text-align: center;
					font-size: 0.18rem;
				}
				.production_core_list_content{
					list-style: none;
					display: flex;
					flex-wrap: wrap;
					margin-top: 0.65rem;
					justify-content: space-between;
					.production_core_list_item{
						max-width: 2.7rem;
						margin-right: 1.46rem;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: space-between;
						.production_list_content{
							min-height: 1rem;
							.production_core_list_item_section{
								font-size: 0.14rem;
								font-weight:400;
								color:rgba(138,153,165,1);
								line-height: 0.24rem;
								letter-spacing: 0.01rem;
								text-align: center;
							}
							.production_core_list_item_section_second{
								font-size: 0.14rem;
								font-weight:400;
								color:rgba(138,153,165,1);
								line-height: 0.24rem;
								letter-spacing: 0.01rem;
								text-align: center;
							}
						}
						.production_core_list_item_title{
							font-size: 0.16rem;
							font-weight:400;
							color:rgba(12,37,58,1);
							line-height: 0.22rem;
							margin-bottom: 0.2rem;
						}
						.production_core_list_item_img_icon{
							width: 0.5rem;
							margin-bottom: 0.41rem;
							img{
								width: 100%;
							}
						}
					}
					.production_core_list_item:nth-of-type(3){
						margin-right: 0;
						
					}
					.production_core_list_item:nth-of-type(6){
						margin-right: 0;
						
					}
				}
			}
		}
		.production_irita_img_content{
			.production_irita_img_wrap{
				max-width: 12rem;
				margin: 0 auto;
				box-sizing: border-box;
				padding: 0 0.2rem;
				.production_irita_img{
					padding: 1rem 0;
					.production_irita_title{
						font-size: 0.18rem;
						font-weight:600;
						color:rgba(12,37,58,1);
						line-height: 0.25rem;
						text-align: center;
						padding-bottom: 0.6rem;
					}
					img{
						width: 100%;
					}
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
			.production_irita_core_content{
				.production_content_wrap{
					max-width: 7.68rem;
					.production_core_list_content{
						justify-content: center;
						.production_core_list_item{
							padding-top: 0.4rem;
						}
					
						.production_core_list_item:nth-of-type(2){
							margin-right: 0;
							
						}
						.production_core_list_item:nth-of-type(3){
							margin-right: 1.46rem;
							
						}
						.production_core_list_item:nth-of-type(4){
							margin-right: 0;
							
						}
						.production_core_list_item:nth-of-type(6){
							margin-right: 0;
							
						}
					}
				}
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
			.production_irita_core_content{
				.production_content_wrap{
					max-width: 5rem;
					.production_core_list_content{
						justify-content: center;
						.production_core_list_item{
							padding-top: 0.4rem;
							max-width: 2rem;
							margin-right: 13%;
							.production_list_content{
								min-height: 1.3rem;
							}
						}
						.production_core_list_item:nth-of-type(2){
							margin-right: 0;
						
						}
						.production_core_list_item:nth-of-type(3){
							margin-right: 13%;
						
						}
						.production_core_list_item:nth-of-type(4){
							margin-right: 0;
							
						}
						.production_core_list_item:nth-of-type(6){
							margin-right: 0;
							
						}
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
			.production_irita_core_content{
				.production_content_wrap{
					max-width: 375rem;
					padding-left: 0.2rem;
					padding-right: 0.2rem;
					.production_core_list_content{
						justify-content: center;
						.production_core_list_item{
							padding-top: 0.4rem;
							max-width: 3.2rem;
							margin-right: 0;
							.production_core_list_item_section{
								min-height: auto;
							}
						}
						.production_core_list_item:nth-of-type(2){
							margin-right: 0;
						
						}
						.production_core_list_item:nth-of-type(3){
							margin-right: 0;
							
						}
						.production_core_list_item:nth-of-type(4){
							margin-right: 0;
							
						}
						.production_core_list_item:nth-of-type(6){
							margin-right: 0;
							
						}
					}
				}
			}
		}
	}
</style>
