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
	description: 'bianjie.ai',
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
    }
};