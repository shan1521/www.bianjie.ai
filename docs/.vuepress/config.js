const { EDITION_NAV, EDITION_COMPANY, CONTACT_US_TITLE, CONTACT_US, SCAN_CODE_FOLLOW_US, COPYRIGHT_RECORD, PRO_TITLE, OG_CONTENT } = require('./theme/constants');
const { getCurrentEditionPrefix } = require('./theme/util');
const editionPrefix = getCurrentEditionPrefix();
const headMetaArr = [
	['link', { rel: 'icon', href: '/favicon.ico' }],
	['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0' }]
]
headMetaArr.push(...OG_CONTENT[editionPrefix])
module.exports = {
	title: PRO_TITLE[editionPrefix],
	description: 'bianjie.ai',
	head: headMetaArr,
	themeConfig: {
		search: false,
		navbar: false,
		locales: {
			'/zh-cn/': {
				nav: EDITION_NAV[editionPrefix]['zh-cn'],
				footer: {
					companyInfo: EDITION_COMPANY[editionPrefix]['zh-cn'],
					contactUSTitle: CONTACT_US_TITLE[editionPrefix]['zh-cn'],
					contactUS: CONTACT_US[editionPrefix],
					scanCodeFollowUS: SCAN_CODE_FOLLOW_US[editionPrefix]['zh-cn'],
					copyrightInfo: COPYRIGHT_RECORD[editionPrefix]['zh-cn']
				},
			},
			'/zh-hk/': {
				nav: EDITION_NAV[editionPrefix]['zh-hk'],
				footer: {
					companyInfo: EDITION_COMPANY[editionPrefix]['zh-hk'],
					contactUSTitle: CONTACT_US_TITLE[editionPrefix]['zh-hk'],
					contactUS: CONTACT_US[editionPrefix],
					scanCodeFollowUS: SCAN_CODE_FOLLOW_US[editionPrefix]['zh-hk'],
					copyrightInfo: COPYRIGHT_RECORD[editionPrefix]['zh-hk']
				},
			},
			'/en/': {
				nav: EDITION_NAV[editionPrefix]['en'],
				footer: {
					companyInfo: EDITION_COMPANY[editionPrefix]['en'],
					contactUSTitle: CONTACT_US_TITLE[editionPrefix]['en'],
					contactUS: CONTACT_US[editionPrefix],
					scanCodeFollowUS: SCAN_CODE_FOLLOW_US[editionPrefix]['en'],
					copyrightInfo: COPYRIGHT_RECORD[editionPrefix]['en']
				},
			}
		},
	},
	locales: {
		'/zh-cn/': {
			lang: 'zh-cn'
		},
		'/zh-hk/': {
			lang: 'zh-hk'
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
    }
};
