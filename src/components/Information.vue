<template>
	<div class="information_container_content">
		<div class="information_content_wrap">
			<div class="information_content">
				<h2>动态资讯</h2>
				<h5></h5>
			</div>
		</div>
		<div class="news_content">
			<div class="news_wrap">
				<div class="news_list_item_content">
					<div class="news_item_content">
						<div class="month_day_content">
							<div class="date_day_content">{{$store.state.messages.dynamic.txt[0].month}}</div>
							<div class="date_month_content">{{$store.state.messages.dynamic.txt[0].day}}</div>
						</div>
						<div class="year_content">{{$store.state.messages.dynamic.txt[0].year}}</div>
					</div>
					<div class="news_content">
						<a :href="$store.state.messages.dynamic.txt[0].href" target="_blank">
							<h4 class="news_title">{{$store.state.messages.dynamic.txt[0].title}}</h4>
						</a>
						<div class="news_content_text">{{$store.state.messages.dynamic.txt[0].txt}}</div>
					</div>
				</div>
				<div class="news_list_item_content right_content">
					<div class="news_item_content">
						<div class="month_day_content">
							<div class="date_day_content">{{$store.state.messages.dynamic.txt[1].month}}</div>
							<div class="date_month_content">{{$store.state.messages.dynamic.txt[1].day}}</div>
						</div>
						<div class="year_content">{{$store.state.messages.dynamic.txt[1].year}}</div>
					</div>
					<div class="news_content">
						<a :href="$store.state.messages.dynamic.txt[1].href" target="_blank">
							<h4 class="news_title">{{$store.state.messages.dynamic.txt[1].title}}</h4>
						</a>
						<div class="news_content_text">{{$store.state.messages.dynamic.txt[1].txt}}</div>
					</div>
				</div>
			</div>
			<div class="news_wrap">
				<div class="news_list_item_content">
					<div class="news_item_content">
						<div class="month_day_content">
							<div class="date_day_content">{{$store.state.messages.dynamic.txt[2].month}}</div>
							<div class="date_month_content">{{$store.state.messages.dynamic.txt[2].day}}</div>
						</div>
						<div class="year_content">{{$store.state.messages.dynamic.txt[2].year}}</div>
					</div>
					<div class="news_content">
						<a :href="$store.state.messages.dynamic.txt[2].href" target="_blank">
							<h4 class="news_title">{{$store.state.messages.dynamic.txt[2].title}}</h4>
						</a>
						<div class="news_content_text">{{$store.state.messages.dynamic.txt[2].txt}}</div>
					</div>
				</div>
				<div class="news_list_item_content right_content">
					<div class="news_item_content">
						<div class="month_day_content">
							<div class="date_day_content">{{$store.state.messages.dynamic.txt[3].month}}</div>
							<div class="date_month_content">{{$store.state.messages.dynamic.txt[3].day}}</div>
						</div>
						<div class="year_content">{{$store.state.messages.dynamic.txt[3].year}}</div>
					</div>
					<div class="news_content">
						<a :href="$store.state.messages.dynamic.txt[3].href" target="_blank">
							<h4 class="news_title">{{$store.state.messages.dynamic.txt[3].title}}</h4>
						</a>
						<div class="news_content_text">{{$store.state.messages.dynamic.txt[3].txt}}</div>
					</div>
				</div>
			</div>
			<div class="news_bg_wrap">
				<div class="news_bg_list_item_content">
					<div class="news_bg_item_content">
						<div class="month_bg_day_content">
							<div class="date_bg_day_content">{{$store.state.messages.dynamic.txt[4].month}}</div>
							<div class="date_bg_month_content">{{$store.state.messages.dynamic.txt[4].day}}</div>
						</div>
						<div class="year_bg_content">{{$store.state.messages.dynamic.txt[4].year}}</div>
					</div>
					<div class="bg_news_content">
						<a :href="$store.state.messages.dynamic.txt[4].href" target="_blank">
							<h4 class="news_bg_title">{{$store.state.messages.dynamic.txt[4].title}}</h4>
						</a>
						<div class="news_bg_content_text">{{$store.state.messages.dynamic.txt[4].txt}}</div>
					</div>
				</div>
				<div class="news_bg_list_item_content right_content">
					<div class="news_bg_item_content">
						<div class="month_bg_day_content">
							<div class="date_bg_day_content">{{$store.state.messages.dynamic.txt[5].month}}</div>
							<div class="date_bg_month_content">{{$store.state.messages.dynamic.txt[5].day}}</div>
						</div>
						<div class="year_bg_content">{{$store.state.messages.dynamic.txt[5].year}}</div>
					</div>
					<div class="bg_news_content">
						<a :href="$store.state.messages.dynamic.txt[5].href" target="_blank">
							<h4 class="news_bg_title">{{$store.state.messages.dynamic.txt[5].title}}</h4>
						</a>
						<div class="news_bg_content_text">{{$store.state.messages.dynamic.txt[5].txt}}</div>
					</div>
				</div>
			</div>
			<div class="news_bg_wrap">
				<div class="news_bg_list_item_content">
					<div class="news_bg_item_content">
						<div class="month_bg_day_content">
							<div class="date_bg_day_content">{{$store.state.messages.dynamic.txt[6].month}}</div>
							<div class="date_bg_month_content">{{$store.state.messages.dynamic.txt[6].day}}</div>
						</div>
						<div class="year_bg_content">{{$store.state.messages.dynamic.txt[6].year}}</div>
					</div>
					<div class="bg_news_content">
						<a :href="$store.state.messages.dynamic.txt[6].href" target="_blank">
							<h4 class="news_bg_title">{{$store.state.messages.dynamic.txt[6].title}}</h4>
						</a>
						<div class="news_bg_content_text">{{$store.state.messages.dynamic.txt[6].txt}}</div>
					</div>
				</div>
				<div class="news_bg_list_item_content right_content">
					<div class="news_bg_item_content">
						<div class="month_bg_day_content">
							<div class="date_bg_day_content">{{$store.state.messages.dynamic.txt[7].month}}</div>
							<div class="date_bg_month_content">{{$store.state.messages.dynamic.txt[7].day}}</div>
						</div>
						<div class="year_bg_content">{{$store.state.messages.dynamic.txt[7].year}}</div>
					</div>
					<div class="bg_news_content">
						<a :href="$store.state.messages.dynamic.txt[7].href" target="_blank">
							<h4 class="news_bg_title">{{$store.state.messages.dynamic.txt[7].title}}</h4>
						</a>
						<div class="news_bg_content_text">{{$store.state.messages.dynamic.txt[7].txt}}</div>
					</div>
				</div>
			</div>
			<div class="news_bg_wrap">
				<div class="news_bg_list_item_content">
					<div class="news_bg_item_content">
						<div class="month_bg_day_content">
							<div class="date_bg_day_content">{{$store.state.messages.dynamic.txt[8].month}}</div>
							<div class="date_bg_month_content">{{$store.state.messages.dynamic.txt[8].day}}</div>
						</div>
						<div class="year_bg_content">{{$store.state.messages.dynamic.txt[8].year}}</div>
					</div>
					<div class="bg_news_content">
						<a :href="$store.state.messages.dynamic.txt[8].href" target="_blank">
							<h4 class="news_bg_title">{{$store.state.messages.dynamic.txt[8].title}}</h4>
						</a>
						<div class="news_bg_content_text">{{$store.state.messages.dynamic.txt[8].txt}}</div>
					</div>
				</div>
				<div class="news_bg_list_item_content right_content">
					<div class="news_bg_item_content">
						<div class="month_bg_day_content">
							<div class="date_bg_day_content">{{$store.state.messages.dynamic.txt[9].month}}</div>
							<div class="date_bg_month_content">{{$store.state.messages.dynamic.txt[9].day}}</div>
						</div>
						<div class="year_bg_content">{{$store.state.messages.dynamic.txt[9].year}}</div>
					</div>
					<div class="bg_news_content">
						<a :href="$store.state.messages.dynamic.txt[9].href" target="_blank">
							<h4 class="news_bg_title">{{$store.state.messages.dynamic.txt[9].title}}</h4>
						</a>
						<div class="news_bg_content_text">{{$store.state.messages.dynamic.txt[9].txt}}</div>
					</div>
				</div>
			</div>
			<div class="news_bg_wrap">
				<div class="news_bg_list_item_content">
					<div class="news_bg_item_content">
						<div class="month_bg_day_content">
							<div class="date_bg_day_content">{{$store.state.messages.dynamic.txt[10].month}}</div>
							<div class="date_bg_month_content">{{$store.state.messages.dynamic.txt[10].day}}</div>
						</div>
						<div class="year_bg_content">{{$store.state.messages.dynamic.txt[10].year}}</div>
					</div>
					<div class="bg_news_content">
						<a :href="$store.state.messages.dynamic.txt[10].href" target="_blank">
							<h4 class="news_bg_title">{{$store.state.messages.dynamic.txt[10].title}}</h4>
						</a>
						<div class="news_bg_content_text">{{$store.state.messages.dynamic.txt[10].txt}}</div>
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
		name: "Information"
	}
