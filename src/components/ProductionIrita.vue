<template>
	<div class="production_container">
		<div class="production_header_content_wrap">
			<div class="production_header_content">
				<h2>支持下一代分布式商业的联盟链产品-IRITA</h2>
				<h5>创新支持基于 iService 的链上链下通联</h5>
			</div>
		</div>
		<div class="production_text_content">
			<div class="production_text_title"></div>
			<p class="production_list_item">
				<a href="https://irita.bianjie.ai" style="color: #155fff" target="_blank" rel="noreferrer noopener">IRITA</a> 是边界智能以区块链跨链、隐私计算及大数据分析技术创新为核心，自主研发的支持下一代分布式商业系统的企业级联盟链产品线。IRITA 具有保护隐私的数据加密共享、高效的共识协议、领先的跨链技术、实用性极强的链上链下系统交互及多方协作业务流集成能力、灵活的资产数字化建模与可信交换支撑、以及大数据存储 6 大核心技术优势，可广泛应用于金融、医疗健康、供应链、车联网等多种商业场景，为实体经济提供基于区块链信任机器的价值赋能。
			</p>
			<p class="production_list_item">IRITA 支持中国国密标准，并有完善的 SDK 及运维工具支持，在性能、安全可靠性、认证及权限、可维护性、可扩展性和运维监控等多方面都满足企业级应用需求。</p>
			
			<p class="production_list_item">IRITA 产品线中各个子产品具有模块化的架构和不同的功能特点，可以基于 IRITA  产品线根据不同业务场景高效打造不同行业应用：</p>
			<p class="production_list_item_children"> • IRITA CE  开源版本，可以供开发者学习、快速上手熟悉 IRITA 的体系架构、并部署行业验证应用系统等。</p>
			<p class="production_list_item_children"> • IRITA HUB  异构区块链跨链服务枢纽，支持各种异构区块链网络间跨链资产交换/转移及信息安全验证；支持链上链下业务系统数据安全共享和跨链服务调用。目前已上线 BSN。</p>
			<p class="production_list_item_children"> • IRITA OPB  基于智能和约的开放联盟链，支持 SM2 等多种国密算法，以应用服务平台形式支持分布式商业系统应用快速开发、部署及运营。目前已上线 BSN。</p>
			<p class="production_list_item_children"> • IRITA BEAN  保护数据隐私的数据共享平台，专注于大数据隐私保护和边缘分析的产品，集成了主流开源隐私计算框架，实现了大数据多层次授权共享、多方隐私保护查询、多方联盟学习等能力；支持对数据和业务流程全生命周期进行监管。</p>
			<p class="production_list_item_children"> • IRITA DA  资产数字化确权及交换平台，专注于支持 NFT 登记、确权及可信交换的产品；支持实物资产在链上的数字化建模和全生命周期管理；实现智能合约驱动实体经济相关流程的自动化运行，降低沟通与业务运营成本。</p>
			<!-- <p class="production_list_item">
				<a href="https://irita.bianjie.ai" style="color: #155fff" target="_blank" rel="noreferrer noopener">IRITA</a> 是边界智能以区块链跨链、隐私计算及大数据分析技术创新为核心，自主研发的支持下一代分布式商业系统的企业级联盟链产品。IRITA 具有保护隐私的数据加密共享、高效的共识协议、领先的跨链技术、实用性极强的链上链下系统交互能力、灵活的资产数字化建模与可信交换支撑、以及大数据支持等 6 大核心技术优势，可广泛应用于金融、医疗健康、供应链、车联网等多种商业场景，为实体经济提供基于区块链信任机器的价值赋能。</p>
			<p class="production_list_item">IRITA 支持中国国密标准，并有完善的 SDK 及运维工具支持，在性能、安全可靠性、认证及权限、可维护性、可扩展性和运维监控等多方面都满足企业级应用需求。</p>
			
			<p class="production_list_item">IRITA 具有模块化的架构，各个子产品具有不同的功能，可以根据不同业务场景高效打造不同行业应用：</p>
			<p class="production_list_item_children"> • IRITA-Lite 属于开源版本</p>
			<p class="production_list_item_children"> • IRITA BEAN 保护数据隐私的数据共享，可用于物联网、医疗健康等数据管理平台</p>
			<p class="production_list_item_children"> • IRITA DA 资产数字化确权及交换，可应用于供应链金融、碳中和等领域</p>
			<p class="production_list_item_children"> • IRITA HUB 跨链服务枢纽，已上线BSN</p>
			<p class="production_list_item_children"> • IRITA OPB 开放联盟链，已上线BSN</p> -->
			
