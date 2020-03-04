<template>
	<div class="applications_content_container">
		<div class="applications_content_wrap">
			<div class="applications_content">
				<h2>应用场景-行业协同</h2>
				<h5>区块链+人工智能解决应用痛点 · 安全共享释放行业数据价值</h5>
			</div>
		</div>
		<div class="applications_text_content">
			<h3>医疗健康行业的区块链协同</h3>
			<div class="application_list_content">
				<p>随着医疗健康领域的信息化建设，产生了越来越多的个人数据，也带来更多对数据分析、数据共享和数据安全的问题亟待解决。边界智能讲区块链+互联网+隐私算法+人工智能+分布式存储等技术结合多年的行业经验，为医疗健康数据安全共享、行业协作、跨行业协同等应用场景提供落地方案。</p>
				<p>创新的链上链下互操作可以支持数据保持原有业务逻辑和存储安全不变，无需数据搬家，仅在不泄漏患者隐私的前提下根据授权交换必要的信息。联盟链中许可的业务参与方通过链下应用提供高效的 ToC 的服务，同时拥有链上注册身份，可以通过区块链达到保障业务数据在合规流转过程中的安全访问，实现全生命周期的可审计可追溯。</p>
				<p>边界智能区块链解决方案同时支持监管机构、社保基金、商业保险、医药企业、零售药店、等通过非侵入式的方式参与，满足行业协同的需要。</p>
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
						<img src="../assets/home/digital_asset_2.png" alt="">
					</div>
					<div class="program_features_left_list_content">
						<h5>先进的跨链协议与共识引擎</h5>
						<h3>商业应用级别的高效共识引擎</h3>
						<p> • 最前沿的底层跨链协议支持更过互操作性</p>
						<p> • 先进的 Tendermint 共识引擎适合大规模网络环境</p>
						<p> • 灵活的设置可面向不同行业应用场景进行性能优化</p>
					</div>
				</div>
				<div class="program_features_top_right_content">
					<div class="program_features_right_img_content">
						<img src="../assets/home/digital_asset_6.png" alt="">
					</div>
					<div class="program_features_right_list_content">
						<h5>高可用的互信网络</h5>
						<h3>动态管理的节点和非侵入式审计</h3>
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
						<h3>保护数据隐私的分布式分析</h3>
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
						<h3>面向服务的企业级架构和工具包</h3>
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

<style scoped lang="less">
	@media print {
		.applications_content_container{
			.applications_content_wrap{
				-webkit-print-color-adjust: exact;
			}
			.applications_text_content{
				max-width: 1400px;
			}
			.program_features_content{
				max-width: 1400px;
			}
		}
	}
	.applications_content_container{
		width: 100%;
		background: #fafafa;
		.applications_content_wrap{
			background: url("../assets/home/application_scenarios.png") no-repeat center center;
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
					font-weight: lighter;
				}
				h5{
					font-weight: lighter;
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
			h3{
				margin: 1rem 0 0.4rem 0;
				font-size: 0.18rem;
				color: #0C253A;
				text-align: center;
			}
			.application_list_content{
				box-sizing: border-box;
				padding: 0.3rem;
				background: #fff;
				font-size: 0.14rem;
				color: #0C253A;
				line-height: 0.28rem;
				p:nth-of-type(2){
					margin-top: 0.14rem;
				}
				p:nth-of-type(3){
					margin-top: 0.14rem;
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
			margin: 0.8rem auto 2.63rem auto;
			.program_features_title{
				text-align: center;
				margin-bottom: 0.4rem;
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
						h3{
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
						h3{
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
						h3{
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
						h3{
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
