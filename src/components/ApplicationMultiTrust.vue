<template>
	<div>
		<div class="applications_content_container">
			<div class="applications_content_wrap">
				<div class="applications_content">
					<h2>应用场景-多方互信</h2>
					<h5>解决多业务方参与的不互信问题 · 实现链上链下互操作的信息授权</h5>
				</div>
			</div>
			<div class="application_nav_content">
				<h3>多方互信的存证授权</h3>
				<ul class="application_list_content">
					<p class="application_item">数据所有方自主可控的信息分享机制，必要信息先加密后分享、数据需求方先授权后解密，无需数据搬家，解决数据共享与隐私间的矛盾。</p>
					<li>• 提供业务数据的上链能力：包括身份注册、数据存证、调用、价值/信息交换、事务处理等（智能合约）</li>
					<li>• 提供面向业务的链下服务：包括数据处理和商业逻辑执行</li>
					<li>• 提供链上链下通联：通过可信计算调用，协作交易及分析服务结果索引上链存证</li>
				</ul>
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
							<p>先进高效的Tendermint共识引擎</p>
							<p> • 领先的底层跨链协议</p>
							<p> • 高效的<a href="https://tendermint.com/" target="_blank" style="color: #155fff"> Tendermint </a>共识引擎</p>
							<p> • 面向行业应用场景进行性能优化</p>
						</div>
					</div>
					<div class="program_features_top_right_content">
						<div class="program_features_right_img_content">
							<img src="../assets/home/digital_asset_6.png" alt="">
						</div>
						<div class="program_features_right_list_content">
							<h5>高可用的互信网络</h5>
							<p>动态管理的节点和非侵入式审计</p>
							<p> • 原有业务逻辑和数据安全不变</p>
							<p> • 动态参与共识网络满足行业协同需求</p>
							<p> • 自主创新的非侵入式链上数据审计能力</p>
						</div>
					</div>
				</div>
				<div class="program_features_bottom_content">
					<div class="program_features_bottom_left_content">
						<div class="program_features_left_img_content">
							<img src="../assets/home/digital_asset_7.png" alt="">
						</div>
						<div class="program_features_left_list_content">
							<h5>高安全的隐私保护</h5>
							<p>保护数据隐私的分布式分析</p>
							<p> • 同时考虑隐私保护、共享需求和监管要求</p>
							<p> • 充分尊重数据拥有者的权利的链间价值交换</p>
							<p> • 面向业务的链上链下通联的数据分析服务</p>
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
	
	</div>
</template>

<script>
	export default {
		name: "Applications"
	}
</script>

<style scoped lang="less">
	@import "../style/convert";
	@media print {
		.applications_content_container{
			background: #fff !important;
			.applications_content_wrap{
				-webkit-print-color-adjust: exact;
			}
			.application_nav_content{
				max-width: 1400px;
				.applications_text_title{
					margin-top: ~`convertPxToCm('60px')`!important;
					margin-bottom: ~`convertPxToCm('20px')`!important;;
				}
			}
			.program_features_content{
				padding-top: ~`convertPxToCm('60px')` !important;
			}
		}
	}
	.applications_content_container{
		width: 100%;
		background: #FAFAFA;
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
					;
				}
				h5{
					;
					font-size: 0.22rem;
					line-height: 0.3rem;
					color: #fff;
					margin-top: 0.2rem;
				}
			}
		}
		.application_nav_content{
			max-width: 12rem;
			margin: 0 auto;
			h3{
				text-align: center;
				font-size: 0.18rem;
				line-height: 0.25rem;
				font-weight: bold;
				margin-top: 1rem;
				margin-bottom: 0.4rem;
			}
			.application_list_content{
				box-sizing: border-box;
				padding: 0.3rem;
				background: #fff;
				margin-top: 0.3rem;
				font-size: 0.14rem;
				color: #0C253A;
				list-style: none;
				.application_item{
					font-size: 0.14rem;
					color: #0C253A;
					line-height: 0.27rem;
					margin-bottom: 0.2rem;
				}
				li{
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
			.application_nav_content{
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
			.application_nav_content{
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
			.application_nav_content{
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
