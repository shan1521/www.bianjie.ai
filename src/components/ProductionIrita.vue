<template>
	<div class="production_container">
		<div class="production_header_content_wrap">
			<div class="production_header_content">
				<h2>联盟链产品-IRITA</h2>
				<h5>自有区块链底层技术 · 金融数据创新赋能</h5>
			</div>
		</div>
		<div class="production_text_content">
			<div class="production_text_title">跨域行业互信联盟产品 IRITA</div>
			<p class="production_list_item">跨域行业互信联盟产品（Inter-Realm Industry Trust Alliance，简称 IRITA)，是 Cosmos 生态中第一个企业级联盟链产品，是基于现代区块链技术框架<a href="https://tendermint.com/" target="_blank" style="color: #155fff;"> Tendermint </a>和<router-link :to="`/products/irisnet`" style="color:#155fff;"> IRIS SDK </router-link>，并结合边界智能团队多年行业经验打造的联盟链产品，具有保护隐私的数据加密共享、高可扩展的共识协议、最前沿的跨链技术、实用性极强的跨系统交互能力、数字资产建模与交易支持等 6 大核心技术优势，可广泛应用于金融业等多种行业，提供基于区块链信任机器的价值赋能。</p>
			<div class="production_list_content">
				<p class="production_list_title">IRITA 可以灵活使用在多种行业，尤其在<router-link :to="`/application/finance`" style="color: #155fff;">金融创新</router-link>行业，围绕<router-link :to="`/application/digital-asset`" style="color: #155fff;">资产数字化</router-link>后的确权和流通，具有6大核心技术优势：</p>
				<p>1）共识底层：<a href="https://tendermint.com/" target="_blank"  style="color: #155fff;">Tendermint </a>是首个可以在互联网级别可应用的拜占庭共识协议，是Libra也沿用的共识技术</p>
				<p>2）<a href="https://cosmos.network/" target="_blank" style="color: #155fff;">跨链 IBC </a>: 国际合作团队贡献了业内公认的、最前沿跨链技术标准设计与实施；支持各种异构链间可信交互</p>
				<p>3）数据授权共享：数据在链上加密存储，保护各方数据所有权和隐私；只有用户授权，数据才会共享给第三方</p>
				<p>4）iService：链上链下各类型系统的交互，基于<router-link :to="`/products/irisnet`" style="color:#155fff;"> IRIS SDK </router-link>将各类技术的有机结合、自然演进过渡</p>
				<p>5）数字资产建模与交易：支持对数字资产数据多元结构的灵活建模；非常适合实现链上交易平台（DEX）；以 NFT（非同质化通证）为基础，支持供应链、知识产权、医疗、存证等各领域的数字资产化</p>
				<p>6）大数据支持：自带存储层支持云存储和分布式存储；数据仓库和链式数据结合支持链上数据高效全生命周期查询</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Production"
	}
</script>

<style scoped lang="less">
	.production_container{
		width: 100%;
		.production_header_content_wrap{
			background: url("../assets/home/IRISnet.png") no-repeat center center;
			background-size: cover;
			height: 4.6rem;
			display: flex;
			align-items: center;
			justify-content: center;
			.production_header_content{
				text-align: center;
				h2{
					font-size: 0.6rem;
					color: #fff;
					line-height: 0.84rem;
					font-weight: lighter;
				}
				h5{
					font-size: 0.22rem;
					color: #fff;
					line-height: 0.3rem;
					font-weight: lighter;
					margin-top: 0.2rem;
				}
			}
		}
		.production_text_content{
			max-width: 12rem;
			margin: 0 auto 2.63rem auto;
			.production_text_title{
				text-align: center;
				color: #0C253A;
				margin: 1rem 0 0.4rem 0;
				font-weight: bold;
			}
			.production_list_item{
				font-size: 0.14rem;
				line-height: 0.28rem;
				color: #0C253A;
			}
			.production_list_content{
				margin-top: 0.25rem;
				color: #0C253A;
				p{
					font-size: 0.14rem;
					margin-bottom: 0.14rem;
				}
			}
		}
	}

</style>
