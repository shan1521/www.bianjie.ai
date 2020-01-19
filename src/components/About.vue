<template>
	<div class="about_container_content">
		<div class="about_content_wrap">
			<div class="about_content">
				<h2>关于我们-边界智能</h2>
				<h5>专注于分布式智能处理和区块链技术开发的高科技公司</h5>
			</div>
		</div>
		<div class="about_text_container">
			<div class="about_text_content_wrap">
				<p>公司以人工智能，大数据分析和区块链跨链技术创新为核心，开发了分布式大数据分析交换网络（ BEAN ）、跨链服务联盟枢纽（ ISCH ）等核心产品，能高效支持搭建联盟链并支持跨异构区块链或链上链下的互操作。</p>
				<p>边界智能曾荣获第七届中国创新创业大赛成长组32强，中国 CDHIC 大赛天使之星冠军，2019中国区块链百强企业、2019中国优秀区块链解决方案等多个创新奖项。是国家高新技术企业，拥有企业发明专利2项，软件著作权14个，软件产品证书1个，商标5个。</p>
				<p>作为全球著名跨链项目 COSMOS 和 IRISnet 的核心开发者，边界智能也在持续推动区块链前沿技术在商业应用场景的落地和发展，为供应链金融、数据共享、互信协作、存证授权、资产证券化等领域提供联盟链底层技术服务。</p>
			</div>
		</div>
		<div class="about_img_content">
			<div class="about_img_content_wrap">
				<h5>荣誉资质</h5>
				<div id="certify" v-if="swiperArray.length !== 0">
					<swiper ref="mySwiper" :options="swiperOption" class="my-swipe">
						<swiper-slide style="width: 5.2rem;display: flex;justify-content:center;" v-for="item in swiperArray">
							<img  style="display:block;width: 5.2rem" :src="item.src" alt="">
						</swiper-slide>
					</swiper>
					<div class="swiper-button-prev"  @click="prev()"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
					<div class="swiper-button-next"  @click="next()"></div>
				</div>
			</div>
		</div>
		<div class="qr_content">
			<div class="qr_content_wrap">
				<h5>关注与联系</h5>
				<div class="qr_img_content">
					<img src="../assets/home/qr_bianjie.png" alt="">
				</div>
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
						src:require('../assets/home/swiper_1.png')
					},
					{
						src:require('../assets/home/swiper_2.jpg')
					},
					{
						src:require('../assets/home/swiper_3.jpg')
					},
					{
						src:require('../assets/home/swiper_4.jpg')
					},
					{
						src:require('../assets/home/swiper_5.png')
					},
					{
						src:require('../assets/home/swiper_6.png')
					},
					{
						src:require('../assets/home/swiper_7.png')
					},
					{
						src:require('../assets/home/swiper_8.png')
					},
					{
						src:require('../assets/home/swiper_9.png')
					},
					{
						src:require('../assets/home/swiper_10.png')
					},
					{
						src:require('../assets/home/swiper_11.png')
					},
				],
				swiperOption:{
					watchSlidesProgress: true,
					slidesPerView: 'auto',
					centeredSlides: true,
					loop: true,
					speed: 300,
					loopedSlides: 11,
					autoplay: true,
					/*autoplay: {
					delay: 0,
					stopOnLastSlide: false,
					disableOnInteraction: true,
					},*/
					grabCursor: true,
					pagination: {
						el: '.swiper-pagination',
						//clickable :true,
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					on:{
						progress: function(progress) {
							for (let i = 0; i < this.slides.length; i++) {
								var slide = this.slides.eq(i);
								var slideProgress = this.slides[i].progress;
								let modify = 1;
								if (Math.abs(slideProgress) > 1) {
									modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
								}
								let translate = slideProgress * modify * 260 + 'px';
								let scale = 1 - Math.abs(slideProgress) / 5;
								let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
								slide.transform('translateX(' + translate + ') scale(' + scale + ')');
								slide.css('zIndex', zIndex);
								slide.css('opacity', 1);
								if (Math.abs(slideProgress) > 3) {
									slide.css('opacity', 0);
								}
							}
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
	}
</script>

<style scoped lang="less">
	.about_container_content{
		width: 100%;
		.about_content_wrap{
			background: url("../assets/home/about.png") no-repeat center center;
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
					font-weight: lighter;
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
		.about_text_container{
			width: 100%;
			background: #FAFAFA;
			.about_text_content_wrap{
				max-width: 12rem;
				margin: 0 auto;
				box-sizing: border-box;
				padding: 0.4rem 0 0.54rem 0;
				color: #0C253A;
				p{
					font-size: 0.14rem;
					line-height: 0.21rem;
					margin-bottom: 0.14rem;
				}
				p:last-child{
					margin-bottom: 0;
				}
			}
		}
		.about_img_content{
			.about_img_content_wrap{
				max-width: 12rem;
				margin: 0 auto;
				text-align: center;
				#certify{
					position: relative;
					width: 1200px;
					margin: 0 auto;
					.my-swipe{
						margin-left: auto;
						margin-right: auto;
						position: relative;
						overflow: hidden;
						list-style: none;
						padding: 0;
						z-index: 1;
						.swiper-slide{
							img{
							
							}
						}
						
					}
				}
				
				h5{
					margin: 0.8rem 0 0.4rem 0;
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
				h5{
					text-align: center;
					margin-bottom: 0.2rem;
				}
				.qr_img_content{
					width: 1.38rem;
					margin: 0 auto;
					img{
						width: 100%;
						margin-bottom: 0.8rem;
					}
				}
			}
		}
	}
	
	
	
	
	
	
	/*@charset "utf-8";
	!* CSS Document *!
	body{
		margin:0;}
	#certify {
		position: relative;
		width: 1200px;
		margin: 0 auto
	}
	
	#certify .swiper-container {
		padding-bottom: 60px;
	}
	
	#certify  .swiper-slide {
		width: 520px;
		height: 408px;
		background: #fff;
		box-shadow: 0 8px 30px #ddd;
	}
	#certify  .swiper-slide img{
		display:block;
	}
	#certify  .swiper-slide p {
		line-height: 98px;
		padding-top: 0;
		text-align: center;
		color: #636363;
		font-size: 1.1em;
		margin: 0;
	}
	
	#certify .swiper-pagination {
		width: 100%;
		bottom: 20px;
	}
	
	#certify .swiper-pagination-bullets .swiper-pagination-bullet {
		margin: 0 5px;
		border: 3px solid #fff;
		background-color: #d5d5d5;
		width: 10px;
		height: 10px;
		opacity: 1;
	}
	
	#certify .swiper-pagination-bullets .swiper-pagination-bullet-active {
		border: 3px solid #00aadc;
		background-color: #fff;
	}
	
	#certify .swiper-button-prev {
		left: -30px;
		width: 45px;
		height: 45px;
		background: url(../images/wm_button_icon.png) no-repeat;
		background-position: 0 0;
		background-size: 100%;
	}
	
	#certify .swiper-button-prev:hover {
		background-position: 0 -46px;
		background-size: 100%
	}
	
	#certify .swiper-button-next {
		right: -30px;
		width: 45px;
		height: 45px;
		background: url(../images/wm_button_icon.png) no-repeat;
		background-position: 0 -93px;
		background-size: 100%;
	}
	
	#certify .swiper-button-next:hover {
		background-position: 0 -139px;
		background-size: 100%
	}*/
	
	
	
	
	
	
	
	
	
</style>
