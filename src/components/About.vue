<template>
	<div class="about_container_content">
		<div class="about_content_wrap">
			<div class="about_content">
				<h2>关于我们-边界智能</h2>
				<h5>专注于区块链、大数据相关产品技术研发和解决方案的⾼科技公司</h5>
			</div>
		</div>
		<div class="about_text_container">
			<div class="about_text_content_wrap">
				<p>上海边界智能科技有限公司（Bianjie.AI）创立于 2016 年，是⼀家专注于区块链、大数据相关产品技术研发、应用平台建设和解决方案咨询的高科技公司和国家高新技术企业。边界智能以区块链跨链、隐私计算及大数据分析技术创新为核心，自主研发了安全可控、符合国密标准、支持下一代分布式商业系统构建的<router-link  :to="`/products/irita`" style="color: #155fff">企业联盟链 IRITA</router-link> 产品系列，并与区块链服务网络（BSN）、南京数字金融产业研究院、南京壹证通、复星星康链、南京中诚区块链研究院、武汉润和德康医疗数据有限公司等合作伙伴在跨链服务、智慧金融、链上大数据分析、安全身份认证、医疗健康⼤数据等领域共同合作推进创新技术的落地应用，创造商业价值，服务实体经济。</p>
				<p>边界智能拥有多项自主创新的知识产权，并参与了在中国科协信息科技学会联合体指导下，由中国电子学会组织编写，中国科学技术出版社出版的中国科协新一代信息技术系列丛书《区块链导论》编撰。荣获了包括中国创新创业优胜企业、中国健康医疗大数据天使之星组冠军等多个区块链创新奖项。</p>
				<p>公司拥有雄厚的人才实力，同时也是全球著名跨链项目 <a href="https://cosmos.network/" target="_blank" rel="noopener noreferrer" style="color: #155fff">COSMOS</a> / <router-link :to="`/products/irisnet`" style="color: #155fff">IRISnet</router-link> 的技术开发者。创始团队来自于 IBM Watson 全球研究院、万向区块链、中国金融在线、火币研究院等，在区块链技术研发方面超过3年经验、企业运营中超过10年以上工作经验，对相关行业领域均有着深厚的理解。核心研发团队毕业于卡内基梅隆（CMU）、马里兰（UMCP）、清华、北大、复旦、交大、人大等全球一流学府，覆盖计算机工程、自动化、算法与软件开发等专业。</p>
			</div>
		</div>
		<div class="about_img_content">
			<div class="about_img_content_wrap">
				<h5 >荣誉资质</h5>
				<div class="about_list_content">
					<ul class="about_list_content_container">
						<li class="about_list_item" v-for="item in listArray">
							<div style="font-size:0.14rem;color: #8A99A5">{{item.date}}</div>
							<p style="color: #0C253A;font-size:0.14rem;line-height: 0.28rem">{{item.content}}</p>
						</li>
					</ul>
				</div>
				<div id="certify" v-if="swiperArray.length !== 0">
					<swiper ref="mySwiper" :options="swiperOption" class="my-swipe">
						<swiper-slide style="display: flex;justify-content:center;" v-for="(item ,index) in swiperArray" :key="index">
							<div style="height: 3.2rem;margin:0 40px">
								<img  style="display:block;height:100%;" :src="item.src" alt="">
							</div>
						</swiper-slide>
					</swiper>
					<div class="swiper-pagination"></div>
					<div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
					<div class="swiper-button-next"></div>
				</div>
				<div class="print_img_container">
					<ul class="print_img_content">
						<li class="print_img_item" v-for="(item ,index) in swiperArray" :key="index">
							<img :src="item.src" alt="">
						</li>
					</ul>
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
		name: "About",
		data(){
			return{
				swiperArray:[
					{
						src:require('../assets/home/honor_1.jpg')
					},
					{
						src:require('../assets/home/honor_2.jpg')
					},
					{
						src:require('../assets/home/honor_3.jpg')
					},
					{
						src:require('../assets/home/honor_4.jpg')
					},
					{
						src:require('../assets/home/honor_5.jpg')
					},
					{
						src:require('../assets/home/honor_6.jpg')
					},
					{
						src:require('../assets/home/honor_7.jpg')
					},
					{
						src:require('../assets/home/honor_8.jpg')
					},
					{
						src:require('../assets/home/honor_9.jpg')
					},
					{
						src:require('../assets/home/honor_10.jpg')
					},
					{
						src:require('../assets/home/honor_11.jpg')
					},
					{
						src:require('../assets/home/honor_12.jpg')
					},
					{
						src:require('../assets/home/honor_13.jpg')
					},
					{
						src:require('../assets/home/honor_14.jpg')
					},
					{
						src:require('../assets/home/honor_15.jpg')
					},
					{
						src:require('../assets/home/honor_16.jpg')
					},
					{
						src:require('../assets/home/honor_17.jpg')
					},
					{
						src:require('../assets/home/honor_18.jpg')
					},
				],
				listArray:[
                    {
                        date:'2020 年 10 月',
                        content:'荣获「2020 中国区块链技术创新典型企业」奖项'
                    },
                    {
                        date:'2020 年 6 月',
                        content:'「2020 长三角（上海）区块链应用创新大赛」获奖'
                    },
                    {
                        date:'2020 年 2 月',
                        content:'「区块链服务网络（BSN）第一次开发者大赛」获奖'
                    },
					{
						date:'2019 年 12 月',
						content:'荣获「2019中国区块链技术创新典型企业」奖项'
					},
					{
						date:'2019 年 11 月',
						content:'通过双软认证'
					},
					{
						date:'2019 年 10 月',
						content:'通过国家高新技术企业认定'
					},
					{
						date:'2019 年 8 月',
						content:'边界智能打造的「跨链服务联盟枢纽 ISCH」，荣获2019中国优秀区块链解决方案'
					},
					{
						date:'2019 年 8 月',
						content:'边界智能为星康链提供区块链技术支持的「区块链电子处方共享平台」荣获2019中国优秀区块链解决方案'
					},
					{
						date:'2019 年 6 月',
						content:'跨链服务项目获得上海市2019年度「科技创新行动计划」 科技型中小企业技术创新资金支持'
					},
					{
						date:'2019 年 6 月',
						content:'荣获中国最佳管理创新实践案例奖'
					},
					{
						date:'2019 年 5 月',
						content:'2019年「创业在上海」国际创新创业大赛优秀企业奖'
					},
					{
						date:'2019 年 1 月',
						content:'上榜由链塔智库&工信部赛迪区块链研究院联合发布的《中国区块链企业百强榜》'
					},
					{
						date:'2018 年 12 月',
						content:'边界智能&复星健康云 BEAN 支持的建设方案荣获「首届海南大数据创新应用大赛」健康医疗组评委评分第一'
					},
					{
						date:'2018 年 10 月',
						content:'2018「创业在上海」国际创新创业大赛优胜企业奖'
					},
					{
						date:'2018 年 9 月',
						content:'荣获中国健康医疗大数据产业创新大赛天使之星组冠军'
					},
					{
						date:'2018 年 8 月',
						content:'荣获中国健康医疗大数据产业创新大赛北京赛区 TMT 数据组一等奖'
					},
     
				],
				swiperOption:{
					watchSlidesProgress: true,
					slidesPerView: "auto",
					centeredSlides: true,
					loop: true,
					speed: 300,
					// loopedSlides: 12,
					autoplay: true,
					/*autoplay: {
					delay: 0,
					stopOnLastSlide: false,
					disableOnInteraction: true,
					},*/
					// grabCursor: true,
					pagination: {
						el: '.swiper-pagination',
						// clickable :true,
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					on:{
						progress: function(progress) {
							// for (let i = 0; i < this.slides.length; i++) {
							// 	var slide = this.slides.eq(i);
							// 	var slideProgress = this.slides[i].progress;
							// 	let modify = 1;
							// 	if (Math.abs(slideProgress) > 1) {
							// 		modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
							// 	}
							// 	let translate = slideProgress * modify * 260 + 'px';
							// 	let scale = 1 - Math.abs(slideProgress) / 5;
							// 	let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
							// 	slide.transform('translateX(' + translate + ') scale(' + scale + ')');
							// 	slide.css('zIndex', zIndex);
							// 	slide.css('opacity', 1);
							// 	if (Math.abs(slideProgress) > 3) {
							// 		slide.css('opacity', 0);
							// 	}
							// }
						},
						setTransition: function(transition) {
							for (var i = 0; i < this.slides.length; i++) {
								var slide = this.slides.eq(i);
								slide.transition(transition);
							}
							
						}
					}
					// slidesPerView:3,
					// loopedSlides:3,
					// speed: 300,
					// autoplayDisableOnInteraction:false,
					// disableOnInteraction:false,
					//鼠标变成手掌型
					// grabCursor: true,
					// virtualTranslate: false,
					// roundLengths: true,
					// autoHeight: true,
					// effect : 'coverflow',
					// navigation:{
					// 	nextEl: '.swiper-button-next',
					// 	prevEl: '.swiper-button-prev',
					// },
				},
			}
		},
		mounted(){
			let swiper = document.getElementsByClassName('swiper-wrapper')[0];
			if (swiper) {
				swiper.style.alignItems = 'center';
			}
		}
	}
