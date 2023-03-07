const ENV_INLAND_INTERNATIONAL = {
    inland: 'inland',
    international: 'international'
}

const LANG_OPTIONS = [
    {
        label: 'English',
        value: '/en/'
    },
    {
        label: '繁體中文',
        value: '/zh-HK/'
    },
    {
        label: '简体中文',
        value: '/zh-CN/'
    }
]

const EDITION_NAV = {
    inland: {
        'zh-CN': [
            { text: '首页', link: '/zh-CN/' },
            { 
                text: '核心产品', link: '', 
                items: [
                    {
                        icon: 'icon-diceng',
                        type: '区块链底层技术产品',
                        productList: [
                            {
                                abbreviation: 'IRITA',
                                intro: '支持下一代分布式商业的联盟链产品线',
                                link: 'https://irita.bianjie.ai/'
                            },
                            {
                                abbreviation: 'IRITA HUB',
                                intro: '异构区块链跨链服务枢纽',
                                route: '/zh-CN/products/iritahub'
                            },
                            {
                                abbreviation: 'IRITA OPB',
                                intro: '支持分布式商业应用的开放许可链',
                                route: '/zh-CN/products/iritaopb'
                            },
                            {
                                abbreviation: 'BSN 文昌链',
                                intro: '基于 IRITA 的开放联盟链',
                                link: 'https://wenchang.bianjie.ai/'
                            },
                            {
                                abbreviation: 'AVATA',
                                intro: '多链/跨链 API 服务平台',
                                link: 'https://console.avata.bianjie.ai'
                            },
                        ]
                    },
                    {
                        icon: 'icon-yingyongceng',
                        type: '区块链应用层技术产品',
                        productList: [
                            {
                                abbreviation: 'IRITA BEAN',
                                intro: '数据隐私保护及共享产品',
                                route: '/zh-CN/products/iritabean'
                            },
                            {
                                abbreviation: 'IRITA DA',
                                intro: '资产数字化确权及交换产品',
                                route: '/zh-CN/products/iritada'
                            },
                        ]
                    },
                ]
            },
            {
                text: '应用场景', link: '', items: [
                    {
                        icon: 'icon-zhengwu', 
                        scene: '智慧政务',
                        text: '电子证照',
                        link: '/zh-CN/applications/e-licence'
                    },
                    {
                        icon: 'icon-tan', 
                        scene: '碳中和',
                        text: '碳核查',
                        link: '/zh-CN/applications/C-trading'
                    },
                    {
                        icon: 'icon-banquan', 
                        scene: '文创与版权',
                        text: '一体化数字艺术品',
                        link: '/zh-CN/applications/digital-art'
                    },
                    {
                        icon: 'icon-wulianwang', 
                        scene: '工业互联网及物联网',
                        text: '物联网可信数据采集',
                        link: '/zh-CN/applications/datacollection'
                    },
                    {
                        icon: 'icon-jinrong', 
                        scene: '金融',
                        text: '供应链金融',
                        link: '/zh-CN/applications/trade-finance'
                    },
                    {
                        icon: 'icon-yiliao', 
                        scene: '医疗健康',
                        text: '电子处方流转',
                        link: '/zh-CN/applications/e-prescription-circulation'
                    },
                ]
            },
            { text: '企业动态', link: '/zh-CN/news' },
            { text: '合作伙伴', link: '/zh-CN/partners' },
            { text: '关于边界', link: '/zh-CN/about' },
            { text: '付费资讯', link: 'https://www.bianjie.ai/pay-information/', isOutLink: true },
            { text: '了解更多', link: '/download', isRight: true, target: '_blank' },
        ],
        'zh-HK': [
            { text: '首页', link: '/zh-CN/' },
            { 
                text: '核心产品', link: '', 
                items: [
                    {
                        icon: 'icon-diceng',
                        type: '区块链底层技术产品',
                        productList: [
                            {
                                abbreviation: 'IRITA',
                                intro: '支持下一代分布式商业的联盟链产品线',
                                link: 'https://irita.bianjie.ai/'
                            },
                            {
                                abbreviation: 'IRITA HUB',
                                intro: '异构区块链跨链服务枢纽',
                                route: '/zh-CN/products/iritahub'
                            },
                            {
                                abbreviation: 'IRITA OPB',
                                intro: '支持分布式商业应用的开放许可链',
                                route: '/zh-CN/products/iritaopb'
                            },
                            {
                                abbreviation: 'BSN 文昌链',
                                intro: '基于 IRITA 的开放联盟链',
                                link: 'https://wenchang.bianjie.ai/'
                            },
                            {
                                abbreviation: 'AVATA',
                                intro: '多链/跨链 API 服务平台',
                                link: 'https://console.avata.bianjie.ai'
                            },
                        ]
                    },
                    {
                        icon: 'icon-yingyongceng',
                        type: '区块链应用层技术产品',
                        productList: [
                            {
                                abbreviation: 'IRITA BEAN',
                                intro: '数据隐私保护及共享产品',
                                route: '/zh-CN/products/iritabean'
                            },
                            {
                                abbreviation: 'IRITA DA',
                                intro: '资产数字化确权及交换产品',
                                route: '/zh-CN/products/iritada'
                            },
                        ]
                    },
                ]
            },
            {
                text: '应用场景', link: '', items: [
                    {
                        icon: 'icon-zhengwu', 
                        scene: '智慧政务',
                        text: '电子证照',
                        link: '/zh-CN/applications/e-licence'
                    },
                    {
                        icon: 'icon-tan', 
                        scene: '碳中和',
                        text: '碳核查',
                        link: '/zh-CN/applications/C-trading'
                    },
                    {
                        icon: 'icon-banquan', 
                        scene: '文创与版权',
                        text: '一体化数字艺术品',
                        link: '/zh-CN/applications/digital-art'
                    },
                    {
                        icon: 'icon-wulianwang', 
                        scene: '工业互联网及物联网',
                        text: '物联网可信数据采集',
                        link: '/zh-CN/applications/datacollection'
                    },
                    {
                        icon: 'icon-jinrong', 
                        scene: '金融',
                        text: '供应链金融',
                        link: '/zh-CN/applications/trade-finance'
                    },
                    {
                        icon: 'icon-yiliao', 
                        scene: '医疗健康',
                        text: '电子处方流转',
                        link: '/zh-CN/applications/e-prescription-circulation'
                    },
                ]
            },
            { text: '企业动态', link: '/zh-CN/news' },
            { text: '合作伙伴', link: '/zh-CN/partners' },
            { text: '关于边界', link: '/zh-CN/about' },
            { text: '付费资讯', link: 'https://www.bianjie.ai/pay-information/', isOutLink: true },
            { text: '了解更多', link: '/download', isRight: true, target: '_blank' },
        ],
        'en': [
            { text: '首页', link: '/zh-CN/' },
            { 
                text: '核心产品', link: '', 
                items: [
                    {
                        icon: 'icon-diceng',
                        type: '区块链底层技术产品',
                        productList: [
                            {
                                abbreviation: 'IRITA',
                                intro: '支持下一代分布式商业的联盟链产品线',
                                link: 'https://irita.bianjie.ai/'
                            },
                            {
                                abbreviation: 'IRITA HUB',
                                intro: '异构区块链跨链服务枢纽',
                                route: '/zh-CN/products/iritahub'
                            },
                            {
                                abbreviation: 'IRITA OPB',
                                intro: '支持分布式商业应用的开放许可链',
                                route: '/zh-CN/products/iritaopb'
                            },
                            {
                                abbreviation: 'BSN 文昌链',
                                intro: '基于 IRITA 的开放联盟链',
                                link: 'https://wenchang.bianjie.ai/'
                            },
                            {
                                abbreviation: 'AVATA',
                                intro: '多链/跨链 API 服务平台',
                                link: 'https://console.avata.bianjie.ai'
                            },
                        ]
                    },
                    {
                        icon: 'icon-yingyongceng',
                        type: '区块链应用层技术产品',
                        productList: [
                            {
                                abbreviation: 'IRITA BEAN',
                                intro: '数据隐私保护及共享产品',
                                route: '/zh-CN/products/iritabean'
                            },
                            {
                                abbreviation: 'IRITA DA',
                                intro: '资产数字化确权及交换产品',
                                route: '/zh-CN/products/iritada'
                            },
                        ]
                    },
                ]
            },
            {
                text: '应用场景', link: '', items: [
                    {
                        icon: 'icon-zhengwu', 
                        scene: '智慧政务',
                        text: '电子证照',
                        link: '/zh-CN/applications/e-licence'
                    },
                    {
                        icon: 'icon-tan', 
                        scene: '碳中和',
                        text: '碳核查',
                        link: '/zh-CN/applications/C-trading'
                    },
                    {
                        icon: 'icon-banquan', 
                        scene: '文创与版权',
                        text: '一体化数字艺术品',
                        link: '/zh-CN/applications/digital-art'
                    },
                    {
                        icon: 'icon-wulianwang', 
                        scene: '工业互联网及物联网',
                        text: '物联网可信数据采集',
                        link: '/zh-CN/applications/datacollection'
                    },
                    {
                        icon: 'icon-jinrong', 
                        scene: '金融',
                        text: '供应链金融',
                        link: '/zh-CN/applications/trade-finance'
                    },
                    {
                        icon: 'icon-yiliao', 
                        scene: '医疗健康',
                        text: '电子处方流转',
                        link: '/zh-CN/applications/e-prescription-circulation'
                    },
                ]
            },
            { text: '企业动态', link: '/zh-CN/news' },
            { text: '合作伙伴', link: '/zh-CN/partners' },
            { text: '关于边界', link: '/zh-CN/about' },
            { text: '付费资讯', link: 'https://www.bianjie.ai/pay-information/', isOutLink: true },
            { text: '了解更多', link: '/download', isRight: true, target: '_blank' },
        ]
    },
    international: {
        'zh-CN': [
            { text: '首页', link: '/zh-CN/' },
            { 
                text: '核心产品', link: '', 
                items: [
                    {
                        icon: 'icon-diceng',
                        type: '区块链基础设施',
                        productList: [
                            {
                                abbreviation: 'IRITA',
                                intro: '支持下一代分布式商业的联盟链产品线',
                                route: '/zh-CN/products/irita'
                            },
                            {
                                abbreviation: 'IRITA HUB',
                                intro: '异构区块链跨链服务枢纽',
                                route: '/zh-CN/products/iritahub'
                            },
                            {
                                abbreviation: 'AVATA',
                                intro: '多链跨链分布式应用服务平台',
                                link: 'https://apis.avata.bianjie.ai/'
                            },
                            {
                                abbreviation: 'TIBC',
                                intro: '精简跨链通信协议',
                                link: 'https://mp.weixin.qq.com/s/PBD9DGmHe8goOjczTMxmzw'
                            }
                        ]
                    },
                    {
                        icon: 'icon-yingyongceng',
                        type: '区块链应用',
                        productList: [
                            {
                                abbreviation: '元宇宝盒全球版',
                                intro: '多链 NFT 应用赋能工具',
                                route: '/zh-CN/products/nftapplication'
                            },
                            {
                                abbreviation: 'NFT 跨链钱包',
                                intro: '跨链 NFT 资产管理工具',
                                route: '/zh-CN/products/nftapplication'
                            },
                        ]
                    }
                ]
            },
            {
                text: '应用场景', link: '', items: [
                    {
                        icon: 'icon-zhengwu', 
                        scene: '金融服务',
                        text: '亚洲数字银行',
                        link: '/zh-CN/applications/finance-trade'
                    },
                    {
                        icon: 'icon-kuajingmaoyi', 
                        scene: '跨境贸易',
                        text: '丝路之舟',
                        link: '/zh-CN/applications/finance-trade'
                    }
                ]
            },
            { text: '关于我们', link: '/zh-CN/about' }
        ],
        'zh-HK': [
            { text: '首頁', link: '/zh-HK/' },
            { 
                text: '核心產品', link: '', 
                items: [
                    {
                        icon: 'icon-diceng',
                        type: '區塊鏈基礎設施',
                        productList: [
                            {
                                abbreviation: 'IRITA',
                                intro: '支持下一代分佈式商業的聯盟鏈產品',
                                route: '/zh-HK/products/irita'
                            },
                            {
                                abbreviation: 'IRITA HUB',
                                intro: '異構區塊鏈跨鏈服務樞紐',
                                route: '/zh-HK/products/iritahub'
                            },
                            {
                                abbreviation: 'AVATA',
                                intro: '多鏈跨鏈分佈式應用服務平台',
                                link: 'https://apis.avata.bianjie.ai/'
                            },
                            {
                                abbreviation: 'TIBC',
                                intro: '精簡跨鏈通信協議',
                                link: 'https://mp.weixin.qq.com/s/PBD9DGmHe8goOjczTMxmzw'
                            }
                        ]
                    },
                    {
                        icon: 'icon-yingyongceng',
                        type: '區塊鏈應用',
                        productList: [
                            {
                                abbreviation: '元宇寶盒全球版',
                                intro: '多鏈 NFT 應用賦能工具',
                                route: '/zh-HK/products/nftapplication'
                            },
                            {
                                abbreviation: 'NFT 跨鏈錢包',
                                intro: '跨鏈 NFT 資產管理工具',
                                route: '/zh-HK/products/nftapplication'
                            },
                        ]
                    }
                ]
            },
            {
                text: '應用場景', link: '', items: [
                    {
                        icon: 'icon-zhengwu', 
                        scene: '金融服務',
                        text: '亞洲數字銀行',
                        link: '/zh-HK/applications/finance-trade'
                    },
                    {
                        icon: 'icon-kuajingmaoyi', 
                        scene: '跨境貿易',
                        text: '絲路之舟',
                        link: '/zh-HK/applications/finance-trade'
                    }
                ]
            },
            { text: '關於我們', link: '/zh-HK/about' }
        ],
        'en': [
            { text: 'Home', link: '/en/' },
            { 
                text: 'Products', link: '', 
                items: [
                    {
                        icon: 'icon-diceng',
                        type: 'Blockchain Infrastructure',
                        productList: [
                            {
                                abbreviation: 'IRITA',
                                intro: 'the Consortium Chain Product Line for Next-Generation Distributed Business',
                                route: '/en/products/irita'
                            },
                            {
                                abbreviation: 'IRITA HUB',
                                intro: 'the Interchain Service Hub for Heterogeneous Blockchains',
                                route: '/en/products/iritahub'
                            },
                            {
                                abbreviation: 'AVATA',
                                intro: 'Multi-chain and Cross-chain Distributed Application Service Platform',
                                link: 'https://apis.avata.bianjie.ai/'
                            },
                            {
                                abbreviation: 'TIBC',
                                intro: 'Terse Inter-Blockchain Communication Protocol',
                                link: 'https://mp.weixin.qq.com/s/PBD9DGmHe8goOjczTMxmzw'
                            }
                        ]
                    },
                    {
                        icon: 'icon-yingyongceng',
                        type: 'Blockchain Applications',
                        productList: [
                            {
                                abbreviation: 'MTO Box Global',
                                intro: 'Multi-Chain NFT Application Empowerment Tool',
                                route: '/en/products/nftapplication'
                            },
                            {
                                abbreviation: 'NFT Cross-Chain Wallet',
                                intro: 'Cross-Chain NFT Asset Management Tool',
                                route: '/en/products/nftapplication'
                            },
                        ]
                    }
                ]
            },
            {
                text: 'Solutions', link: '', 
                items: [
                    {
                        icon: 'icon-zhengwu', 
                        scene: 'Financial Services',
                        text: 'Asia Digital Bank',
                        link: '/en/applications/finance-trade'
                    },
                    {
                        icon: 'icon-kuajingmaoyi', 
                        scene: 'Cross-Border Trade',
                        text: 'DODR',
                        link: '/en/applications/finance-trade'
                    }
                ]
            },
            { text: 'About Us', link: '/en/about' }
        ]
    }
}

