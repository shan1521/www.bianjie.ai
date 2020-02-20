<template>
	<div class="home_container">
		<div class="home_container_wrap">
			<div class="home_content_wrap">
				<div class="home_content">
					<h1 class="home_content_title">技术无疆 链动未来</h1>
					<h3 class="home_content_second_title">专注专业 自主创新 · 开放合作 科技引领</h3>
				</div>
			</div>
		</div>
		<div class="home_core_content_wrap">
			<div class="home_core_content">
				<h5 class="home_core_title_content">核心能力</h5>
				<ul class="home_core_list_content">
					<div class="home_core_list_left_content">
						<li class="home_core_item_content">
							<div class="home_core_item_img_content">
								<img src="../assets/home/core_img_1.png" alt="">
							</div>
							<div class="home_core_item_text_content">
								<p>区块链技术和分布式AI技术专家</p>
								<p>自主创新的核心技术底层研发能力</p>
							</div>
						</li>
						<li class="home_core_item_content">
							<div class="home_core_item_img_content">
								<img src="../assets/home/core_img_2.png" alt="">
							</div>
							<div class="home_core_item_text_content">
								<p>医疗卫生和金融行业信息化专家</p>
								<p>丰富的行业落地能力和最佳实践经验</p>
							</div>
						</li>
					</div>
					<div class="home_core_list_right_content">
						<li class="home_core_item_content">
							<div class="home_core_item_img_content">
								<img src="../assets/home/core_img_3.png" alt="">
							</div>
							<div class="home_core_item_text_content">
								<p>专注研发勇于创新的产品技术团队</p>
								<p>大型企业级业务平台分析架构能力</p>
							</div>
						</li>
						<li class="home_core_item_content">
							<div class="home_core_item_img_content">
								<img src="../assets/home/core-img_4.png" alt="">
							</div>
							<div class="home_core_item_text_content">
								<p>成熟的区块链技术和跨链服务产品</p>
								<p>可靠的解决方案设计研发和交付能力</p>
							</div>
						</li>
					</div>
				</ul>
			</div>
		</div>
		<div class="home_production_serve_content_wrap">
			<div class="home_production_content">
				<h4 class="home_production_title">产品服务</h4>
				<ul class="home_production_list_content">
					<li class="home_production_item_content">
						<div class="home_production_item_img_content">
							<img src="../assets/home/production_serve_1.png" alt="">
						</div>
						<div class="home_production_item_text_content">
							<p class="home_production_item_text_top_title">以 Cosmos SDK 为基础深入开发的底层区块链技术</p>
							<p class="home_production_item_text_bottom_title">可为企业和组织提供公有链、联盟链、私有链的解决方案</p>
						</div>
					</li>
					<li class="home_production_item_content">
						<div class="home_production_item_img_content">
							<img src="../assets/home/production_serve_2.png" alt="">
						</div>
						<div class="home_production_item_text_content">
							<p class="home_production_item_text_top_title">结合分布式人工智能边缘计算技术实现隐私保护下的加密智能分析</p>
							<p class="home_production_item_text_bottom_title">可为企业和组织提供基于区块链的互信协作和价值交换平台</p>
						</div>
					</li>
					<li class="home_production_item_content">
						<div class="home_production_item_img_content">
							<img src="../assets/home/production_serve_3.png" alt="">
						</div>
						<div class="home_production_item_text_content">
							<p class="home_production_item_text_top_title">先进的跨链服务技术支持异构网络间的联盟枢纽</p>
							<p class="home_production_item_text_bottom_title">可为区块链与传统企业应用之间的链上链下互操作提供解决方案</p>
						</div>
					</li>
				</ul>
				<div class="home_production_read_more_button" v-show="false">
					<span class="home_production_read_more_text">了解更多</span>
					<i>
						<img src="../assets/home/arrow.png" alt="">
					</i>
				</div>
			</div>
		</div>
		<div class="home_production_list_content_wrap">
			<ul class="home_production_serve_list_content">
				<li class="home_production_serve_item_content">
					<div class="home_production_serve_item_img_content">
						<img src="../assets/home/bianjie_isch.png" alt="">
					</div>
					<div class="home_production_serve_item_text_content">
						<div class="home_production_serve_item_title"><div class="blue_block_content"></div>跨域行业互信联盟链产品</div>
						<div>高效的共识和先进的 IBC 跨链协议</div>
						<div>保护隐私的数据授权共享</div>
						<div>灵活的数字资产建模与交易</div>
						<div>基于iService的链上链下通联</div>
						<div>大数据技术支撑的业务分析</div>
					</div>
					<p class="home_production_footer">
						<router-link :to="`/products/irita`">
							<span class="home_production_name">IRITA</span>
							<img src="../assets/home/arrow.png" alt="">
						</router-link>
					</p>
				</li>
				<li class="home_production_serve_item_content">
					<div class="home_production_serve_item_img_content">
						<img src="../assets/home/bianjie_irisnet.png" alt="">
					</div>
					<div class="home_production_serve_item_text_content">
						<div class="home_production_serve_item_title"><div class="green_block_content"></div>区块链底层基础设施</div>
						<div>高效的 Tendermint 共识</div>
						<div>先进的 IBC 跨链协议</div>
						<div>面向服务的区块链基础设施</div>
						<div>自主知识产权的区块链治理升级技术</div>
						<div>支持数据和计算跨异构区块链网络调用和消费</div>
					</div>
					<p class="home_production_footer">
						<router-link :to="`/products/irisnet`">
							<span class="home_production_name">IRISnet</span>
							<img src="../assets/home/arrow.png" alt="">
						</router-link>
					</p>
				</li>
				<li class="home_production_serve_item_content">
					<div class="home_production_serve_item_img_content">
						<img src="../assets/home/bianjie_bean.png" alt="">
					</div>
					<div class="home_production_serve_item_text_content">
						<div class="home_production_serve_item_title"><div class="yellow_block_content"></div>数据共享与安全计算</div>
						<div>分布式人工智能与边缘计算</div>
						<div>安全的数据加密、授权、管理机制</div>
						<div>自主知识产权的非侵入式区块链信息审计</div>
						<div>支持多种行业的跨链资源无缝调用</div>
						<div>支持动态节点管理的联盟链的开发工具包</div>
					</div>
					<p class="home_production_footer">
						<router-link :to="`/products/bean`">
							<span class="home_production_name">BEAN</span>
							<img src="../assets/home/arrow.png" alt="">
						</router-link>
					</p>
				</li>
			</ul>
		</div>
		<div class="home_application_scenarios_content_wrap">
			<div class="home_application_scenarios_title_content">
				<h1 class="home_application_scenarios_title">应用场景</h1>
			</div>
			<div class="home_application_scenarios_content">
				<div class="home_application_scenarios_left_content">
					<router-link :to="`/application/digital-asset`">
						<div class="home_application_scenarios_left_top_content">
							<h2 class="home_application_scenarios_title">资产数字化</h2>
							<h5 class="home_application_scenarios_second_title">数字资产可信登记与交换平台</h5>
							<p class="home_application_scenarios_text_content">数字资产不仅包括由企业或个人拥有的、以电子数据形式存在的各类资产，也包括数字经济发展过程中需要数字化的实体资产</p>
							<p class="home_application_scenarios_text_second_content">将区块链技术用于构建可信的数字资产登记与交换平台，可支撑价值流通、共享经济、期权激励、等多种场景的应用</p>
						</div>
					</router-link>
					<router-link :to="`/application/finance`">
						<div class="home_application_scenarios_left_bottom_content">
							<h2 class="home_application_scenarios_title">金融创新</h2>
							<h5 class="home_application_scenarios_second_title">区块链应链金融价值平台</h5>
							<p class="home_application_scenarios_text_content">利用区块链公开透明、不可篡改、多方共享的技术特性，将区块链技术与金融服务创新性的结合起来，应用到跨域行业的资产管理与流通过程找那个，实现实体经济中非同质资产的定义，多方流通转的信息透明、不可更改并实现金融创新和生态共建。</p>
						</div>
					</router-link>
				</div>
				<div class="home_application_scenarios_left_img_content">
					<div class="home_application_scenarios_left_img_top">
						<img src="../assets/home/application_scenarios_left_top.png" alt="">
					</div>
					<div class="home_application_scenarios_left_img_bottom">
						<img src="../assets/home/application_scenarios_left_bottom.png" alt="">
					</div>
				</div>
				<div class="home_application_scenarios_center_img_content">
					<img src="../assets/home/applicarion_scenarios_center.png" alt="">
				</div>
				<div class="home_application_scenarios_right_img_content">
					<div class="home_application_scenarios_right_img_top">
						<img src="../assets/home/application_scenarios_right_top.png" alt="">
					</div>
					<div class="home_application_scenarios_right_img_bottom">
						<img src="../assets/home/application_scenarios_right_bottom.png" alt="">
					</div>
				</div>
				<div class="home_application_scenarios_right_content">
					<router-link :to="`/application/cooperation`">
						<div class="home_application_scenarios_right_top_content">
							<h2 class="home_application_scenarios_title">行业协同</h2>
							<h5 class="home_application_scenarios_second_title">医疗健康电子处方外配许可链</h5>
							<p class="home_application_scenarios_text_content">在不泄漏患者隐私的前提下根据授权交换必要的处方配药信息，保障电子处方的合规流转、安全访问及全生命周期的可审计可追溯</p>
							<p class="home_application_scenarios_text_second_content">业务参与方通过链下应用提供 ToC 服务，同时拥有链上注册身份达成共识互信协作、行业协同。</p>
						</div>
					</router-link>
					<router-link :to="`/application/multi-trust`">
						<div class="home_application_scenarios_right_bottom_content">
							<h2 class="home_application_scenarios_title">多方互信</h2>
							<h5 class="home_application_scenarios_second_title">体检报告存证授权许可链</h5>
							<p class="home_application_scenarios_text_content">利用区块链、分布式人工智能、微服务框架等先进的科技手段，提供数据加密、跨链存证、安全共享、隐私保护等全生命周期的管理，在保护数据隐私的同时，实现多方参与、互信协作的授权机制，全程可追溯、可审计、可监管。</p>
						</div>
					</router-link>
				</div>
			</div>
		</div>
		<div class="mobile_home_application_scenarios_content_wrap">
			<div class="mobile_home_application_scenarios_title_content">
				<h1 class="mobile_home_application_scenarios_title">应用场景</h1>
			</div>
			<div class="mobile_home_application_scenarios_content">
				<ul class="mobile_home_application_list_content">
					<router-link :to="`/application/digital-asset`">
						<li class="mobile_home_application_item">
							<img src="../assets/home/application_scenarios_left_top.png" alt="">
							<h2>资产数字化</h2>
							<h5>数字资产可信登记与交换平台</h5>
							<p>数字资产不仅包括由企业或个人拥有的、以电子数据形式存在的各类资产，也包括数字经济发展过程中需要数字化的实体资产</p>
							<p>将区块链技术用于构建可信的数字资产登记与交换平台，可支撑价值流通、共享经济、期权激励、等多种场景的应用</p>
						</li>
					</router-link>
					<router-link :to="`/application/cooperation`">
						<li class="mobile_home_application_item">
							<img src="../assets/home/application_scenarios_right_top.png" alt="">
							<h2>行业协同</h2>
							<h5>医疗健康电子处方外配许可链</h5>
							<p>在不泄漏患者隐私的前提下根据授权交换必要的处方配药信息，保障电子处方的合规流转、安全访问及全生命周期的可审计可追溯</p>
							<p>业务参与方通过链下应用提供 ToC 服务，同时拥有链上注册身份达成共识互信协作、行业协同。</p>
						</li>
					</router-link>
					<router-link :to="`/application/finance`">
						<li class="mobile_home_application_item">
							<img src="../assets/home/application_scenarios_left_bottom.png" alt="">
							<h2>金融创新</h2>
							<h5>区块链应链金融价值平台</h5>
							<p>利用区块链公开透明、不可篡改、多方共享的技术特性，将区块链技术与金融服务创新性的结合起来，应用到跨域行业的资产管理与流通过程找那个，实现实体经济中非同质资产的定义，多方流通转的信息透明、不可更改并实现金融创新和生态共建。</p>
						</li>
					</router-link>
					<router-link :to="`/application/multi-trust`">
						<li class="mobile_home_application_item">
							<img src="../assets/home/application_scenarios_left_bottom.png" alt="">
							<h2>多方互信</h2>
							<h5>体检报告存证授权许可链</h5>
							<p>利用区块链、分布式人工智能、微服务框架等先进的科技手段，提供数据加密、跨链存证、安全共享、隐私保护等全生命周期的管理，在保护数据隐私的同时，实现多方参与、互信协作的授权机制，全程可追溯、可审计、可监管。</p>
						</li>
					</router-link>
				</ul>
			</div>
		</div>
		<div class="home_about_bianjie_content_wrap">
			<img class="home_about_bianjie_left_img" src="../assets/home/about_bianjie_footer_left.png" alt="">
			<div class="home_about_bianjie_content">
				<div class="home_about_bianjie_left_content">
					<img src="../assets/home/about_bianjie.png" alt="">
				</div>
				<div class="home_about_bianjie_right_content">
					<h3 class="home_about_bianjie_title_content">关于边界智能</h3>
					<p class="home_about_bianjie_text_content">
						边界智能创立于 2016 年，是一家专注于分布式智能处理和区块链技术开发的国家高新技术企业，拥有自主创新的知识产权。开发了跨域行业互信联盟产品 IRITA、跨链服务网络 IRISnet 、分布式大数据分析交换网络 BEAN 等核心产品，实现了以保护数据隐私、尊重数据拥有者权利为前提的加密智能分析服务。<br/>
						边界智能也是全球著名跨链项目 Cosmos 的核心中国开发者。除了跨链服务、医疗健康数据交换，边界智能还能为供应链金融、存证等业务场景提供联盟区块链技术。
					</p>
					<div class="home_about_bianjie_right_button_content">
						<a href="mailto:contact@bianjie.ai" target="_blank">
							<div class="home_about_bianjie_cooperation_button">
								<span>联系合作</span>
								<img src="../assets/home/arrow_white.png" alt="">
							</div>
						</a>
						<div class="home_about_bianjie_read_more_button" v-show="false">
							<span>了解更多</span>
							<img src="../assets/home/arrow_white.png" alt="">
						</div>
					</div>
				</div>
			</div>
			<img class="home_about_bianjie_right_img" src="../assets/home/about_bianjie_footer_right.png" alt="">
		</div>
		
	</div>
