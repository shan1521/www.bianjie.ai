<template>
	<div class="applications_content_container">
		<div class="applications_content_wrap">
			<div class="applications_content">
				<h2>应用场景-数字资产</h2>
				<h5>数字资产的全生命周期管理 · 提升资产数字化交易的效率</h5>
			</div>
		</div>
		<div class="applications_text_content">
			<div class="applications_text_title">资产登记与交易</div>
			<div class="application_list_content">
				<p class="application_item">将区块链技术用于构建可信的数字资产登记与交易平台，通过加密、授权、控制、计算和验证，可以实现数字资产的全生命周期管理，极大地提升数字资产流通的可信性和效率。</p>
				<p> • 支持由企业或个人拥有的、以电子数据形式存在的各类资产在区块链上登记流转</p>
				<p> • 支持在数字经济发展过程中不断数字化的实体资产在区块链上登记流转</p>
				<p> • 支持第三方机构通过链上服务提供信息验证和确权，支持分布式应用之间跨区块链、以及与非区块链系统的跨链传输</p>
				<p> • 支持丰富的数字资产类型，更好的支撑价值流通、共享经济、积分互通等多种场景的应用</p>
			</div>
		</div>
		<!--<div class="solution_content">
			<div class="solution_title">解决方案</div>
		</div>-->
		<div class="program_features_content">
			<div class="program_features_title">方案特色</div>
			<div class="program_features_top_content">
				<div class="program_features_top_left_content">
					<div class="program_features_left_img_content">
						<img src="../assets/home/digital_asset_1.png" alt="">
					</div>
					<div class="program_features_left_list_content">
						<h5>高性能的共识算法</h5>
						<p>商业应用级别的高效共识引擎</p>
						<p> • 领先的底层跨链协议支持更多互操作性</p>
						<p> • 先进的<a href="https://tendermint.com/" target="_blank" style="color: #155fff"> Tendermint </a>共识引擎适合大规模网络环境</p>
						<p> • 灵活的设置可面向不同行业应用场景进行性能优化</p>
					</div>
				</div>
				<div class="program_features_top_right_content">
					<div class="program_features_right_img_content">
						<img src="../assets/home/digital_asset_8.png" alt="">
					</div>
					<div class="program_features_right_list_content">
						<h5>丰富的数字资产类型</h5>
						<p>支持价值流通的资产数字化模型</p>
						<p> • 基于 NFT 非同质化通证建立灵活的资产模型</p>
						<p> • 基于区块链技术构建数字资产登记与交易平台</p>
						<p> • 支持多种资产跨区块链、以及与非区块链系统间传输</p>
					</div>
				</div>
			</div>
			<div class="program_features_bottom_content">
				<div class="program_features_bottom_left_content">
					<div class="program_features_left_img_content">
						<img src="../assets/home/digital_asset_5.png" alt="">
					</div>
					<div class="program_features_left_list_content">
						<h5>明确可追溯的流转信息</h5>
						<p>动态身份管理和非侵入式协作</p>
						<p> • 链上安全可控的身份管理和登记确权</p>
						<p> • 全生命周期可验证、可持有、可追溯</p>
						<p> • 非侵入式监管审计和第三方验证</p>
					</div>
				</div>
				<div class="program_features_bottom_right_content">
					<div class="program_features_right_img_content">
						<img src="../assets/home/digital_asset_4.png" alt="">
					</div>
					<div class="program_features_right_list_content">
						<h5>更友好的开发支持</h5>
						<p>面向服务的企业级架构和 SDK 工具包</p>
						<p> • 模块化、工具化的区块链开发模式</p>
						<p> • 完善的开发文档和测试验证环境</p>
						<p> • 容器化、自动化的部署运维监控工具</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Applications"
	}
</script>

