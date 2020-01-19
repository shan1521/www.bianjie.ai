<template>
	<div class="header_container_content" :class="flShowBoxShadow ? 'change_header_bg_color' :''">
		<div class="header_content_wrap">
			<div class="header_logo_content">
				<img src="../assets/home/bianjie_logo.png" alt="">
			</div>
			<div class="header_content_menu">
				<ul class="header_menu_list">
					<li class="header_menu_list_item" :class="item.isActive ? 'active_color' : ''"
					    v-for="(item,index) in navigationList"
					    @click="changeNavigation(index)" @mouseenter="showSecondMenu(index)" @mouseleave="hideSecondMenu(index)">
						<router-link :to="item.href" v-if="item.href">{{item.label}}</router-link>
						<span v-if="!item.href">{{item.label}}</span>
						<div :class="item.isActive ? 'active_block' : ''"></div>
						<div class="second_menu" v-if="index == 1">
							<ul class="second_production_menu" v-if="flShowProductionSecondMenu" @mouseleave="hideSecondMenu()">
								<li><router-link :to="`/products/bean`">BEAN</router-link></li>
								<li><router-link :to="`/products/irita`">IRITA</router-link></li>
								<li><router-link :to="`/products/isch`">ISCH</router-link></li>
								<li><router-link :to="`/products/irisnet`">IRISnet</router-link></li>
							</ul>
							
						</div>
						<div class="second_menu" v-if="index == 2">
							<ul class="second_application_menu" v-if="flShowApplicationSecondMenu" @mouseleave="hideSecondMenu()">
								<li><router-link :to="`/application/digital-asset`">数字资产</router-link></li>
								<li><router-link :to="`/application/finance`">金融创新</router-link></li>
								<li><router-link :to="`/application/cooperation`">行业协同</router-link></li>
								<li><router-link :to="`/application/multi-trust`">多方互信</router-link></li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
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
						label:'产品服务',
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
				
			}
		},
		mounted(){
			if(sessionStorage.getItem('routerIndex')){
				this.changeNavigation(sessionStorage.getItem('routerIndex'))
			}
			if(window.scrollY > 5){
				this.flShowBoxShadow = true;
			}else {
				this.flShowBoxShadow = false;
			}
			window.addEventListener('scroll',this.handleScroll,true)
		},
		methods:{
			changeNavigation(index){
				sessionStorage.setItem('routerIndex',index)
				if(index == 1 || index == 2){
					return
				}
				this.navigationList.forEach(item => {
					item.isActive = false
				})
				this.navigationList[index].isActive = true
			},
			handleScroll(e){
				if(e.target.scrollingElement.scrollTop > 5){
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
.change_header_bg_color{
	background: #002C78;
}
.header_container_content{
	position: fixed;
	width: 100%;
	z-index: 10;
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
			.header_menu_list{
				display: flex;
				list-style: none;
				.header_menu_list_item{
					height: 0.77rem;
					padding: 0 0.15rem;
					font-size: 0.16rem;
					line-height: 0.77rem;
					position: relative;
					a{
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
					
				}
				.active_color{
					a{
						color: rgba(255,255,255,1);
					}
				}
			}
		}
	}
}
</style>
