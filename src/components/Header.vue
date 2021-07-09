<template>
	<div class="header_container_content" :class="flShowBoxShadow ? 'change_header_bg_color' :''">
		<div class="header_content_wrap">
			<div class="header_logo_content">
				<router-link :to="`/home`">
					<img src="../assets/home/bianjie_logo.png" alt="边界智能">
				</router-link>
			</div>
			<div class="header_content_menu">
				<ul class="header_menu_list">
					<li class="header_menu_list_item" :class="item.isActive ? 'active_color' : ''"
					    v-for="(item,index) in navigationList" :key="index"
					    @click="changeNavigation(index)" @mouseenter="showSecondMenu(index)" @mouseleave="hideSecondMenu(index)">
						<router-link class="header_menu_list_item_link" :to="item.href" v-if="item.href">{{item.label}}</router-link>
						<span v-if="!item.href">{{item.label}}</span>
						<div :class="item.isActive ? 'active_block' : ''"></div>
						<div class="second_menu_first" v-if="index == 1">
							<ul class="second_production_menu" @click="updatenavigationIndex(index)" v-if="flShowProductionSecondMenu"  @mouseleave="hideSecondMenu()">
								<li><router-link :to="`/products/irita`">IRITA</router-link></li>
								<li><router-link :to="`/products/iritahub`">IRITA HUB</router-link></li>
							</ul>
						</div>
						<div class="second_menu" v-if="index == 2">
							<ul class="second_application_menu" @click="updatenavigationIndex(index)" v-if="flShowApplicationSecondMenu" @mouseleave="hideSecondMenu()">
								<li><router-link :to="`/application/digital-asset`">数字资产</router-link></li>
								<li><router-link :to="`/application/finance`">金融创新</router-link></li>
								<li><router-link :to="`/application/cooperation`">行业协同</router-link></li>
								<li><router-link :to="`/application/multi-trust`">多方互信</router-link></li>
							</ul>
						</div>
					</li>
				</ul>
                <div class="print_content">
                    <div class="about_me_content">关注我们
                        <div class="qr_content">
                            <img src="../assets/home/qr_bianjie.png" alt="关注公众号">
                        </div>
                    </div>
