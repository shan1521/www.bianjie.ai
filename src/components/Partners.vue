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
					<div class="business_partner_top_img_content">
						<div>
							<a href="https://www.wxblockchain.com/" target="_blank">
								<img src="../assets/home/wx.png" alt="">
							</a>
							<a href="https://cosmos.network/" target="_blank">
								<img src="../assets/home/cosmos.png" alt="">
							</a>
						</div>
						<div>
							<a href="https://www.haodf.com/" target="_blank">
								<img src="../assets/home/hdf.png" alt="">
							</a>
							<img src="../assets/home/nxyl.png" alt="">
						</div>
					</div>
					<div class="business_partner_bottom_img_content">
						<div>
							<a href="http://www.tonghaocapital.com/" target="_blank">
								<img src="../assets/home/xwl.png" alt="">
							</a>
							<a href="http://healthcloud.link/#/home" target="_blank">
								<img src="../assets/home/xkl.png" alt="">
							</a>
						</div>
						<div>
							<img src="../assets/home/shpdwszyglzx.png" alt="">
							<a href="http://www.bjmu.edu.cn/" target="_blank">
								<img src="../assets/home/Peking_University.png" alt="">
							</a>
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
							<a href="http://www.trustedblockchain.cn/" target="_blank">
								<img src="../assets/home/kxqkl.png" alt="">
							</a>
							<a href="http://www.softline.org.cn/" target="_blank">
								<img src="../assets/home/shqkl.png" alt="">
							</a>
						</div>
						<div>
							<a href="https://shbta.cn/" target="_blank">
								<img src="../assets/home/shrjglxh.png" alt="">
							</a>
							<a href="https://www.cie-info.org.cn/site/term/51.html">
								<img src="../assets/home/zgdzxh.png" alt="">
							</a>
						</div>
					</div>
					<div class="industry_collaboration_bottom_img_content">
						<a href="https://www.ccidgroup.com/" target="_blank">
							<img src="../assets/home/sd.png" alt="">
						</a>
						<a href="http://www.blockdata.club/" target="_blank">
							<img src="../assets/home/lt.png" alt="">
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Partners"
	}
</script>

<style scoped lang="less">
	.partners_content_container{
		width: 100%;
		.partners_content_wrap{
			background: url("../assets/home/partner.png") no-repeat center center;
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
					font-weight: lighter;
					color: #fff;
				}
				h5{
					margin-top: 0.2rem;
					font-size: 0.22rem;
					line-height: 0.3rem;
					font-weight: lighter;
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
					 .business_partner_top_img_content{
						 margin-top: 0.6rem;
						 display: flex;
						 div{
							 display: flex;
							 img{
								 width: 3rem;
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
						}
					}
					.industry_collaboration_bottom_img_content{
						margin: 0.6rem 0 1rem 0;
						img{
							width: 3rem;
						}
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
							margin-top: 0;
							display: flex;
							justify-content: center;
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
