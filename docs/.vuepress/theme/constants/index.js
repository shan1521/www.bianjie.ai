const ENV_INLAND_INTERNATIONAL = {
    inland: 'inland',
    international: 'international'
}

const LANG_OPTIONS = [
    {
        label: 'English',
        value: '/en-US/'
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
        'en-US': [
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
        'en-US': [
            { text: 'Homepage', link: '/en-US/' },
            { 
                text: 'Core Products', link: '', 
                items: [
                    {
                        icon: 'icon-diceng',
                        type: 'Blockchain Infrastructure',
                        productList: [
                            {
                                abbreviation: 'IRITA',
                                intro: 'the Consortium Chain Product Line for Next-Generation Distributed Business',
                                route: '/en-US/products/irita'
                            },
                            {
                                abbreviation: 'IRITA HUB',
                                intro: 'the Interchain Service Hub for Heterogeneous Blockchains',
                                route: '/en-US/products/iritahub'
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
                            // todo shan intro 文案待修改為英文
                            {
                                abbreviation: 'MTO Box Global',
                                intro: 'MTO Box Global',
                                route: '/en-US/products/nftapplication'
                            },
                            {
                                abbreviation: 'Cross-Chain NFT Wallet',
                                intro: 'Cross-Chain NFT Wallet',
                                route: '/en-US/products/nftapplication'
                            },
                        ]
                    }
                ]
            },
            {
                text: 'Application Scenarios', link: '', 
                items: [
                    {
                        icon: 'icon-zhengwu', 
                        scene: 'Financial Services',
                        text: 'Asia Digital Bank',
                        link: '/en-US/applications/finance-trade'
                    },
                    {
                        icon: 'icon-kuajingmaoyi', 
                        scene: 'Cross-Border Trade',
                        text: 'DODR',
                        link: '/en-US/applications/finance-trade'
                    }
                ]
            },
            { text: 'About Us', link: '/en-US/about' }
        ]
    }
}

const EDITION_COMPANY = {
    inland: {
        'zh-CN': {
            title: '公司',
            content: [
                {
                    label: '边界 Global',
                    href: 'http://blockbeat.hk'
                },
                {
                    label: '企业动态',
                    route: '/zh-CN/news'
                },
                {
                    label: '关于我们',
                    route: '/zh-CN/about'
                }
            ]
        },
        'zh-HK': {
            title: '公司',
            content: [
                {
                    label: '边界 Global',
                    href: 'http://blockbeat.hk'
                },
                {
                    label: '企业动态',
                    route: '/zh-CN/news'
                },
                {
                    label: '关于我们',
                    route: '/zh-CN/about'
                }
            ]
        },
        'en-US': {
            title: '公司',
            content: [
                {
                    label: '边界 Global',
                    href: 'http://blockbeat.hk'
                },
                {
                    label: '企业动态',
                    route: '/zh-CN/news'
                },
                {
                    label: '关于我们',
                    route: '/zh-CN/about'
                }
            ]
        }
    },
    international: {
        'zh-CN': {
            title: '公司',
            content: [
                {
                    label: '边界中国',
                    href: 'https://www.bianjie.ai/'
                },
                {
                    label: '关于我们',
                    route: '/zh-CN/about'
                }
            ]
        },
        'zh-HK': {
            title: '公司',
            content: [
                {
                    label: 'BIANJIE China Portal',
                    href: 'https://www.bianjie.ai/'
                },
                {
                    label: '關於我們',
                    route: '/zh-HK/about'
                }
            ]
        },
        'en-US': {
            title: 'Company',
            content: [
                {
                    label: 'BIANJIE China Portal',
                    href: 'https://www.bianjie.ai/'
                },
                {
                    label: 'About Us',
                    route: '/en-US/about'
                }
            ]
        }
    }
}

const CONTACT_US_TITLE = {
    inland: {
        'zh-CN': '联系我们',
        'zh-HK': '联系我们',
        'en-US': '联系我们'
    },
    international: {
        'zh-CN': '联系我们',
        'zh-HK': '聯繫我們',
        'en-US': 'Contact Us'
    }
}

const CONTACT_US = {
    inland: [
        {
            label: 'contact@bianjie.ai'
        },
        {
            label: 'www.bianjie.ai',
            href: 'https://www.bianjie.ai/'
        }
    ],
    international: [
        {
            label: 'contact@bianjie.ai'
        },
        {
            label: 'http://blockbeat.hk',
            href: 'http://blockbeat.hk'
        }
    ]
}

const SCAN_CODE_FOLLOW_US = {
    inland: {
        'zh-CN': '扫码关注我们',
        'zh-HK': '扫码关注我们',
        'en-US': '扫码关注我们'
    },
    international: {
        'zh-CN': '扫码关注我们',
        'zh-HK': '掃碼關注我們',
        // todo shan 英文待替換
        'en-US': '掃碼關注我們'
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
        ]
    },
    international: {
        'zh-CN': [
            {
                label: `版权所有©${new Date().getFullYear()} 区块律动（香港）科技有限公司`
            }
        ]
    }
}
// 核心能力与优势处阴影需要基础值
const ADVANTAGES_WIDTH = 206;
const ADVANTAGES_HEIGHT = 20;

module.exports = {
    ENV_INLAND_INTERNATIONAL,
    LANG_OPTIONS,
    EDITION_NAV,
    EDITION_COMPANY,
    CONTACT_US_TITLE,
    CONTACT_US,
    SCAN_CODE_FOLLOW_US,
    COPYRIGHT_RECORD,
    ADVANTAGES_WIDTH,
    ADVANTAGES_HEIGHT
}