const EDITION_COMPANY = {
    inland: {
        'zh-CN': {
            title: '公司',
            content: [
                {
                    label: '边界智能·国际',
                    href: 'https://www.bianjie.hk/'
                }
            ]
        },
        'zh-HK': {
            title: '公司',
            content: [
                {
                    label: '边界智能·国际',
                    href: 'https://www.bianjie.hk/'
                }
            ]
        },
        'en': {
            title: '公司',
            content: [
                {
                    label: '边界智能·国际',
                    href: 'https://www.bianjie.hk/'
                }
            ]
        }
    },
    international: {
        'zh-CN': {
            title: '公司',
            content: [
                {
                    label: '边界智能·中国',
                    href: 'https://www.bianjie.ai/'
                }
            ]
        },
        'zh-HK': {
            title: '公司',
            content: [
                {
                    label: '邊界智能·中國',
                    href: 'https://www.bianjie.ai/'
                }
            ]
        },
        'en': {
            title: 'Company',
            content: [
                {
                    label: 'BIANJIE.AI China',
                    href: 'https://www.bianjie.ai/'
                }
            ]
        }
    }
}

const CONTACT_US_TITLE = {
    inland: {
        'zh-CN': '联系我们',
        'zh-HK': '联系我们',
        'en': '联系我们'
    },
    international: {
        'zh-CN': '联系我们',
        'zh-HK': '聯繫我們',
        'en': 'Contact Us'
    }
}