</script>

<style scoped lang="less">
	@import "../style/convert";
	@media print {
		.information_container_content{
			.information_content_wrap{
				-webkit-print-color-adjust: exact;
			}
			.news_content{
				.news_wrap{
					.news_list_item_content{
						margin-left: ~`convertPxToCm('12px')` !important;
						.news_item_content{
							margin-right: ~`convertPxToCm('12px')` !important;
							.month_day_content{
								width: ~`convertPxToCm('34px')` !important;
								-webkit-print-color-adjust: exact;
								.date_day_content{
									font-size:~`convertPxToCm('7px')` !important;
								}
								.date_month_content{
									font-size:~`convertPxToCm('10px')` !important;
								}
							}
							.year_content{
								-webkit-print-color-adjust: exact;
								width: ~`convertPxToCm('35px')` !important;
								height: ~`convertPxToCm('35px')` !important;
								line-height: ~`convertPxToCm('35px')` !important;;
								margin-top: ~`convertPxToCm('3px')` !important;
								font-size:~`convertPxToCm('7px')` !important;
							}
						}
						.news_content{
							a{
								.news_title{
									font-size: ~`convertPxToCm('7px')` !important;
								}
							}
							.news_content_text{
								margin-top: ~`convertPxToCm('7px')` !important;
								font-size: ~`convertPxToCm('6px')` !important;
								line-height: ~`convertPxToCm('15px')` !important;
							}
						}
					}
					.right_content{
						margin-left: ~`convertPxToCm('12px')` !important;
						.news_item_content{
							margin-right: ~`convertPxToCm('12px')` !important;
							.month_day_content{
								-webkit-print-color-adjust: exact;
								width: ~`convertPxToCm('35px')` !important;
								.date_day_content{
									font-size:~`convertPxToCm('7px')` !important;
								}
								.date_month_content{
									font-size:~`convertPxToCm('10px')` !important;
								}
							}
							.year_content{
								-webkit-print-color-adjust: exact;
								width: ~`convertPxToCm('35px')` !important;
								height: ~`convertPxToCm('35px')` !important;
								line-height: ~`convertPxToCm('35px')` !important;;
								margin-top: ~`convertPxToCm('3px')` !important;
								font-size:~`convertPxToCm('7px')` !important;
							}
						}
						.news_content{
							a{
								.news_title{
									font-size: ~`convertPxToCm('7px')` !important;
								}
							}
							.news_content_text{
								margin-top: ~`convertPxToCm('7px')` !important;
								font-size: ~`convertPxToCm('6px')` !important;
								line-height: ~`convertPxToCm('15px')` !important;
							}
						}
					}
				}
				.news_bg_wrap{
					.news_bg_list_item_content{
						margin-left: ~`convertPxToCm('12px')` !important;
						.news_bg_item_content{
							margin-right: ~`convertPxToCm('12px')` !important;
							.month_bg_day_content{
								width: ~`convertPxToCm('34px')` !important;
								-webkit-print-color-adjust: exact;
								.date_bg_day_content{
									font-size:~`convertPxToCm('7px')` !important;
								}
								.date_bg_month_content{
									font-size:~`convertPxToCm('10px')` !important;
								}
							}
							.year_bg_content{
								-webkit-print-color-adjust: exact;
								width: ~`convertPxToCm('35px')` !important;
								height: ~`convertPxToCm('35px')` !important;
								line-height: ~`convertPxToCm('35px')` !important;;
								margin-top: ~`convertPxToCm('3px')` !important;
								font-size:~`convertPxToCm('7px')` !important;
							}
						}
						.bg_news_content{
							a{
								.news_bg_title{
									font-size: ~`convertPxToCm('7px')` !important;
								}
							}
							.news_bg_content_text{
								margin-top: ~`convertPxToCm('7px')` !important;
								font-size: ~`convertPxToCm('6px')` !important;
								line-height: ~`convertPxToCm('15px')` !important;
							}
						}
					}
					.right_content{
						margin-left: ~`convertPxToCm('12px')` !important;
						.news_bg_item_content{
							margin-right: ~`convertPxToCm('12px')` !important;
							.month_bg_day_content{
								width: ~`convertPxToCm('35px')` !important;
								.date_bg_day_content{
									font-size:~`convertPxToCm('7px')` !important;
								}
								.date_bg_month_content{
									font-size:~`convertPxToCm('10px')` !important;
								}
							}
							.year_bg_content{
								-webkit-print-color-adjust: exact;
								width: ~`convertPxToCm('35px')` !important;
								height: ~`convertPxToCm('35px')` !important;
								line-height: ~`convertPxToCm('35px')` !important;;
								margin-top: ~`convertPxToCm('3px')` !important;
								font-size:~`convertPxToCm('7px')` !important;
							}
						}
					}
				}
			}
			.qr_content{
				padding-top: ~`convertPxToCm('100px')` !important;
			}
		}
	}
	.information_container_content{
		width: 100%;
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
		.information_content_wrap{
			background: url("../assets/home/information.svg") no-repeat center center;
			background-size: cover;
			height: 4.6rem;
			display: flex;
			align-items: center;
			justify-content: center;
			.information_content{
				text-align: center;
				h2{
					font-size: 0.6rem;
					line-height: 0.84rem;
					color: #fff;
					font-weight: lighter;
				}
			}
		}
		.news_content{
			.news_wrap{
				max-width: 12rem;
				margin: 0 auto;
				display: flex;
				.news_list_item_content{
					flex: 1;
					margin: 0.4rem 0 0  0.5rem;
					display: flex;
					overflow: hidden;
					.news_item_content{
						margin-right: 0.5rem;
						.month_day_content{
							width: 0.62rem;
							text-align: center;
							background: url("../assets/Group.png") no-repeat center center;
							background-size: cover;
							color: #fff;
							.date_day_content{
								font-size: 0.15rem;
								padding-top: 0.08rem;
							}
							.date_month_content{
								font-size: 0.24rem;
							}
						}
						.year_content{
							width: 0.62rem;
							height: 0.6rem;
							text-align: center;
							line-height: 0.6rem;
							font-size: 0.15rem;
							background: #0b243e;
							color: #fff;
							margin-top: 0.01rem;
						}
					}
					.news_content{
						flex: 1;
						overflow: hidden;
						.news_title{
							color: #0054E3;
							font-weight: 700;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
						.news_content_text{
							margin-top: 24px;
							text-indent: 30px;
							font-size: 14px;
							color: #696e75;
							line-height: 28px;
							text-align: justify;
							overflow: hidden;
						}
						.view_more_btn{
							font-size: 14px;
							color: #0054E3;
							line-height: 28px;
							margin-top: 14px;
							cursor: pointer;
							display: block;
						}
					}
					
				}
				.right_content{
					margin-right: 0.5rem;
				}
			}
			.news_bg_wrap{
				max-width: 12rem;
				margin: 0 auto;
				display: flex;
				.news_bg_list_item_content{
					flex: 1;
					margin: 0.4rem 0 0  0.5rem;
					display: flex;
					overflow: hidden;
					.news_bg_item_content{
						margin-right: 0.5rem;
						.month_bg_day_content{
							width: 0.62rem;
							text-align: center;
							background: url("../assets/Group.png") no-repeat center center;
							background-size: cover;
							color: #fff;
							.date_bg_day_content{
								font-size: 0.15rem;
								padding-top: 0.08rem;
							}
							.date_bg_month_content{
								font-size: 0.24rem;
							}
						}
						.year_bg_content{
							width: 0.62rem;
							height: 0.6rem;
							text-align: center;
							line-height: 0.6rem;
							font-size: 0.15rem;
							background: #0b243e;
							color: #fff;
							margin-top: 0.01rem;
						}
					}
					.bg_news_content{
						flex: 1;
						overflow: hidden;
						.news_bg_title{
							color: #0054E3;
							font-weight: 700;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
						.news_bg_content_text{
							max-width: 4.13rem;
							margin-top: 24px;
							text-indent: 30px;
							font-size: 14px;
							color: #696e75;
							line-height: 28px;
							text-align: justify;
							overflow: hidden;
						}
						.view_bg_more_btn{
							font-size: 14px;
							color: #0054E3;
							line-height: 28px;
							margin-top: 14px;
							cursor: pointer;
							display: block;
						}
					}
					
				}
				.right_content{
					margin-right: 0.5rem;
				}
			}
		}
	}
@media screen and (min-width: 375px)and (max-width: 768px){
	.information_container_content{
		.news_content{
			.news_wrap{
				flex-direction: column;
				.news_list_item_content{
					box-sizing: border-box;
					margin: 0.4rem 0 0 0;
					padding: 0 0.4rem;
				}
			}
			.news_bg_wrap{
				flex-direction: column;
				.news_bg_list_item_content{
					box-sizing: border-box;
					margin: 0.4rem 0 0 0;
					padding: 0 0.4rem;
				}
			}
		}
	}
}
	@media screen and (max-width: 375px){
		.information_container_content{
			.information_content_wrap{
				.information_content{
					h2{
						font-size: 0.32rem;
					}
				}
			}
			.news_content{
				.news_wrap{
					flex-direction: column;
					.news_list_item_content{
						box-sizing: border-box;
						margin: 0.4rem 0 0 0;
						padding: 0 0.2rem;
						.news_item_content{
							margin-right: 0.2rem;
						}
					}
				}
				.news_bg_wrap{
					flex-direction: column;
					.news_bg_list_item_content{
						box-sizing: border-box;
						margin: 0.4rem 0 0 0;
						padding: 0 0.2rem;
						.news_bg_item_content{
							margin-right: 0.2rem;
						}
					}
				}
			}
		}
	}
</style>