</script>

<style scoped lang="less">
	@import "../style/convert";
	@media print {
		.about_container_content{
			background: #fff !important;
			.about_content_wrap{
				-webkit-print-color-adjust: exact;
			}
			.about_text_container{
				background: #fff !important;
				.about_text_content_wrap{
					padding-top: ~`convertPxToCm('20px')` !important;;
					padding-bottom: ~`convertPxToCm('20px')` !important;
					p{
						font-size: ~`convertPxToCm('8px')` !important;
						line-height: ~`convertPxToCm('16px')` !important;
						margin-bottom: ~`convertPxToCm('10px')` !important;;
					}
				}
			}
			.about_img_content{
				background: #fff !important;
				.about_img_content_wrap{
					h5{
						padding-top: 0 !important;
						margin-bottom: ~`convertPxToCm('10px')` !important;
					}
					.about_list_content{
						.about_list_content_container{
							display: initial !important;
							.about_list_item{
								width: auto !important;
								height: auto !important;
								box-shadow: none !important;
								background: none !important;
								display: flex !important;
								padding:  ~`convertPxToCm('10px')` ~`convertPxToCm('20px')` 0 ~`convertPxToCm('20px')`!important;
								margin: 0 !important;
								div{
									line-height:  ~`convertPxToCm('12px')` !important;
									display: inline-block !important;
									width: ~`convertPxToCm('120px')` !important;
									text-align: left !important;
								}
								p{
									flex: 1 !important;
									text-align: left !important;
									margin-top: 0 !important;
									font-size: ~`convertPxToCm('10px')` !important;;
									line-height:  ~`convertPxToCm('14px')` !important;
								}
							}
						}
					}
					#certify{
						display: none;
					}
					.print_img_container{
						display: block !important;
						padding-top: 0 ~`convertPxToCm('100px')` !important;
						.print_img_content{
							list-style: none!important;
							display: flex!important;
							flex-wrap: wrap!important;
							align-items: flex-start!important;
							justify-content: flex-start!important;
							padding: 0 ~`convertPxToCm('20px')` !important;
							.print_img_item{
								flex: 1!important;
								margin: ~`convertPxToCm('5px')` ~`convertPxToCm('10px')` !important;
								img{
									width:~`convertPxToCm('130px')` !important;
								}
							}
						}
					}
				}
			}
			.qr_content{
				margin-top:~`convertPxToCm('20px')` !important;
				.qr_content_wrap{
					margin-bottom: 0 !important;
				}
			}
		}
	}
	.about_container_content{
		width: 100%;
		.about_content_wrap{
			background: url("../assets/home/about.jpg") no-repeat center center;
			background-size: cover;
			height: 4.6rem;
			display: flex;
			align-items: center;
			justify-content: center;
			.about_content{
				text-align: center;
				h2{
					font-size: 0.6rem;
					line-height: 0.84rem;
					color: #fff;
					;
				}
				h5{
					margin-top: 0.2rem;
					font-size: 0.22rem;
					line-height: 0.3rem;
					;
					color: #fff;
				}
			}
		}
		.about_text_container{
			width: 100%;
			background: #FBFDFF;
			.about_text_content_wrap{
				max-width: 12rem;
				margin: 0 auto;
				box-sizing: border-box;
				padding: 0.4rem 0 0.54rem 0;
				color: #0C253A;
				p{
					font-size: 0.14rem;
					line-height: 0.34rem;
					margin-bottom: 0.14rem;
				}
				p:last-child{
					margin-bottom: 0;
				}
			}
		}
		.about_img_content{
			background: #fafafa;
			.about_img_content_wrap{
				max-width: 12rem;
				margin: 0 auto;
				text-align: center;
				.about_list_content{
					margin-bottom: 0.5rem;
					.about_list_content_container{
						list-style: none;
						display: flex;
						flex-wrap: wrap;
						.about_list_item{
							box-sizing: border-box;
							box-shadow:0 0.1rem 0.3rem 0 rgba(0,0,0,0.05);
							padding: 0.25rem 0.2rem 0.29rem 0.2rem;
							background: #fff;
							width: 2.8rem;
							height: 1.8rem;
							margin: 0 0.1rem 0.2rem 0.1rem ;
							text-align: left;
							p{
								margin-top: 0.2rem;
							}
						}
					}
				}
				#certify{
					position: relative;
					max-width: 900px;
					width: 100%;
					margin: 0 auto;
					padding-bottom: 0.6rem;
					.swiper-pagination{
						position: static;
						display: none;
					}
					.my-swipe{
						&:first-child {
                display: flex;
                align-items:center;
            }
						margin-left: auto;
						margin-right: auto;
						position: relative;
						overflow: hidden;
						list-style: none;
						padding: 0;
						z-index: 1;
						.swiper-slide{
							width:  auto !important;
							img{
							
							}
						}
						
					}
					.swiper-button-prev{
						margin-left:-120px;
						outline: none;
						width: 0.6rem;
						height: 0.6rem;
						background: url("../assets/home/prev.png");
						background-size: cover;
						-webkit-tap-highlight-color: rgba(255, 255, 255, 0) !important;
					}
					.swiper-button-next{
						margin-right:-120px;
						outline: none;
						width: 0.6rem;
						height: 0.6rem;
						background: url("../assets/home/next.png");
						background-size: cover;
						-webkit-tap-highlight-color: rgba(255, 255, 255, 0)!important;
					}
				}
				.print_img_container{
					display: none;
				}
				h5{
					padding-top: 0.8rem;
					margin: 0 0 0.4rem 0;
					font-size:0.18rem;
				}
				.about_img_top_content{
					list-style: none;
					display: flex;
					justify-content: space-between;
					.about_top_content{
						margin-right: 0.75rem;
						/*&:hover{
							transform: scale(2);
						}*/
					}
					.about_top_content:last-child{
						margin-right: 0;
					}
				}
				.about_img_bottom_content{
					list-style: none;
					display: flex;
					justify-content: space-between;
					margin: 0.4rem 0 0.8rem 0;
					.about_img_bottom{
						margin-right: 0.75rem;
					}
					.about_img_bottom:last-child{
						margin-right: 0;
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
		.about_container_content{
			.about_text_container{
				.about_text_content_wrap{
					margin: 0 0.2rem;
				}
			}
		}
	}
	@media screen  and (max-width: 768px){
		.about_container_content{
			.about_content_wrap{
				.about_content{
					h2{
						font-size: 0.42rem;
					}
					h5{
						font-size: 0.18rem;
						margin: 0.2rem 0.2rem 0 0.2rem;
					}
				}
			}
			.about_text_container{
				.about_text_content_wrap{
					margin: 0 0.2rem;
				}
			}
			.about_img_content{
				.about_img_content_wrap{
					.about_list_content{
						
						.about_list_content_container{
							display: initial;
							.about_list_item{
								width: auto;
								height: auto;
								box-shadow: none;
								background: none;
								display: flex;
								padding: 0.2rem 0.2rem 0 0.2rem;
								margin: 0;
								div{
									line-height: 0.28rem;
									display: inline-block;
									width: 1.2rem;
									text-align: left;
								}
								p{
									flex: 1;
									text-align: left;
									margin-top: 0;
								}
							}
						}
					}
					#certify{
						.swiper-pagination{
							display: block;
						}
                        .swiper-button-prev{
                            display: none;
                        }
                        .swiper-button-next{
                            display: none;
                        }
					}
				}
			}
		}
	}
	@media screen and (max-width: 375px){
		.about_container_content{
			.about_content_wrap{
				.about_content{
					text-align: center;
					h2{
						font-size: 0.32rem;
					}
					h5{
						text-align: center;
						margin: 0.2rem 0.6rem 0 0.6rem;
						font-size: 0.14rem;
						line-height:0.21rem;
					}
				}
			}
			.about_img_content{
				.about_img_content_wrap{
					#certify{
						.swiper-pagination{
							display: block;
							margin-top: 0.1rem;
						}
                        .swiper-button-prev{
                            display: none;
                        }
                        .swiper-button-next{
                            display: none;
                        }
						.swiper-container{
							.swiper-wrapper{
								.swiper-slide{
									div{
										height: 2.4rem !important;
									}
								}

							}
						}
					}
				}
			}
		}
	}

</style>