const CONTACT_US = {
    inland: [
        {
            label: 'contact@bianjie.ai',
            copy: true
        }
    ],
    international: [
        {
            label: 'contact@blockbeat.hk',
            copy: true
        }
    ]
}

const COPY_TEXT = {
    inland: {
        'zh-CN': '复制成功',
        'zh-HK': '复制成功',
        'en': '复制成功'
    },
    international: {
        'zh-CN': '复制成功',
        'zh-HK': '複製成功',
        'en': 'Copied'
    }
}

const SCAN_CODE_FOLLOW_US = {
    inland: {
        'zh-CN': '扫码关注我们',
        'zh-HK': '扫码关注我们',
        'en': '扫码关注我们'
    },
    international: {
        'zh-CN': '扫码关注我们',
        'zh-HK': '掃碼關注我們',
        'en': 'Scan the QR code to follow us'
    }
}

const COPYRIGHT_RECORD = {
    inland: {
        'zh-CN': [
            {
                label: `版权所有©2016-${new Date().getFullYear()} 上海边界智能科技有限公司`
            },
            {
                label: '沪ICP备17020986号',
                href: 'https://beian.miit.gov.cn/'
            },
            {
                label: '沪公网安备31011502009028号',
                href: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502009028'
            }
        ],
        'zh-HK': [
            {
                label: `版权所有©2016-${new Date().getFullYear()} 上海边界智能科技有限公司`
            },
            {
                label: '沪ICP备17020986号',
                href: 'https://beian.miit.gov.cn/'
            },
            {
                label: '沪公网安备31011502009028号',
                href: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502009028'
            }
        ],
        'en': [
            {
                label: `版权所有©2016-${new Date().getFullYear()} 上海边界智能科技有限公司`
            },
            {
                label: '沪ICP备17020986号',
                href: 'https://beian.miit.gov.cn/'
            },
            {
                label: '沪公网安备31011502009028号',
                href: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502009028'
            }
        ]
    },
    international: {
        'zh-CN': [
            {
                label: `版权所有©${new Date().getFullYear()} 区块驿动科技有限公司`
            }
        ],
        'zh-HK': [
            {
                label: `版權所有©${new Date().getFullYear()} 區塊驛動科技有限公司`
            }
        ],
        'en': [
            {
                label: `All rights reserved ©${new Date().getFullYear()} Blockbeat Technology Limited`
            }
        ]
    }
}
// 核心能力与优势处阴影需要基础值
const ADVANTAGES_WIDTH = 206;
const ADVANTAGES_HEIGHT = 20;