<!--                    <span @click="openPrint()">打印 <img style="width: 0.14rem" src="../assets/home/print_icon.png"></span>-->
	                <router-link class="download_style" :to="`/download`" target="_blank">了解更多 <img style="width: 0.14rem" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAAE6DSy/AAAAAXNSR0IArs4c6QAAAppJREFUSA3Nls9OFEEQxhniAUyUk5HwLxsIQQ8+ga/hCS8kXDh59yE86wvwFJwJQY9Gg4hOMBD2bOKfkJjx93W6hp6Z7t7ZsJtQybdVXfVVVW9PT0/PzHipquq92U7jqGTMNrwaWKQTyDuUJsmzLNpm1tNoB9pjK9CZZgHzAdGfNWOUQcJCyKnnEDhfBHZkrcIotqtA2SVwZjHsZXBqY6dxDMAn8BqcN4I2ILAFrmxsmccNRzCAXGkdcg/hY8CPmyqA7MajsS2TYib8jYWm0wkoE1znJr4G6r91LyQXRfGE2KonfNHY4vgWsbWCJf7C/ElNwoYKBXIRJUN4A3aiwRFO8obavz+cMYLcDpMzB+q1aMfdmPgCaL7yUWbCSfIuyHZpPMZEnaz7jhXQ/0XWcnMmXoIT4zR2Is6v4BzCCpvt0kim8etUGIBl83U0pO9Asgjqp4Ct90Sy2klqOyBpFhIdLxIdNZJBm5scQ75wKTc/G0lyKkDulc/fSnF0ZA1ZML2qYwl5OyQ863wM+lahwLFmZ4fmPLP42zdZPHKHqGvtA52sf3CgxpaHY2eECTTdBibbYayvfduXcT5oFNqBO2/edgL56j2id3cCPFhdBF6BRz3+SJaiGr5W8oXsFCDhAJh8w+gcQvjcYeVJneuDcoByTQ46jXIOsnSROrNs9ClYshzs6ATE8VyUE9VIH8FWMKVJ1nWkBCafMR6DxgS8TzGTEiP7gUn1jPoptg50jzC5NgMd2uKsR4tMwknxTXAJ2iLf5iR69KpBs6dAX1BttPoi2CvZSCT+A5Ij801bq5frSG8dRHYYmZ52f9W3XrP6HL7Fsee7HqL3wW8/nrS6T8GX4Lkv/M5pJqGbri4wH8AvMC1RbfVQrzk1/w+3hwDCgwtkXQAAAABJRU5ErkJggg=="></router-link>
                </div>
				<div class="mobile_menu_content" @click="showMobileMenu()">
					<img src="../assets/home/mobile_menu.png" alt="">
				</div>
			</div>
		</div>
		<div class="header_mobile_content" v-if="flShowMobileMenu">
			<ul class="header_mobile_list_content">
				<li class="header_mobile_list_button" @click="changeRouter(`/home`)"><router-link :to="`/home`">首页</router-link></li>
				<li @click="showMobileProductionSecondMenu()">IRITA 产品线
					<ul v-if="flShowMobileProductionSecondMenu" style="background: rgba(0,0,0,0.15);padding: 0.05rem 0;margin-top: 0.05rem;">
						<li class="header_mobile_list_button" @click="changeRouter(`/products/irita`)"><router-link :to="`/products/irita`">IRITA</router-link></li>
						<li class="header_mobile_list_button" @click="changeRouter(`/products/iritahub`)"><router-link :to="`/products/iritahub`">IRITA HUB</router-link></li>
					</ul>
				</li>
				<li @click="showApplicationSecondMenu()">应用场景
					<ul v-if="flShowMobileApplicationSecondMenu" style="background: rgba(0,0,0,0.15);padding: 0.05rem 0;margin-top: 0.05rem;">
						<li class="header_mobile_list_button" @click="changeRouter(`/application/digital-asset`)"><router-link :to="`/application/digital-asset`">数字资产</router-link></li>
						<li class="header_mobile_list_button" @click="changeRouter(`/application/finance`)"><router-link :to="`/application/finance`">金融创新</router-link></li>
						<li class="header_mobile_list_button" @click="changeRouter(`/application/cooperation`)"><router-link :to="`/application/cooperation`">行业协同</router-link></li>
						<li class="header_mobile_list_button" @click="changeRouter(`/application/multi-trust`)"><router-link :to="`/application/multi-trust`">多方互信</router-link></li>
					</ul>
				</li>
				<li class="header_mobile_list_button" @click="changeRouter(`/partners`)"><router-link :to="`/partners`">合作伙伴</router-link></li>
				<li class="header_mobile_list_button" @click="changeRouter(`/news`)"><router-link :to="`/news`">动态资讯</router-link></li>
				<li class="header_mobile_list_button" @click="changeRouter(`/about`)"><router-link :to="`/about`">关于我们</router-link></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Header",
		data() {
			return {
				navigationList:[
					{
						isActive: true,
						label:'首页',
						href:`/home`
					},
					{
						isActive: false,
						label:'IRITA 产品线',
						href:''
					},
					{
						isActive: false,
						label:'应用场景',
						href:''
					},
					{
						isActive: false,
						label:'合作伙伴',
						href:`/partners`
					},
					{
						isActive: false,
						label:'动态资讯',
						href:`/news`
					},
					{
						isActive: false,
						label:'关于我们',
						href:`/about`
					},
				],
				flShowBoxShadow:false,
				flShowProductionSecondMenu:false,
				flShowApplicationSecondMenu:false,
				flShowMobileMenu:false,
				flShowMobileProductionSecondMenu: false,
				flShowMobileApplicationSecondMenu:false,
				
			}
		},
		watch:{
			$route(){
				this.setHeaderActiveOption()
				this.flShowMobileMenu = false;
				
			}
		},
		mounted(){
			this.setHeaderActiveOption()
			if(sessionStorage.getItem('routerIndex')){
				this.changeNavigation(sessionStorage.getItem('routerIndex'), true)
			}
			this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			if(this.scrollTop > 5){
				this.flShowBoxShadow = true;
			}else {
				this.flShowBoxShadow = false;
			}
			window.addEventListener('scroll',this.handleScroll,true)
		},
		methods:{
			setHeaderActiveOption(){
				let isActiveIndex = null
				if(this.$route.path.indexOf('products') !== -1){
					if(this.$route.path.indexOf('products/irisnet') !==-1){
						isActiveIndex = null
					}else {
						isActiveIndex = 1
					}
					
				}else if(this.$route.path.indexOf('application') !== -1){
					isActiveIndex = 2
				}else if(this.$route.path.indexOf('home') !== -1){
					isActiveIndex = 0
				}else if(this.$route.path.indexOf('partners') !== -1){
					isActiveIndex = 3
				}else if(this.$route.path.indexOf('news') !== -1){
					isActiveIndex = 4
				}else if(this.$route.path.indexOf('about') !== -1){
					isActiveIndex = 5
				}
				this.navigationList.forEach( item => {
					item.isActive = false
				})
				isActiveIndex ? this.navigationList[isActiveIndex].isActive = true : null
			},
            openPrint(){
                window.print()
            },
			changeRouter(router){
            	if(router === this.$route.path){
		            this.flShowMobileMenu = false
	            }
			},
			showMobileMenu(){
				this.flShowMobileMenu = !this.flShowMobileMenu;
			},
			showMobileProductionSecondMenu(){
				this.flShowMobileProductionSecondMenu = !this.flShowMobileProductionSecondMenu;
				this.flShowMobileApplicationSecondMenu = false;
			},
			showApplicationSecondMenu(){
				this.flShowMobileApplicationSecondMenu = !this.flShowMobileApplicationSecondMenu;
				this.flShowMobileProductionSecondMenu = false;
			},
			changeNavigation(index, mounted){
				sessionStorage.setItem('routerIndex',index)
				if(index == 1 || index == 2){
					if (mounted) {
						this.updatenavigationIndex(index);
					}else{
						this.showSecondMenu(index);
					}
					return;
				}else{
					this.updatenavigationIndex(index);
				}
			},
			updatenavigationIndex(index){
				this.navigationList.forEach(item => {
					item.isActive = false;
				});
				this.navigationList[index].isActive = true;
			},
			handleScroll(e){
				this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

				if(this.scrollTop > 5){
					this.flShowBoxShadow = true;
				}else {
					this.flShowBoxShadow = false;
				}
			},
			showSecondMenu(index){
				if(index == 1){
					this.flShowProductionSecondMenu = true;
					this.flShowApplicationSecondMenu = false
				}else if(index == 2){
					this.flShowApplicationSecondMenu = true;
					this.flShowProductionSecondMenu = false
				}else {
					this.flShowApplicationSecondMenu = false;
					this.flShowProductionSecondMenu = false
				}
			},
			hideSecondMenu(index){
				this.flShowApplicationSecondMenu = false;
				this.flShowProductionSecondMenu = false
			}
		}
	}
