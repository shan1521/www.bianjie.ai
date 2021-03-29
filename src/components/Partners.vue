<template>
	<div class="partners_content_container">
		<div class="partners_content_wrap">
			<div class="partners_header_content">
				<h2>合作伙伴</h2>
				<h5>开放合作 携手共进 共同推动可信区块链技术落地与发展</h5>
			</div>
		</div>
		<div class="business_partner_container">
			<div class="business_partner_content_wrap">
				<div class="business_partner_title_content">
					<div class="business_partner_left_line"></div>
					<div class="business_partner_title">业务伙伴</div>
					<div class="business_partner_right_line"></div>
				</div>
				<div class="business_partner_logo_content">
					<div class="business_partner_top_img_content" v-for="item in partnersArray">
						<div class="business_partner_img_content_wrap"  v-if="item.left">
							<div style="margin-bottom: 0" v-for="v in item.left">
								<a v-if="v.href" :href="v.href" target="_blank" rel="noopener noreferrer">
									<img :src="v.src" alt="">
								</a>
								<img v-else :src="v.src" alt="">
							</div>
						</div>
						<div v-if="item.right" >
							<div style="margin-bottom: 0" v-for="res in item.right">
								<a v-if="res.href" :href="res.href" target="_blank" rel="noopener noreferrer">
									<img :src="res.src" alt="">
								</a>
								<img v-else :src="res.src" alt="">
							</div>
						</div>
						
						
					</div>
				</div>
			</div>
		</div>
		<div class="industry_collaboration_container">
			<div class="industry_collaboration_content_wrap">
				<div class="industry_collaboration_title_content">
					<div class="industry_collaboration_left_line"></div>
					<div class="industry_collaboration_title">行业协作</div>
					<div class="industry_collaboration_right_line"></div>
				</div>
				<div class="industry_collaboration_logo_content">
					<div class="industry_collaboration_top_img_content">
						<div>
							<a href="http://www.ca-sme.org" target="_blank">
								<img src="../assets/home/CASME.png" alt="">
							</a>
							<a href="http://www.trustedblockchain.cn/" target="_blank">
								<img src="../assets/home/kxqkl.png" alt="">
							</a>
						</div>
						<div>
							<a href="http://www.softline.org.cn/" target="_blank">
								<img src="../assets/home/shrjglxh.png" alt="">
							</a>
							<a href="http://www.shbta.cn/" target="_blank">
								<img src="../assets/home/shqkl.png" alt="">
							</a>
						</div>
					</div>
					<div class="industry_collaboration_bottom_img_content">
						<div>
							<a href="https://www.cie-info.org.cn/site/term/51.html" target="_blank">
								<img src="../assets/home/zgdzxh.png" alt="">
							</a>
							<a href="https://www.ccidgroup.com/" target="_blank">
								<img src="../assets/home/sd.png" alt="">
							</a>
						</div>
						<div class="last_content">
							<a href="http://www.blockdata.club/" target="_blank">
								<img src="../assets/home/lt.png" alt="">
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="qr_content">
			<div class="qr_content_wrap">
				<h1>关注与联系</h1>
				<div class="qr_img_content">
					<img src="../assets/home/qr_bianjie.png" alt="">
				</div>
				<p content="mail_content">联系我们: contact@bianjie.ai</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Partners",
		data() {
			return {
				partnersArray:[
					{
						left:[
							{
								src:require('../assets/home/wx.png'),
								href:'https://www.wxblockchain.com/'
							},
							{
								src: require('../assets/home/xwl.png'),
								href: ''
							}
						],
						right:[
							{
								src:require('../assets/home/cosmos.png'),
								href:'https://cosmos.network/'
							},
							{
								src: require('../assets/home/tendermint.png'),
								href: 'https://tendermint.com/'
							}
						]
						
					},
					{
						left:[
							{
								src:require('../assets/home/bianjie_irisnet_logo.png'),
								href:'https://www.irisnet.org/'
							},
							{
								src: require('../assets/home/BSN.png'),
								href: 'https://www.bsnbase.com/p/main/index'
							}
						],
						right:[
							{
								src:require('../assets/home/Chainlink.png'),
								href:'https://chain.link/'
							},
							{
								src: require('../assets/home/zc.png'),
								href: 'http://www.zcbri.com/'
							}
						]
						
					},
					{
						left:[
							{
								src:require('../assets/home/nanjing.png'),
								href:''
							},
							{
								src: require('../assets/home/yizhengtong.png'),
								href: 'http://www.spiderid.cn/'
							}
						],
						right:[
							{
								src:require('../assets/home/Peking_University.png'),
								href:'http://www.bjmu.edu.cn/'
							},
							{
								src: require('../assets/home/starry_media.png'),
								href: 'http://www.starrymedia.com/'
							}
						]
						
					},
					{
						left:[
							{
								src:require('../assets/home/xkl.png'),
								href:''
							},
							{
								src: require('../assets/home/rd.png'),
								href: ''
							}
						],
						right:[
							{
								src:require('../assets/home/shpdwszyglzx.png'),
								href:''
							}
							
						]
					},
				],
			}
		},
		
	}