const DOM_TITLE = {
    inland: {
        '/zh-CN/': {
            '': '首页',
            'products/iritahub.html': 'IRITA HUB-核心产品',
            'products/iritaopb.html': 'IRITA OPB-核心产品',
            'products/IRITAOPB-敬请期待.html': 'IRITA OPB 敬请期待-核心产品',
            'products/iritabean.html': 'IRITA BEAN-核心产品',
            'products/iritada.html': 'IRITA DA-核心产品',
            'applications/e-licence.html': '智慧政务-应用场景',
            'applications/C-trading.html': '碳中和-应用场景',
            'applications/digital-art.html': '文创与版权-应用场景',
            'applications/datacollection.html': '工业互联网及物联网-应用场景',
            'applications/trade-finance.html': '供应链金融-应用场景',
            'applications/e-prescription-circulation.html': '医疗健康-应用场景',
            'news/': '企业动态',
            'partners.html': '合作伙伴',
            'about.html': '关于边界-关于我们',
            'milestone.html': '关于边界-发展历程',
            'honour.html': '关于边界-荣誉资质',
            'join.html': '关于边界-加入我们'
        },
        '/zh-HK/': {
            '': '首页',
            'products/iritahub.html': 'IRITA HUB-核心产品',
            'products/iritaopb.html': 'IRITA OPB-核心产品',
            'products/IRITAOPB-敬请期待.html': 'IRITA OPB 敬请期待-核心产品',
            'products/iritabean.html': 'IRITA BEAN-核心产品',
            'products/iritada.html': 'IRITA DA-核心产品',
            'applications/e-licence.html': '智慧政务-应用场景',
            'applications/C-trading.html': '碳中和-应用场景',
            'applications/digital-art.html': '文创与版权-应用场景',
            'applications/datacollection.html': '工业互联网及物联网-应用场景',
            'applications/trade-finance.html': '供应链金融-应用场景',
            'applications/e-prescription-circulation.html': '医疗健康-应用场景',
            'news/': '企业动态',
            'partners.html': '合作伙伴',
            'about.html': '关于边界-关于我们',
            'milestone.html': '关于边界-发展历程',
            'honour.html': '关于边界-荣誉资质',
            'join.html': '关于边界-加入我们'
        },
        '/en/': {
            '': '首页',
            'products/iritahub.html': 'IRITA HUB-核心产品',
            'products/iritaopb.html': 'IRITA OPB-核心产品',
            'products/IRITAOPB-敬请期待.html': 'IRITA OPB 敬请期待-核心产品',
            'products/iritabean.html': 'IRITA BEAN-核心产品',
            'products/iritada.html': 'IRITA DA-核心产品',
            'applications/e-licence.html': '智慧政务-应用场景',
            'applications/C-trading.html': '碳中和-应用场景',
            'applications/digital-art.html': '文创与版权-应用场景',
            'applications/datacollection.html': '工业互联网及物联网-应用场景',
            'applications/trade-finance.html': '供应链金融-应用场景',
            'applications/e-prescription-circulation.html': '医疗健康-应用场景',
            'news/': '企业动态',
            'partners.html': '合作伙伴',
            'about.html': '关于边界-关于我们',
            'milestone.html': '关于边界-发展历程',
            'honour.html': '关于边界-荣誉资质',
            'join.html': '关于边界-加入我们'
        }
    },
    international: {
        '/zh-CN/': {
            '': '首页',
            'products/irita.html': 'IRITA-核心产品',
            'products/iritahub.html': 'IRITA HUB-核心产品',
            'products/nftapplication.html': 'NFT 应用-核心产品',
            'applications/finance-trade.html': '应用场景',
            'about.html': '关于我们',
        },
        '/zh-HK/': {
            '': '首頁',
            'products/irita.html': 'IRITA-核心產品',
            'products/iritahub.html': 'IRITA HUB-核心產品',
            'products/nftapplication.html': 'NFT 應用-核心產品',
            'applications/finance-trade.html': '應用場景',
            'about.html': '關於我們',
        },
        '/en/': {
            '': 'Home',
            'products/irita.html': 'IRITA-Products',
            'products/iritahub.html': 'IRITA HUB-Products',
            'products/nftapplication.html': 'NFT 应用-Products',
            'applications/finance-trade.html': 'Solutions',
            'about.html': 'About Us',
        }
    }
}

