<template>
	<div class="applications_content_container">
		<div class="applications_content_wrap">
			<div class="applications_content">
				<h2>应用场景-金融创新</h2>
				<h5>区块链技术帮助多方参与的机构实现信息可信共享和资金流闭环</h5>
			</div>
		</div>
		<div class="application_nav_content">
			<h3>创新的供应链金融</h3>
			<ul class="application_list_content">
				<p class="application_item">基于跨链服务枢纽构建的供应链金融系统，可以实现信息可信共享，降低金融企业风险和融资成本。</p>
				<li>• 通过区块链技术实现多方的可信交互，促进数据可溯源、不可逆、真实可信</li>
				<li>• 通过跨链调用服务接口，实现数据需求方和供应方的在线交互，大大提高业务效率</li>
				<li>• 易于打通数据流、资金流，降低交易成本，更好的服务于中小企业和机构资产的融资场景</li>
				<li>• 金融机构可通过授权查看企业实时运营情况、及时调用第三方数据验证，降低放贷风险</li>
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
						<img src="../assets/home/digital_asset_2.png" alt="">
					</div>
					<div class="program_features_left_list_content">
						<h5>先进的跨链协议与共识引擎</h5>
						<p>商业应用级的底层区块链技术</p>
						<p> • 跨链底层协议支持区块链间、以及与非区块链间的互操作</p>
						<p> • 先进的<a href="https://tendermint.com/" target="_blank" style="color: #155fff"> Tendermint </a>共识引擎适合大规模网络环境</p>
						<p> • 灵活的设置可面向不同行业应用场景进行性能优化</p>
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
						<p> • 同时考虑隐私保护、业务需求和监管需求</p>
						<p> • 充分尊重数据拥有者的权利的链间价值交换</p>
						<p> • 面向业务的链上链下通联的数据分析服务</p>
					</div>
				</div>
				<div class="program_features_bottom_right_content">
					<div class="program_features_right_img_content">
						<img src="../assets/home/digital_asset_3.png" alt="">
					</div>
					<div class="program_features_right_list_content">
						<h5>更开放的服务创新支持</h5>
						<p>面向服务的企业级架构和工具包</p>
						<p> • 模块化、工具化的区块链开发模式</p>
						<p> • 完善的开发文档和测试验证环境</p>
						<p> • 逐步形成数据与计算模型的服务市场</p>
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
				.program_features_title{
					padding-top: ~`convertPxToCm('60px')` !important;
				}
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
