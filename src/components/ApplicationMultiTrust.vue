<template>
	<div>
		<div class="applications_content_container">
			<div class="applications_content_wrap">
				<div class="applications_content">
					<h2>应用场景-多方互信</h2>
					<h5>区块链技术用于提高资产登记的真实性 · 提升数字化交易的效率</h5>
				</div>
			</div>
			<div class="application_nav_content">
				<h3>多方互信的存证授权</h3>
				<p>数据所有方自主可控的信息分享机制，必要信息先加密后分享，数据需求方先授权后解密，无需数据搬家吗，解决数据共享与隐私间的矛盾</p>
				<ul class="application_list_content">
					<li>• 提供业务数据的上链能力：包括身份注册、数据存证、调用、价值/信息交换、事务处理等（智能合约）</li>
					<li>• 提供面向业务的链下服务：包括数据处理和商业逻辑执行</li>
					<li>• 提供链上链下通联：通过可信计算调用，协作交易及分析服务结果索引上链存证</li>
				</ul>
			</div>
			<div class="solution_content">
				<div class="solution_title">解决方案</div>
			</div>
			<div class="program_features_content">
				<div class="program_features_title">方案特色</div>
				<div class="program_features_top_content">
					<div class="program_features_top_left_content">
						<div class="program_features_left_img_content">
							<img src="../assets/home/digital_asset_1.png" alt="">
						</div>
						<div class="program_features_left_list_content">
							<h5>高性能的共识算法</h5>
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
							<h3>动态管理的节点和非侵入审计</h3>
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
							<h3>面向服务的企业级架构和SDK工具包</h3>
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
	.applications_content_container{
		width: 100%;
		.applications_content_wrap{
			background: url("../assets/home/application_scenarios.png") no-repeat center center;
			background-size: cover;
			height: 4.6rem;
			display: flex;
			align-items: center;
			justify-content: center;
			.applications_content{
				margin-top: 0.4rem;
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
		.application_nav_content{
			max-width: 12rem;
			margin: 0 auto;
			h3{
				text-align: center;
				font-size: 0.18rem;
				line-height: 0.25rem;
				font-weight: bold;
				margin-top: 1rem;
			}
			p{
				margin-top: 0.06rem;
				font-size: 0.14rem;
				color: #8a99a5;
				line-height: 0.27rem;
				text-align: center;
			}
			.application_list_content{
				box-sizing: border-box;
				padding: 0.3rem;
				background: #fff;
				margin-top: 0.3rem;
				font-size: 0.14rem;
				color: #0C253A;
				list-style: none;
				li{
					margin-top: 0.06rem;
					line-height: 0.28rem;
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

</style>