</script>

<style scoped lang="less">
	@import "../style/convert";
	@media print {
		.partners_content_container{
			.partners_content_wrap{
				-webkit-print-color-adjust: exact;
			}
			.business_partner_container{
				max-width: 1400px;
				.business_partner_content_wrap{
					margin-top: ~`convertPxToCm('30px')` !important;
					.business_partner_logo_content{
						.business_partner_top_img_content{
							div{
								img{
									width:7cm !important;
									height: 0.4rem;
								}
							}
						}
						.business_partner_bottom_img_content{
							div{
								img{
									width:7cm !important;
									height: 0.4rem;
								}
							}
						}
					}
				}
			}
			.industry_collaboration_container{
				max-width: 1400px;
				.industry_collaboration_content_wrap{
					margin-top: ~`convertPxToCm('30px')` !important;
					.industry_collaboration_logo_content{
						.industry_collaboration_top_img_content{
 							div{
								display: flex;
								a{
									img{
										width:7cm !important;
										height:~`convertPxToCm('40px')` !important;
									}
								}
							}
						}
						.industry_collaboration_bottom_img_content{
							margin-bottom: ~`convertPxToCm('40px')` !important;
							div{
								display: flex;
								a{
									img{
										width:7cm !important;
										height:~`convertPxToCm('40px')` !important;

									}
								}
							}
						}
					}
				}
			}
			.qr_content{
				.qr_content_wrap{
					margin-bottom: 0 !important;
				}
			}
		}
	}
	.partners_content_container{
		width: 100%;
		.partners_content_wrap{
			background: url("../assets/home/partner.svg") no-repeat center center;
			background-size: cover;
			height: 4.6rem;
			display: flex;
			align-items: center;
			justify-content: center;
			.partners_header_content{
				text-align: center;
				h2{
					font-size: 0.6rem;
					line-height: 0.84rem;
					color: #fff;
				}
				h5{
					margin-top: 0.2rem;
					font-size: 0.22rem;
					line-height: 0.3rem;
					color: #fff;
				}
			}
		}
		.business_partner_container{
			 max-width: 12rem;
			 margin: 0 auto;
			 .business_partner_content_wrap{
				 margin-top: 1rem;
				 .business_partner_title_content{
					 display: flex;
					 align-items: center;
					 .business_partner_left_line{
						 height: 0.01rem ;
						 background: #E3E3E4;
						 flex: 1;
					 }
					 .business_partner_title{
						 color: #0C253A;
						 font-size: 0.18rem;
						 line-height: 0.25rem;
						 font-weight: bold;
						 padding: 0 0.34rem
					 }
					 .business_partner_right_line{
						 height: 0.01rem;
						 background: #E3E3E4;
						 flex: 1;
					 }
				 }
				 .business_partner_logo_content{
					 margin-top: 0.6rem;
					 .business_partner_top_img_content{
						 margin-top: 0.6rem;
						 display: flex;
						 div{
							 display: flex;
							 img{
								 width: 3rem;
								 height: 0.4rem;
							 }
						 }
					 }
					 .business_partner_bottom_img_content{
						 margin-top: 0.6rem;
						 display: flex;
						 div{
							 display: flex;
							 img{
								 width: 3rem;
								 height: 0.4rem;
							 }
						 }
					 }
				 }
			 }
		}
		.industry_collaboration_container{
			max-width: 12rem;
			margin: 0 auto;
			.industry_collaboration_content_wrap{
				margin-top: 1rem;
				.industry_collaboration_title_content{
					display: flex;
					align-items: center;
					.industry_collaboration_left_line{
						height: 0.01rem ;
						background: #E3E3E4;
						flex: 1;
					}
					.industry_collaboration_title{
						color: #0C253A;
						font-size: 0.18rem;
						line-height: 0.25rem;
						font-weight: bold;
						padding: 0 0.34rem
					}
					.industry_collaboration_right_line{
						height: 0.01rem;
						background: #E3E3E4;
						flex: 1;
					}
				}
				.industry_collaboration_logo_content{
					.industry_collaboration_top_img_content{
						margin-top: 0.6rem;
						display: flex;
						img{
							width: 3rem;
							height: 0.4rem;
						}
					}
					.industry_collaboration_bottom_img_content{
						margin: 0.6rem 0 1rem 0;
						display: flex;
						img{
							width: 3rem;
							height: 0.4rem;
						}
					}
				}
			}
		}
		.qr_content{
			margin-top: 1rem;
			width: 100%;
			.qr_content_wrap{
				max-width: 12rem;
				margin: 0 auto;
				text-align: center;
				margin-bottom: 1rem;
				h1{
					text-align: center;
					margin-bottom: 0.2rem;
					font-size: 0.18rem;
				}
				.qr_img_content{
					width: 1.38rem;
					margin: 0 auto;
					img{
						width: 100%;
						
					}
				}
			}
		}
	}
	@media screen and (max-width: 1200px){
		.partners_content_container{
			.business_partner_container{
				.business_partner_content_wrap{
					.business_partner_logo_content{
						display: flex;
						flex-direction: column;
						align-items: center;
						.business_partner_top_img_content{
							flex-direction: column;
							margin-top: 0;
							width: 6rem;
							div{
								margin-bottom: 0.4rem;
							}
						}
						.business_partner_bottom_img_content{
							flex-direction: column;
							margin-top: 0;
							div{
								margin-bottom: 0.4rem;
							}
							.dfi_content{
								min-width: 6rem;
							}
						}
					}
				}
			}
			.industry_collaboration_container{
				.industry_collaboration_content_wrap{
					.industry_collaboration_logo_content{
						.industry_collaboration_top_img_content{
							display: flex;
							flex-direction: column;
							align-items: center;
							div{
								display: flex;
								margin-bottom: 0.4rem;
							}
						}
						.industry_collaboration_bottom_img_content{
							display: flex;
							flex-direction: column;
							align-items: center;
							margin-top: 0;
							div{
								display: flex;
								margin-bottom: 0.4rem;
							}
							.last_content{
								width: 6rem;
								display: flex;
								justify-content: flex-start;
							}
						}
					}
				}
			}
		}
	}
	@media screen and (min-width: 375px) and (max-width: 600px){
		.partners_content_container{
			.partners_content_wrap{
				.partners_header_content{
					h5{
						padding: 0 0.4rem;
					}
				}
			}
			.business_partner_container{
				.business_partner_content_wrap{
					.business_partner_logo_content{
						.business_partner_top_img_content{
							flex-direction: column;
							margin-top: 0;
							width: auto;
							div{
								display: flex;
								flex-direction: column;
								margin-bottom: 0;
								img{
									margin-bottom: 0.4rem;
								}
							}
						}
						.business_partner_bottom_img_content{
							flex-direction: column;
							margin-top: 0;
							div{
								display: flex;
								flex-direction: column;
								margin-bottom: 0;
								img{
									margin-bottom: 0.4rem;
								}
							}
							.dfi_content{
								min-width: auto;
							}
						}
					}
				}
			}
			.industry_collaboration_container{
				.industry_collaboration_content_wrap{
					margin-top: 0.4rem;
					.industry_collaboration_logo_content{
						.industry_collaboration_top_img_content{
							div	{
								display: flex;
								flex-direction: column;
								margin-bottom: 0;
								a{
									img{
										margin-bottom: 0.4rem;
									}
								}
							}
						}
						.industry_collaboration_bottom_img_content{
							display: flex;
							flex-direction: column;
							align-items: center;
							margin-bottom: 0;
							div	{
								display: flex;
								flex-direction: column;
								margin-bottom: 0;
								a{
									img{
										margin-bottom: 0.4rem;
									}
								}
							}
							.last_content{
								width: 3rem;
								display: flex;
							}
						}
					}
				}
			}

		}
	}
	@media screen and (max-width: 375px){
		.partners_content_container{
			.partners_content_wrap{
				height:3.76rem;
				.partners_header_content{
					h2{
						font-size: 0.32rem;
					}
					h5{
						font-size: 0.14rem;
						line-height: 0.21rem;
					}
				}
			}
			.partners_content_wrap{
				.partners_header_content{
					h5{
						padding: 0 0.4rem;
					}
				}
			}
			.business_partner_container{
				.business_partner_content_wrap{
					.business_partner_logo_content{
						.business_partner_top_img_content{
							flex-direction: column;
							margin-top: 0;
							width: auto;
							div{
								display: flex;
								flex-direction: column;
								margin-bottom: 0;
								img{
									margin-bottom: 0.4rem;
								}
							}
						}
						.business_partner_bottom_img_content{
							flex-direction: column;
							margin-top: 0;
							div{
								display: flex;
								flex-direction: column;
								margin-bottom: 0;
								img{
									margin-bottom: 0.4rem;
								}
							}
							.dfi_content{
								min-width: auto;
							}
						}
					}
				}
			}
			.industry_collaboration_container{
				.industry_collaboration_content_wrap{
					margin-top: 0.4rem;
					.industry_collaboration_logo_content{
						.industry_collaboration_top_img_content{
							div	{
								display: flex;
								flex-direction: column;
								margin-bottom: 0;
								a{
									img{
										margin-bottom: 0.4rem;
									}
								}
							}
						}
						.industry_collaboration_bottom_img_content{
							display: flex;
							flex-direction: column;
							align-items: center;
							margin-bottom: 0;
							a{
								img{
									margin-bottom: 0.4rem;
								}
							}
						}
					}
				}
			}

		}
	}
</style>