</script>

<style scoped lang="less">
    @media print {
        .header_container_content{
            display: none;
        }
    }
.change_header_bg_color{
	background: #002C78;
}
.header_container_content{
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 999;
	.header_content_wrap{
		max-width: 12rem;
		margin: 0 auto;
		display: flex;
		align-items: center;
		.header_logo_content{
			padding: 0.25rem 0 0.22rem 0;
			margin-right: 1.15rem;
			img{
				height: 0.3rem;
			}
		}
		.header_content_menu{
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .print_content{
                display: flex;
                color: #fff;
                margin-right: 0.2rem;
	            .download_style{
		            color: #fff;
	            }
                .about_me_content{
                    margin-right: 0.4rem;
                    position: relative;
                    .qr_content{
                        position: absolute;
                        top: 0.3rem;
                        right: -0.35rem;
                        display: none;
                        img{
                            width: 1.3rem;
                            height: 1.3rem;
                            border-radius: 0.04rem;
                        }
                    }
                    &:hover{
                        .qr_content{
                            display: block;
                        }
                    }
                }
				span{
					cursor: pointer;
				}
            }
			.mobile_menu_content{
				display: none;
			}
			.header_menu_list{
				display: flex;
				list-style: none;
				.header_menu_list_item{
					height: 0.77rem;
					padding: 0 0.15rem;
					font-size: 0.16rem;
					line-height: 0.77rem;
					position: relative;
					cursor: pointer;
					// .header_menu_list_item_link{
					// 	display:block;
					// 	height:100%;
					// 	width:100%;
					// }
					a{
						display:block;
						height:100%;
						width:100%;
						color: rgba(255,255,255,0.5);
						&:hover{
							color: rgba(255,255,255,1);
						}
					}
					span{
						color: rgba(255,255,255,0.5);
						&:hover{
							color: rgba(255,255,255,1);
						}
					}
					.active_block{
						height: 0.02rem;
						background: #fff;
					}
					
					.second_menu{
						position: absolute;
						background: #fff;
						width: 100%;
						left: 0;
						border-radius: 0.02rem;
						overflow: hidden;
						.second_production_menu{
							list-style: none;
							li{
								height: 0.36rem;
								line-height: 0.36rem;
								text-align: center;
								&:hover{
									background: #EAF2FF;
								}
								a{
									font-size: 0.14rem;
									color: #0C253A;
									&:hover{
										color: #0054E3;
									}
								}
							}
						
						}
						.second_application_menu{
							list-style: none;
							li{
								height: 0.36rem;
								line-height: 0.36rem;
								text-align: center;
								&:hover{
									background: #EAF2FF;
								}
								a{
									font-size: 0.14rem;
									color: #0C253A;
									&:hover{
										color: #0054E3;
									}
								}
							}
						}
					}
					.second_menu_first{
						position: absolute;
						left: 50%;
						transform: translateX(-50%);
						background: #fff;
						width: 100%;
						border-radius: 0.02rem;
						overflow: hidden;
						min-width: 1.5rem;
						.second_production_menu{
							list-style: none;
							li{
								height: 0.36rem;
								line-height: 0.36rem;
								text-align: center;
								&:hover{
									background: #EAF2FF;
								}
								a{
									font-size: 0.14rem;
									color: #0C253A;
									&:hover{
										color: #0054E3;
									}
								}
							}
							
						}
						.second_application_menu{
							list-style: none;
							li{
								height: 0.36rem;
								line-height: 0.36rem;
								text-align: center;
								&:hover{
									background: #EAF2FF;
								}
								a{
									font-size: 0.14rem;
									color: #0C253A;
									&:hover{
										color: #0054E3;
									}
								}
							}
						}
					}
				}
				.active_color{
					a{
						color: rgba(255,255,255,1);
					}
				}
			}
		}
	}
	.header_mobile_content{
		display: none;
		outline-color: transparent;
	}
}
    @media screen and (max-width: 975px){
       .header_container_content{
           .header_content_wrap{
               .header_content_menu{
                   .print_content{
                       display: none;
                   }
               }
           }
       }
    }
	@media screen and (max-width: 768px) {
		.header_container_content{
			background: #002C78;
			.header_content_wrap{
				display: flex;
				justify-content: space-between;
				box-sizing: border-box;
				padding: 0 0.2rem;
				.header_content_menu{
                    justify-content: flex-end;
					.header_menu_list{
						display: none;
					}
					.mobile_menu_content{
						width: 0.3rem;
						height:0.3rem;
						display: flex;
						justify-content: center;
						align-items: center;
						img{
							width: 100%;
						}
					}
				}
			}
			.header_mobile_content{
				display: block;
				.header_mobile_list_content{
					cursor: pointer;
					list-style: none;
					box-sizing: border-box;
					text-align: center;
					/*  .header_mobile_list_button{
						position: relative;
						//隐藏溢出的径向渐变背景
						overflow: hidden;
					}
					.header_mobile_list_button:after{
						content: "";
						display: block;
						position: absolute;
						width: 100%;
						height: 100%;
						top: 0;
						left: 0;
						pointer-events: none;
						//设置径向渐变
						background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
						background-repeat: no-repeat;
						background-position: 50%;
						transform: scale(10, 10);
						opacity: 0;
						transition: transform .3s, opacity .4s;
						
					}
					.header_mobile_list_button:active:after {
						transform: scale(0, 0);
						opacity: .3;
						//设置初始状态
						transition: 0s;
					}*/
					li{
						margin: 0.05rem 0;
						color: #fff;
						a{
							color: #fff;
						}
					}
				}
			}
		}
	}
</style>
