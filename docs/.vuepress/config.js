const { EDITION_NAV, EDITION_COMPANY, CONTACT_US_TITLE, CONTACT_US, COPY_TEXT, SCAN_CODE_FOLLOW_US, COPYRIGHT_RECORD, PRO_TITLE, OG_CONTENT } = require('./theme/constants');
const { getCurrentEditionPrefix } = require('./theme/util');
const editionPrefix = getCurrentEditionPrefix();
const headMetaArr = [
	['link', { rel: 'icon', href: '/favicon.ico' }],
	['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0' }]
]
headMetaArr.push(...OG_CONTENT[editionPrefix])
module.exports = {
	title: PRO_TITLE[editionPrefix],
	description: '边界智能是 2016 年创立于上海的区块链技术与应用创新团队，专注于区块链技术支持的下一代互联网（Web3）应用服务，以区块链跨链、NFT 技术及大数据隐私保护技术为核心，自主研发了支持分布式商业系统的多链跨链分布式应用服务平台 AVATA、开放许可链文昌链、企业级基础链 IRITA 等核心产品，在 Web3 、元宇宙、数字银行、跨境贸易、大数据隐私保护等领域持续推进创新与合规并举的应用落地，创造商业价值。边界智能还积极参与全球开源协作，是包括 Cosmos/IRISHUB 等在内的全球多个区块链网络的核心技术开发者。',
	head: headMetaArr,
	themeConfig: {
		search: false,
		navbar: false,
		locales: {
			'/zh-CN/': {
				nav: EDITION_NAV[editionPrefix]['zh-CN'],
				footer: {
					companyInfo: EDITION_COMPANY[editionPrefix]['zh-CN'],
					contactUSTitle: CONTACT_US_TITLE[editionPrefix]['zh-CN'],
					contactUS: CONTACT_US[editionPrefix],
					copyText: COPY_TEXT[editionPrefix]['zh-CN'],
					scanCodeFollowUS: SCAN_CODE_FOLLOW_US[editionPrefix]['zh-CN'],
					copyrightInfo: COPYRIGHT_RECORD[editionPrefix]['zh-CN']
				},
			},
			'/zh-HK/': {
				nav: EDITION_NAV[editionPrefix]['zh-HK'],
				footer: {
					companyInfo: EDITION_COMPANY[editionPrefix]['zh-HK'],
					contactUSTitle: CONTACT_US_TITLE[editionPrefix]['zh-HK'],
					contactUS: CONTACT_US[editionPrefix],
					copyText: COPY_TEXT[editionPrefix]['zh-HK'],
					scanCodeFollowUS: SCAN_CODE_FOLLOW_US[editionPrefix]['zh-HK'],
					copyrightInfo: COPYRIGHT_RECORD[editionPrefix]['zh-HK']
				},
			},
			'/en/': {
				nav: EDITION_NAV[editionPrefix]['en'],
				footer: {
					companyInfo: EDITION_COMPANY[editionPrefix]['en'],
					contactUSTitle: CONTACT_US_TITLE[editionPrefix]['en'],
					contactUS: CONTACT_US[editionPrefix],
					copyText: COPY_TEXT[editionPrefix]['en'],
					scanCodeFollowUS: SCAN_CODE_FOLLOW_US[editionPrefix]['en'],
					copyrightInfo: COPYRIGHT_RECORD[editionPrefix]['en']
				},
			}
		},
	},
	locales: {
		'/zh-CN/': {
			lang: 'zh-CN'
		},
		'/zh-HK/': {
			lang: 'zh-HK'
		},
		'/en/': {
			lang: 'en'
		}
	},
	plugins:{
        '@vuepress/pwa': {
            generateSWConfig : {               
                globPatterns: [
                    '**/*.{js,css,png,jpg,jpeg,gif,svg,woff,woff2,eot,ttf,otf}'
                ]
            }
        }
    },
	chainWebpack: config => {
		const imagesRule = config.module.rule('images');
			imagesRule.uses.clear()
			imagesRule
			.test(/\.(jpg|gif|png|svg)$/)
			.exclude
			.end()
			.use('url-loader')
				.loader('url-loader')
				.options({name:"img/[name].[hash:8].[ext]",limit: 3})
	}
};