const PRO_TITLE = {
    inland: '边界智能-BIANJIE.AI',
    international: 'BIANJIE.AI Global'
}

const SEO_META = {
    inland: {
        '/zh-CN/': [
            {
                name: 'name',
                nameValue: 'keywords',
                content: 'content',
                contentDesc: '上海边界智能,边界智能,边界智能-BIANJIE.AI,上海边界,上海边界智能科技有限公司,边界智能区块链,边界区块链,边界智能官网,上海边界官网,BIANJIEAI,bianjieai,边界智能跨链服务'
            },
            {
                name: 'name',
                nameValue: 'baidu-site-verification',
                content: 'content',
                contentDesc: 'CadgsdV9bv'
            },
            {
                name: 'name',
                nameValue: 'google-site-verification',
                content: 'content',
                contentDesc: 'Y1zz3l93YMcsFRVcKcGM9KmdE3wukv8KiJucw0xpC9M'
            },
            {
                name: 'name',
                nameValue: '360-site-verification',
                content: 'content',
                contentDesc: 'KXEyCmQU'
            }
        ],
        '/zh-HK/': [
            {
                name: 'name',
                nameValue: 'keywords',
                content: 'content',
                contentDesc: '上海边界智能,边界智能,边界智能-BIANJIE.AI,上海边界,上海边界智能科技有限公司,边界智能区块链,边界区块链,边界智能官网,上海边界官网,BIANJIEAI,bianjieai,边界智能跨链服务'
            },
            {
                name: 'name',
                nameValue: 'baidu-site-verification',
                content: 'content',
                contentDesc: 'CadgsdV9bv'
            },
            {
                name: 'name',
                nameValue: 'google-site-verification',
                content: 'content',
                contentDesc: 'Y1zz3l93YMcsFRVcKcGM9KmdE3wukv8KiJucw0xpC9M'
            },
            {
                name: 'name',
                nameValue: '360-site-verification',
                content: 'content',
                contentDesc: 'KXEyCmQU'
            }
        ],
        '/en/': [
            {
                name: 'name',
                nameValue: 'keywords',
                content: 'content',
                contentDesc: '上海边界智能,边界智能,边界智能-BIANJIE.AI,上海边界,上海边界智能科技有限公司,边界智能区块链,边界区块链,边界智能官网,上海边界官网,BIANJIEAI,bianjieai,边界智能跨链服务'
            },
            {
                name: 'name',
                nameValue: 'baidu-site-verification',
                content: 'content',
                contentDesc: 'CadgsdV9bv'
            },
            {
                name: 'name',
                nameValue: 'google-site-verification',
                content: 'content',
                contentDesc: 'Y1zz3l93YMcsFRVcKcGM9KmdE3wukv8KiJucw0xpC9M'
            },
            {
                name: 'name',
                nameValue: '360-site-verification',
                content: 'content',
                contentDesc: 'KXEyCmQU'
            }
        ]
    },
    international: {
        '/zh-CN/': [
            {
                name: 'name',
                nameValue: 'keywords',
                content: 'content',
                contentDesc: '上海边界智能,边界智能,边界智能-BIANJIE.AI,上海边界,上海边界智能科技有限公司,边界智能区块链,边界区块链,边界智能官网,上海边界官网,BIANJIEAI,BIANJIE.AI Global,bianjieai,边界智能跨链服务,跨链,金融科技服务,金融技术服务,API 服务,区块链数字银行,区块链底层技术服务'
            },
            {
                name: 'name',
                nameValue: 'baidu-site-verification',
                content: 'content',
                contentDesc: 'codeva-ckjBeKhBY7'
            },
            {
                name: 'name',
                nameValue: 'google-site-verification',
                content: 'content',
                contentDesc: 'TnFxNEcibw4ZV90lTXzB0jtxu8R9LT24jd0NaxxNEJc'
            },
            {
                name: 'name',
                nameValue: '360-site-verification',
                content: 'content',
                contentDesc: '6eee4b62bc60152804004a038c8ac1bd'
            }
        ],
        '/zh-HK/': [
            {
                name: 'name',
                nameValue: 'keywords',
                content: 'content',
                contentDesc: '上海邊界智能,邊界智能,邊界智能-BIANJIE.AI,上海邊界,上海邊界智能科技有限公司,邊界智能區塊鏈,邊界區塊鏈,邊界智能官網,上海邊界官網,BIANJIEAI,BIANJIE.AI Global,bianjieai,邊界智能跨鏈服務,跨鏈,金融科技服務,金融技術服務,API 服務,區塊鏈數字銀行,區塊鏈底層技術服務'
            },
            {
                name: 'name',
                nameValue: 'baidu-site-verification',
                content: 'content',
                contentDesc: 'codeva-ckjBeKhBY7'
            },
            {
                name: 'name',
                nameValue: 'google-site-verification',
                content: 'content',
                contentDesc: 'TnFxNEcibw4ZV90lTXzB0jtxu8R9LT24jd0NaxxNEJc'
            },
            {
                name: 'name',
                nameValue: '360-site-verification',
                content: 'content',
                contentDesc: '6eee4b62bc60152804004a038c8ac1bd'
            }
        ],
        '/en/': [
            {
                name: 'name',
                nameValue: 'keywords',
                content: 'content',
                contentDesc: '上海邊界智能,邊界智能,邊界智能-BIANJIE.AI,上海邊界,上海邊界智能科技有限公司,邊界智能區塊鏈,邊界區塊鏈,邊界智能官網,上海邊界官網,BIANJIEAI,BIANJIE.AI Global,bianjieai,邊界智能跨鏈服務,跨鏈,金融科技服務,金融技術服務,API 服務,區塊鏈數字銀行,區塊鏈底層技術服務'
            },
            {
                name: 'name',
                nameValue: 'baidu-site-verification',
                content: 'content',
                contentDesc: 'codeva-ckjBeKhBY7'
            },
            {
                name: 'name',
                nameValue: 'google-site-verification',
                content: 'content',
                contentDesc: 'TnFxNEcibw4ZV90lTXzB0jtxu8R9LT24jd0NaxxNEJc'
            },
            {
                name: 'name',
                nameValue: '360-site-verification',
                content: 'content',
                contentDesc: '6eee4b62bc60152804004a038c8ac1bd'
            }
        ]
    }
}