<style  lang="less">
	@import "../style/convert";
    @media print {
        .applications_content_container{
	        background: #fff !important;
			.applications_content_wrap{
				-webkit-print-color-adjust: exact;
			}
            .applications_text_content{
                max-width: 1400px;
				.applications_text_title{
					margin-top: ~`convertPxToCm('60px')`!important;
					margin-bottom: ~`convertPxToCm('20px')`!important;;
				}
            }
            .program_features_content{
	            padding-top: ~`convertPxToCm('60px')` !important;
				margin-bottom: 0 !important;
            }
        }
    }
	.applications_content_container{
		width: 100%;
		background: #fafafa;
		.applications_content_wrap{
			background: url("../assets/home/application_scenarios.svg") no-repeat center center;
			background-size: cover;
			height: 4.6rem;
			display: flex;
			align-items: center;
			justify-content: center;
			.applications_content{
				text-align: center;
				h2{
					font-size: 0.6rem;
					line-height: 0.8rem;
					color: #fff;
				}
				h5{
					font-size: 0.22rem;
					line-height: 0.3rem;
					color: #fff;
					margin-top: 0.2rem;
				}
			}
		}
		.applications_text_content{
			max-width: 12rem;
			margin: 0 auto;
			.applications_text_title{
				text-align: center;
				margin: 1rem 0 0.4rem 0;
				font-size: 0.18rem;
				font-weight: bold;
			}
			.applications_second_title{
				margin-top: 0.06rem;
				text-align: center;
				color: #8A99A5;
				font-size: 0.14rem;
				margin-bottom: 0.3rem;
				line-height: 0.27rem;
			}
			.application_list_content{
				background: #fff;
				box-sizing: border-box;
				padding: 0.3rem;
				.application_item{
					font-size: 0.14rem;
					color: #0C253A;
					line-height: 0.27rem;
					margin-bottom: 0.2rem;
				}
				p{
					font-size: 0.14rem;
					color: #0C253A;
					line-height: 0.26rem;
					margin-bottom: 0.2rem;
				}
			}
		}
		.solution_content{
			margin-top: 0.8rem;
			.solution_title{
				text-align: center;
			}
		}
		.program_features_content{
			max-width: 12rem;
			margin: 0.8rem auto 1rem auto;
			.program_features_title{
				text-align: center;
				margin-bottom: 0.4rem;
				font-weight: bold;
			}
			.program_features_top_content{
				display: flex;
				.program_features_top_left_content{
					flex: 1;
					box-sizing: border-box;
					padding: 0.2rem;
					background: #fff;
					margin-right: 0.2rem;
					display: flex;
					.program_features_left_img_content{
						margin:0 0.3rem 0 0.05rem;
						img{
							width: 0.4rem;
							
						}
					}
					.program_features_left_list_content{
						h5{
							font-size: 0.16rem;
							line-height: 0.22rem;
							color: #0C253A;
							font-weight: bold;
							margin-bottom: 0.06rem;
						}
						p:nth-of-type(1){
							font-size: 0.14rem;
							color: #0C253A;
							margin-bottom: 0.18rem;
						}
						p{
							font-size: 0.14rem;
							color: #8a99a5;
							line-height: 0.28rem;
						}
					}
				}
				.program_features_top_right_content{
					flex: 1;
					box-sizing: border-box;
					padding: 0.2rem;
					background: #fff;
					margin-right: 0.2rem;
					display: flex;
					.program_features_right_img_content{
						margin:0 0.3rem 0 0.05rem;
						img{
							width: 0.4rem;
							
						}
					}
					.program_features_right_list_content{
						h5{
							font-size: 0.16rem;
							line-height: 0.22rem;
							color: #0C253A;
							font-weight: bold;
							margin-bottom: 0.06rem;
						}
						p:nth-of-type(1){
							font-size: 0.14rem;
							color: #0C253A;
							margin-bottom: 0.18rem;
						}
						p{
							font-size: 0.14rem;
							color: #8a99a5;
							line-height: 0.28rem;
						}
					}
				}
			}
			.program_features_bottom_content{
				display: flex;
				margin-top: 0.2rem;
				.program_features_bottom_left_content{
					flex: 1;
					box-sizing: border-box;
					padding: 0.2rem;
					background: #fff;
					margin-right: 0.2rem;
					display: flex;
					.program_features_left_img_content{
						margin:0 0.3rem 0 0.05rem;
						img{
							width: 0.4rem;
							
						}
					}
					.program_features_left_list_content{
						h5{
							font-size: 0.16rem;
							line-height: 0.22rem;
							color: #0C253A;
							font-weight: bold;
							margin-bottom: 0.06rem;
						}
						p:nth-of-type(1){
							font-size: 0.14rem;
							color: #0C253A;
							margin-bottom: 0.18rem;
						}
						p{
							font-size: 0.14rem;
							color: #8a99a5;
							line-height: 0.28rem;
						}
					}
				}
				.program_features_bottom_right_content{
					flex: 1;
					box-sizing: border-box;
					padding: 0.2rem;
					background: #fff;
					margin-right: 0.2rem;
					display: flex;
					.program_features_right_img_content{
						margin:0 0.3rem 0 0.05rem;
						img{
							width: 0.4rem;
							
						}
					}
					.program_features_right_list_content{
						h5{
							font-size: 0.16rem;
							line-height: 0.22rem;
							color: #0C253A;
							font-weight: bold;
							margin-bottom: 0.06rem;
						}
						p:nth-of-type(1){
							font-size: 0.14rem;
							color: #0C253A;
							margin-bottom: 0.18rem;
						}
						p{
							font-size: 0.14rem;
							color: #8a99a5;
							line-height: 0.28rem;
						}
					}
				}
			}
		}
	}
	@media screen and (max-width: 1200px) {
		.applications_content_container{
			.applications_content_wrap{
				.applications_content{
					h5{
						box-sizing: border-box;
						padding: 0 0.2rem;
					}
				}
			}
			.applications_text_content{
				.application_list_content{
					margin:0 0.2rem;
				}
			}
		}
	}
	@media screen and (min-width: 540px) and (max-width: 768px){
		.applications_content_container{
			.applications_content_wrap{
				.applications_content{
					h2{
						font-size: 0.48rem;
					}
					h5{
						box-sizing: border-box;
						padding: 0 0.2rem;
					}
				}
			}
			.applications_text_content{
				.applications_second_title{
					margin: 0 10%;
				}
				.application_list_content{
					margin:0 10%;
					p{
						margin-top: 0.2rem;
					}
					p:first-child{
						margin-top: 0;
					}
				}
			}
			.program_features_content{
				.program_features_top_content{
					 flex-direction: column;
					 align-items: center;
					 .program_features_top_left_content{
						 margin-right: 0;
						 width: 5rem;
					 }
					 .program_features_top_right_content{
						 margin-right: 0;
						 width: 5rem;
						 margin-top: 0.2rem;
					 }
				}
				.program_features_bottom_content{
					flex-direction: column;
					align-items: center;
					.program_features_bottom_left_content{
						margin-right: 0;
						width: 5rem;
					}
					.program_features_bottom_right_content{
						margin-right: 0;
						width: 5rem;
						margin-top: 0.2rem;
					}
				}
			}
		}
	}
	@media screen and (max-width: 540px){
		.applications_content_container{
			.applications_content_wrap{
				.applications_content{
					h2{
						font-size: 0.32rem;
					}
					h5{
						font-size: 0.14rem;
						box-sizing: border-box;
						padding: 0 0.6rem;
					}
				}
			}
			.applications_text_content{
				.applications_second_title{
					margin: 0 0.2rem;
				}
				.application_list_content{
					margin:0 0.2rem;
					p{
						margin-top: 0.2rem;
					}
					p:first-child{
						margin-top: 0;
					}
				}
			}
			.program_features_content{
				.program_features_top_content{
					flex-direction: column;
					align-items: center;
					.program_features_top_left_content{
						margin-right: 0;
						width: 3.3rem;
						.program_features_left_list_content{
							p{
								margin-top: 0.2rem;
							}
							p:first-child{
								margin-top: 0;
							}
						}
					}
					.program_features_top_right_content{
						margin-right: 0;
						width: 3.3rem;
						margin-top: 0.2rem;
						.program_features_right_list_content{
							p{
								margin-top: 0.2rem;
							}
							p:first-child{
								margin-top: 0;
							}
						}
					}
				}
				.program_features_bottom_content{
					flex-direction: column;
					align-items: center;
					.program_features_bottom_left_content{
						margin-right: 0;
						width: 3.3rem;
						.program_features_left_list_content{
							p{
								margin-top: 0.2rem;
							}
							p:first-child{
								margin-top: 0;
							}
						}
					}
					.program_features_bottom_right_content{
						margin-right: 0;
						width: 3.3rem;
						margin-top: 0.2rem;
						.program_features_right_list_content{
							p{
								margin-top: 0.2rem;
							}
							p:first-child{
								margin-top: 0;
							}
						}
					}
				}
			}
		}
	}
</style>