</template>

<script>
	export default {
		name: "Home"
	}
</script>

<style scoped lang="less">
	@media print {
		.home_container{
			.home_container_wrap{
				-webkit-print-color-adjust: exact;
				.home_content_wrap{
					max-width: 1400px;
				}
			}
			.home_core_content_wrap{
				.home_core_content{
					max-width: 1400px;
				}
			}
			.home_production_serve_content_wrap{
				-webkit-print-color-adjust: exact;
				.home_production_content{
					max-width: 1400px;
				}
			}
			.home_production_list_content_wrap{
				.home_production_serve_list_content{
					max-width: 12rem;
				}
			}
			.home_application_scenarios_content_wrap{
				.home_application_scenarios_title_content{
					max-width: 1400px;
				}
			}
			.home_about_bianjie_content_wrap{
				.home_about_bianjie_content{
					max-width: 1400px;
				}
			}
		}
	}
	.home_container{
		width: 100%;
		.home_container_wrap{
			height: 6.4rem;
			background: url("../assets/home/banner.png") no-repeat center center;
			background-size: cover;
			.home_content_wrap{
				max-width: 12rem;
				height: 100%;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: center;
				.home_content{
					color: #fff;
					margin-bottom: 0.4rem;
					.home_content_title{
						font-size: 0.6rem;
						font-weight: lighter;
					}
					.home_content_second_title{
						text-align: center;
						font-weight: lighter;
					}
				}
			}
		}
		.home_core_content_wrap{
			width: 100%;
			height: 3.4rem;
			background: #fafafa;
			.home_core_content{
				max-width: 12rem;
				margin: 0 auto;
				height: 3.35rem;
				border-radius: 0.6rem 0.04rem 0.6rem 0.04rem;
				background: #fff;
				box-shadow:0 0.02rem 0.13rem 0 rgba(0,24,64,0.13);
				position: relative;
				top: -1.2rem;
				.home_core_title_content{
					font-size: 0.26rem;
					text-align: center;
					padding-top: 0.6rem;
					font-weight: lighter;
				}
				.home_core_list_content{
					display: flex;
					list-style: none;
					.home_core_list_left_content{
						display: flex;
						flex: 1;
						.home_core_item_content{
							flex: 1;
							display: flex;
							flex-direction: column;
							margin-top: 0.5rem;
							align-items: center;
							.home_core_item_img_content{
								width: 0.6rem;
								height: 0.6rem;
								margin-bottom: 0.3rem;
								img{
									width: 100%;
								}
							}
							.home_core_item_text_content{
								text-align: center;
								p{
									color: #0C253A;
									font-size: 0.14rem;
									letter-spacing: 0.01rem;
									line-height: 0.24rem;
								}
							}
						}
					}
					.home_core_list_right_content{
						display: flex;
						flex: 1;
						.home_core_item_content{
							flex: 1;
							display: flex;
							flex-direction: column;
							margin-top: 0.5rem;
							align-items: center;
							box-sizing: border-box;
							padding: 0 0.2rem;
							.home_core_item_img_content{
								width: 0.6rem;
								height: 0.6rem;
								margin-bottom: 0.3rem;
								img{
									width: 100%;
								}
							}
							.home_core_item_text_content{
								p{
									color: #0C253A;
									font-size: 0.14rem;
									letter-spacing: 0.01rem;
									line-height: 0.24rem;
								}
							}
						}
					}

				}
			}
		}
		.home_production_serve_content_wrap{
			width: 100%;
			height: 7.3rem;
			background: url("../assets/home/production_serve.png") no-repeat center center;
			background-size: cover;
			.home_production_content{
				max-width: 12rem;
				margin: 0 auto;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				.home_production_title{
					font-size: 0.26rem;
					color: #fff;
					padding: 1rem 0 0.4rem 0;
				}
				.home_production_list_content{
					list-style: none;
					.home_production_item_content{
						width: 8rem;
						display: flex;
						background: rgba(0, 44, 119, 0.64);
						padding: 0.28rem 0;
						margin-top: 0.2rem;
						.home_production_item_img_content{
							width: 0.3rem;
							display: flex;
							align-items: center;
							padding: 0 0.4rem;
							img{
								width: 100%;
							}
						}
						.home_production_item_text_content{
							.home_production_item_text_top_title{
								font-size: 0.16rem;
								color: #fff;
							}
							.home_production_item_text_bottom_title{
								margin-top: 0.12rem;
								font-size: 0.14rem;
								color: rgba(255,255,255,0.5);
							}
						}
					}
				}
				.home_production_read_more_button{
					width: 1.5rem;
					height:0.4rem;
					background: #fff;
					border-radius: 0.02rem;
					line-height: 0.4rem;
					margin-top: 0.4rem;
					display: flex;
					justify-content: space-between;
					.home_production_read_more_text{
						font-size: 0.14rem;
						color: #0054E3;
						padding-left: 0.1rem;
					}
					i{
						padding-right: 0.1rem;
						img{
							height: 0.1rem;
						}
					}
				}
			}
		}
		.home_production_list_content_wrap{
			width: 100%;
			background: #fafafa;
			.home_production_serve_list_content{
				max-width: 12rem;
				margin:0 auto;
				display: flex;
				justify-content: space-between;
				list-style: none;
				.home_production_serve_item_content{
					flex: 1;
					margin: 1.5rem 0.6rem 1.5rem 0;
					box-sizing: border-box;
					padding: 0 0.3rem;
					box-shadow: 0.2rem 0.5rem 0.35rem 0 rgba(0,20,53,0.06);
					background: #fff;
					.home_production_serve_item_img_content{
						display: flex;
						justify-content: center;
						margin: 0.4rem auto;
						img{
							height:0.69rem;
							margin: 0 auto;
						}
					}
					.home_production_serve_item_text_content{
						margin-bottom: 0.3rem;
						font-size: 0.14rem;
						color: #8A99A5;
						.home_production_serve_item_title{
							color: #0C253A;
							font-weight: 600;
							line-height: 0.22rem;
							margin-bottom: 0.2rem;
							display: flex;
							align-items: center;
							.blue_block_content{
								width: 0.03rem;
								height: 0.16rem;
								margin-right: 0.1rem;
								background: #0054E3;
							}
							.green_block_content{
								width: 0.03rem;
								height: 0.16rem;
								margin-right: 0.1rem;
								background: #0BC9BA;
							}
							.yellow_block_content{
								width: 0.03rem;
								height: 0.16rem;
								margin-right: 0.1rem;
								background: #F6826A;
							}
						}
						> div{
							letter-spacing: 0.01rem;
							line-height: 0.24rem;
						}
					}
					.home_production_footer{
						display: flex;
						align-items: center;
						margin-bottom: 0.4rem;
						a{
							color: #015FFF;
							.home_production_name{
								font-size: 0.14rem;
								font-weight: 600;
							}
							img{
								margin-left: 0.07rem;
								height: 0.07rem;
							}
						}
					}
				}
				.home_production_serve_item_content:last-child{
					margin-right: 0;
				}
			}
		}
		.mobile_home_application_scenarios_content_wrap{
			display: none;
		}
		.home_application_scenarios_content_wrap{
			width: 100%;
			background: #fff;
			.home_application_scenarios_title_content{
				max-width: 12rem;
				margin: 0 auto;
				.home_application_scenarios_title{
					text-align: center;
					padding: 1.2rem 0 1.05rem 0;
					color: #0C253A;
					font-size: 0.26rem;
					line-height: 0.37rem;
					font-weight: lighter;
				}
			}
			.home_application_scenarios_content{
				max-width: 12rem;
				margin: 0 auto;
				display: flex;
				justify-content: center;
				padding-bottom: 1.01rem;
				.home_application_scenarios_left_content{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.home_application_scenarios_left_top_content{
						flex: 1;
						text-align: right;
						max-width: 2.85rem;
						.home_application_scenarios_title{
							font-size: 0.16rem;
							color: #0C253A;
							font-weight: 600;
							line-height: 0.22rem;
						}
						.home_application_scenarios_second_title{
							font-size: 0.14rem;
							color: #0C253A;
							font-weight: 400;
							line-height: 0.2rem;
							margin-top: 0.08rem;
						}
						.home_application_scenarios_text_content{
							margin-top: 0.2rem;
							font-size: 0.12rem;
							color: #8A99A5;
							line-height: 0.18rem;
							letter-spacing: 0.01rem;
						}
						.home_application_scenarios_text_second_content{
							margin-top: 0.12rem;
							font-size: 0.12rem;
							color: #8A99A5;
							line-height: 0.22rem;
							letter-spacing: 0.01rem;
						}
					}
					.home_application_scenarios_left_bottom_content{
						flex: 1;
						text-align: right;
						max-width: 2.85rem;
						margin-top: 0.2rem;
						.home_application_scenarios_title{
							font-size: 0.16rem;
							color: #0C253A;
							font-weight: 600;
							line-height: 0.22rem;
						}
						.home_application_scenarios_second_title{
							font-size: 0.14rem;
							color: #0C253A;
							font-weight: 400;
							line-height: 0.2rem;
							margin-top: 0.08rem;
						}
						.home_application_scenarios_text_content{
							margin-top: 0.2rem;
							font-size: 0.12rem;
							color: #8A99A5;
							line-height: 0.18rem;
							letter-spacing: 0.01rem;
						}
					}
				}
				.home_application_scenarios_left_img_content{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					margin-left: 0.4rem;
					.home_application_scenarios_left_img_top{
						flex: 1;
						display: flex;
						justify-content: flex-start;
						img{
							padding-top: 0.6rem;
							width: 0.6rem;
							height: 0.6rem;
						}
					}
					.home_application_scenarios_left_img_bottom{
						flex: 1;
						display: flex;
						justify-content: flex-start;
						margin-top: 0.35rem;
						img{
							padding-top: 0.6rem;
							width: 0.6rem;
							height: 0.6rem;
						}
					}
				}
				.home_application_scenarios_center_img_content{
					margin: 0.21rem 0.2rem 0 0.2rem;
					
					img{
						padding-top: 0.6rem;
						width: 2.2rem;
					}
				}
				.home_application_scenarios_right_img_content{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					margin-right: 0.4rem;
					.home_application_scenarios_right_img_top{
						flex: 1;
						display: flex;
						justify-content: flex-start;
						img{
							padding-top: 0.6rem;
							width: 0.6rem;
							height: 0.6rem;
						}
					}
					.home_application_scenarios_right_img_bottom{
						flex: 1;
						display: flex;
						justify-content: flex-start;
						margin-top: 0.35rem;
						img{
							padding-top: 0.6rem;
							width: 0.6rem;
							height: 0.6rem;
						}
					}
				}
				.home_application_scenarios_right_content{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					a{
						display: inline-block;
						flex: 1;
						.home_application_scenarios_right_top_content{
							max-width: 2.85rem;
							flex: 1;
							.home_application_scenarios_title{
								font-size: 0.16rem;
								color: #0C253A;
								font-weight: 600;
								line-height: 0.22rem;
							}
							.home_application_scenarios_second_title{
								font-size: 0.14rem;
								color: #0C253A;
								font-weight: 400;
								line-height: 0.2rem;
								margin-top: 0.08rem;
							}
							.home_application_scenarios_text_content{
								margin-top: 0.2rem;
								font-size: 0.12rem;
								color: #8A99A5;
								line-height: 0.18rem;
								letter-spacing: 0.01rem;
							}
							.home_application_scenarios_text_second_content{
								margin-top: 0.12rem;
								font-size: 0.12rem;
								color: #8A99A5;
								line-height: 0.18rem;
								letter-spacing: 0.01rem;
							}
						}
						.home_application_scenarios_right_bottom_content{
							margin-top: 0.22rem;
							max-width: 2.85rem;
							flex: 1;
							.home_application_scenarios_title{
								font-size: 0.16rem;
								color: #0C253A;
								font-weight: 600;
								line-height: 0.22rem;
							}
							.home_application_scenarios_second_title{
								font-size: 0.14rem;
								color: #0C253A;
								font-weight: 400;
								line-height: 0.2rem;
								margin-top: 0.08rem;
							}
							.home_application_scenarios_text_content{
								margin-top: 0.2rem;
								font-size: 0.12rem;
								color: #8A99A5;
								line-height: 0.18rem;
								letter-spacing: 0.01rem;
							}
						}
					}
				
					
				}
			}
		}
		.home_about_bianjie_content_wrap{
			background: #FAFAFA;
			position: relative;
			.home_about_bianjie_left_img{
				width: 1.62rem;
				position: absolute;
				left: 0.64rem;
			}
			.home_about_bianjie_content{
				max-width: 12rem;
				margin: 0 auto;
				display: flex;
				.home_about_bianjie_left_content{
					flex: 1;
					margin: 1.07rem  0.8rem 1.1rem 0;
					img{
						width: 100%;
					}
				}
				.home_about_bianjie_right_content{
					flex: 1;
					margin-top: 1.07rem;
					.home_about_bianjie_title_content{
						font-size: 0.16rem;
						color: #0C253A;
						line-height: 0.22rem;
						font-weight: bold;
						margin-bottom: 0.3rem;
					}
					.home_about_bianjie_text_content{
						color: #8A99A5;
						font-size: 0.14rem;
						line-height: 0.27rem;
						
					
					}
					.home_about_bianjie_right_button_content{
						display: flex;
						margin-top: 0.3rem;
						.home_about_bianjie_cooperation_button{
							background: #0054E3;
							padding: 0.1rem 0;
							border-radius: 0.02rem;
							span{
								padding-left: 0.1rem;
								color: #fff;
								font-size: 0.14rem;
								line-height: 0.2rem;
								padding-right: 0.67rem;
							}
							img{
								width: 0.07rem;
								padding-right: 0.1rem;
							}
						}
						.home_about_bianjie_read_more_button{
							margin-left: 0.12rem;
							background: #0054E3;
							padding: 0.1rem 0;
							border-radius: 0.02rem;
							
							span{
								padding-left: 0.1rem;
								color: #fff;
								font-size: 0.14rem;
								line-height: 0.2rem;
								padding-right: 0.67rem;
							}
							img{
								width: 0.07rem;
								padding-right: 0.1rem;
							}
						}
					}
				}
			}
			.home_about_bianjie_right_img{
				width: 2.46rem;
				position: absolute;
				right: 0;
				bottom: 0;
			}
		}
	
	}
	@media screen and (max-width: 768px){
		.home_container{
			.home_core_content_wrap{
				height: 9rem;
				.home_core_content{
					margin: 0 8%;
					height: auto;
					.home_core_list_content{
						flex-direction: column;
						.home_core_list_left_content{
							flex-direction: column;
						}
						.home_core_list_right_content{
							margin-bottom: 0.47rem;
							flex-direction: column;
						}
					}
				}
			}
			.home_production_serve_content_wrap{
				.home_production_content{
					.home_production_list_content{
						width: 85%;
						.home_production_item_content{
							width: 100%;
							.home_production_item_text_content{
								padding-right: 0.2rem;
							}
						}
					}
				}
			}
			.home_production_list_content_wrap{
				.home_production_serve_list_content{
					flex-direction: column;
					align-items: center;
					.home_production_serve_item_content{
						width: 5rem;
						padding: 0 0.51rem;
						margin: 0.8rem 0 0 0;
					}
				}
			}
			.home_application_scenarios_content_wrap{
				display: none;
			}
			.mobile_home_application_scenarios_content_wrap{
				display: block;
				.mobile_home_application_scenarios_title_content{
					text-align: center;
					.mobile_home_application_scenarios_title{
						font-size: 0.26rem;
						line-height: 0.37rem;
						font-weight: lighter;
						padding: 0.8rem 0 0.8rem 0;
					}
				}
				.mobile_home_application_scenarios_content{
					.mobile_home_application_list_content{
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						list-style: none;
						a{
							.mobile_home_application_item{
								text-align: center;
								max-width: 5rem;
								margin-bottom: 0.8rem;
								img{
									width: 0.64rem;
									height: 0.64rem;
								}
								h2{
									font-size: 0.16rem;
									line-height: 0.22rem;
									font-weight: bold;
									padding: 0.3rem 0 0.08rem 0;
								}
								h5{
									font-size: 0.14rem;
									font-weight: bold;
									line-height: 0.2rem;
									padding: 0 0 0.15rem 0;
								}
								p{
									font-size: 0.12rem;
									line-height: 0.22rem;
									letter-spacing: 0.01rem;
									font-weight: lighter;
									color: #8A99A5;
									text-align: left;
									margin:  0 0.2rem;
								}
								p:last-child{
									padding-top: 0.12rem;
								}
							 }
						}
					}
				}
			}
			.home_about_bianjie_content_wrap{
				.home_about_bianjie_left_img{
					width: 1.15rem;
				}
				.home_about_bianjie_right_img{
					width: 1.72rem;
				}
				.home_about_bianjie_content{
					justify-content: center;
					.home_about_bianjie_left_content{
						display: none;
					}
					.home_about_bianjie_right_content{
						max-width: 5rem;
						margin: 0.8rem 0.2rem 0.5rem 0.2rem;
						display: flex;
						flex-direction: column;
						align-items: center;
					}
				}
			}
		}
	}
	@media screen and (min-width:375px) and (max-width:600px){
		.home_container{
			.home_container_wrap{
				height:4.6rem;
				.home_content_wrap{
					.home_content{
						.home_content_title{
							text-align: center;
							font-size: 0.32rem;
						}
						.home_content_second_title{
							font-size: 0.14rem;
						}
					}
				}
			}
			.home_production_list_content_wrap{
				.home_production_serve_list_content{
					padding-bottom: 1.4rem;
					.home_production_serve_item_content{
						width: 3.35rem;
					}
				}
			}
			.home_production_serve_content_wrap{
				.home_production_content{
					.home_production_list_content{
						.home_production_item_content{
							.home_production_item_img_content{
								padding: 0 0.2rem;
							}
						}
					}
				}
			}
		}
	}
	@media screen and (max-width:375px){
		.home_container{
			.home_container_wrap{
				height:4.6rem;
				.home_content_wrap{
					.home_content{
						.home_content_title{
							text-align: center;
							font-size: 0.32rem;
						}
						.home_content_second_title{
							font-size: 0.14rem;
						}
					}
				}
			}
			.home_production_list_content_wrap{
				.home_production_serve_list_content{
					padding-bottom: 1.4rem;
					.home_production_serve_item_content{
						width: 3.35rem;
						padding: 0 0.2rem;
					}
				}
			}
			.home_production_serve_content_wrap{
				.home_production_content{
					.home_production_list_content{
						width: 85%;
						.home_production_item_content{
							.home_production_item_img_content{
								padding: 0 0.1rem;
							}
						}
					}
				}
			}
		}
	}

</style>