const OG_CONTENT = {
    inland: [
        ['meta', { property: 'og:image', content: 'https://www.bianjie.ai/resources/Bianjie/Bianjie-Logo-Share.png' }],
		['meta', { property: 'og:title', content: '边界智能-BIANJIE.AI' }],
		[
			'meta',
			{ property: 'og:description', content: '上海边界智能专注于区块链、大数据相关产品技术研发、应用平台建设和解决方案咨询的高科技公司和国家高新技术企业。以区块链跨链、隐私计算及大数据分析技术创新为核心，自主研发了安全可控、符合国密标准、支持下一代分布式商业系统构建的企业联盟链 IRITA 产品系列。' },
		]
    ],
    international: [
        ['meta', { property: 'og:image', content: 'https://storage.googleapis.com/bianjieai_asia_resources/blockbeat/share_logo.jpg' }],
		['meta', { property: 'og:title', content: 'BIANJIE.AI Global' }],
		[
			'meta',
			{ property: 'og:description', content: 'BIANJIE.AI Global 是⼀家專注於區塊鏈技術及應用創新、全球領先的區塊鏈技術及應用服務商。BIANJIE.AI Global 與全球夥伴深度合作，在數字金融、跨境貿易、跨鏈服務、元宇宙等領域共同推進創新技術落地應用，服務全球實體經濟。' },
		]
    ]
}

module.exports = {
    ENV_INLAND_INTERNATIONAL,
    LANG_OPTIONS,
    EDITION_NAV,
    EDITION_COMPANY,
    CONTACT_US_TITLE,
    CONTACT_US,
    COPY_TEXT,
    SCAN_CODE_FOLLOW_US,
    COPYRIGHT_RECORD,
    ADVANTAGES_WIDTH,
    ADVANTAGES_HEIGHT,
    DOM_TITLE,
    PRO_TITLE,
    SEO_META,
    OG_CONTENT
}