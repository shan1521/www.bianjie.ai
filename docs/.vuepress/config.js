const { EDITION_NAV, EDITION_COMPANY, CONTACT_US_TITLE, CONTACT_US, SCAN_CODE_FOLLOW_US, COPYRIGHT_RECORD } = require('./theme/constants');
const { getCurrentEditionPrefix } = require('./theme/util');
const editionPrefix = getCurrentEditionPrefix();
module.exports = {
	// todo shan 区分国内版国际版
	title: '边界智能-BIANJIE.AI',
	description: 'bianjie.ai',
	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }],
		['meta', { name: 'keywords', content: '上海边界智能,边界智能,边界智能-BIANJIE.AI,上海边界,上海边界智能科技有限公司,边界智能区块链,边界区块链,边界智能官网,上海边界官网,BIANJIEAI,bianjieai,边界智能跨链服务' }],
		['meta', { name: 'description', content: '上海边界智能专注于区块链、大数据相关产品技术研发、应用平台建设和解决方案咨询的高科技公司和国家高新技术企业。以区块链跨链、隐私计算及大数据分析技术创新为核心，自主研发了安全可控、符合国密标准、支持下一代分布式商业系统的企业级联盟链 IRITA产品系列。' }],
		['meta', { name: 'baidu-site-verification', content: 'CadgsdV9bv' }],
		['meta', { name: 'google-site-verification', content: 'Y1zz3l93YMcsFRVcKcGM9KmdE3wukv8KiJucw0xpC9M' }],
		['meta', { name: '360-site-verification', content: 'KXEyCmQU' }],
		['meta', { property: 'og:image', content: 'https://www.bianjie.ai/resources/Bianjie/Bianjie-Logo-Share.png' }],
		['meta', { property: 'og:title', content: '边界智能-BIANJIE.AI' }],
		[
			'meta',
			{ property: 'og:description', content: '上海边界智能专注于区块链、大数据相关产品技术研发、应用平台建设和解决方案咨询的高科技公司和国家高新技术企业。以区块链跨链、隐私计算及大数据分析技术创新为核心，自主研发了安全可控、符合国密标准、支持下一代分布式商业系统构建的企业联盟链 IRITA 产品系列。' },
		],
		['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0' }],
	],
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
					scanCodeFollowUS: SCAN_CODE_FOLLOW_US[editionPrefix]['zh-HK'],
					copyrightInfo: COPYRIGHT_RECORD[editionPrefix]['zh-HK']
				},
			},
			'/en-US/': {
				nav: EDITION_NAV[editionPrefix]['en-US'],
				footer: {
					companyInfo: EDITION_COMPANY[editionPrefix]['en-US'],
					contactUSTitle: CONTACT_US_TITLE[editionPrefix]['en-US'],
					contactUS: CONTACT_US[editionPrefix],
					scanCodeFollowUS: SCAN_CODE_FOLLOW_US[editionPrefix]['en-US'],
					copyrightInfo: COPYRIGHT_RECORD[editionPrefix]['en-US']
				},
			}
		},
	},
	locales: {
		'/zh-CN/': {
			lang: 'zh-CN',
			// title: '边界智能',
		},
		'/zh-HK/': {
			lang: 'zh-HK',
			// title: '边界智能',
		},
		'/en-US/': {
			lang: 'en-US',
			// title: 'BIANJIE',
		}
	}
};