<!--			<p class="production_list_item">IRITA BEAN 在 2018 年 9 月荣获中国健康医疗大数据产业创新大赛 TMT 数据组一等奖及天使之星组冠军。基于 IRITA-BEAN 的星康链及 IRITA-HUB 在 2019 年荣获由中国电子信息产业发展研究院赛迪研究院主导评选 2019 中国优秀区块链解决方案。</p>-->
			
		</div>
		<div class="production_irita_core_content">
			<div class="production_content_wrap">
				<h2 class="production_title">核心技术优势</h2>
				<ul class="production_core_list_content">
					<li class="production_core_list_item" v-for="(item,index) in coreArray" :key="index">
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
					<h3 class="production_irita_title">产品架构</h3>
					<img src="../assets/irita/IRITA_framework.png" alt="IRITA 产品架构">
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
						src: require("../assets/irita/iservice.png"),
						title:'面向服务、支持多方协作 - iService',
						section:'链上链下可信交互，高效支持对于 ERP 等各类传统系统的有效集成'
					},
					{
						src: require("../assets/irita/privacy.png"),
						title:'隐私计算 - 数据多方安全协作',
						section:'支持数据多层次高效安全加密存储',
						sectionSecond:'通过多种隐私计算方法，保护各方数据所有权和隐私，支持多方协作时的数据不出门，实现数据可用不可见'
					},
					{
						src: require("../assets/irita/tx.png"),
						title:'资产数字化建模与可信交换',
						section:'支持对链上资产数据多元结构的灵活建模，实现链上可信交换',
						sectionSecond:'以 NFT 为基础，支持供应链、知识产权、医疗、存证等各领域的资产数字化'
					},
					{
						src: require("../assets/irita/tendermint.png"),
						title:'高效共识 - Tendermint',
						section:'互联网级别可应用的拜占庭共识协议，Facebook、长安链也借鉴使用此共识技术'
					},
					{
						src: require("../assets/irita/ibc.png"),
						title:'先进跨链技术 - IBC 协议',
						section:'IBC 支持异构系统围绕数据和计算的跨链调用和可信交互',
						sectionSecond:'边界智能团队参与并贡献了 IBC 中重要模块——ICS20 跨链转账的开发'
					},
					{
						src: require("../assets/irita/data.png"),
						title:'大数据存储',
						section:'自带存储层，支持云存储和分布式存储',
						sectionSecond:'数据仓库和链式数据结合支持链上数据高效全生命周期查询'
					},
					
				]
			}
		}
	}
</script>

<style scoped lang="less">
	@import "../style/convert";
	@media print {
		.production_container{
			background: #fff !important;
			.production_header_content_wrap{
				-webkit-print-color-adjust: exact;
				.production_header_content{
					h5{
						padding: 0 ~`convertPxToCm('20px')`!important;
					}
				}
			}
			.production_text_content{
				padding-bottom: ~`convertPxToCm('60px')`!important;
				.production_text_title{
					margin-top: ~`convertPxToCm('40px')`!important;
				}
				.production_list_item{
					padding: 0 ~`convertPxToCm('20px')`!important;
				}
			}
			.production_irita_core_content{
				.production_content_wrap{
					padding-top: ~`convertPxToCm('20px')` !important;
					padding-bottom: ~`convertPxToCm('120px')` !important;
					.production_title{
					}
					.production_core_list_content{
						.production_core_list_item{
							margin-top: ~`convertPxToCm('20px')` !important;
							margin-right: ~`convertPxToCm('61px')` !important;
							.production_core_list_item_img_icon{
								margin-bottom: ~`convertPxToCm('40px')`!important;
							}
							.production_core_list_item_title{
								margin-bottom: ~`convertPxToCm('10px')`!important;
							}
						}
					}
				}
			}
			.production_irita_img_content{
				.production_irita_img_wrap{
					.production_irita_img{
						padding-top: ~`convertPxToCm('80px')`!important;
					}
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
					text-align: center;
					font-size: 0.6rem;
					color: #fff;
				}
				h5{
					font-size: 0.22rem;
					color: #fff;
					line-height: 0.3rem;
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
			.production_list_item_children{
				text-indent: 0.2rem;
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
			.production_list_item:last-child{
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
