const ENV_INLAND_INTERNATIONAL = {
    inland: 'inland',
    international: 'international'
}

const LANG_ROUTE = {
    zh: '/zh-CN/',
    hk: '/zh-HK/',
    en: '/en-US/',
}

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
        ]
    },
    international: {
        
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
        // todo 待未来添加国内版多语言参考
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
        },
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

// todo shan 根据 EDITION_COMPANY 内容更改 zh-HK en-US 的内容
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
    LANG_ROUTE,
    EDITION_NAV,
    EDITION_COMPANY,
    CONTACT_US_TITLE,
    CONTACT_US,
    SCAN_CODE_FOLLOW_US,
    COPYRIGHT_RECORD,
    ADVANTAGES_WIDTH,
    ADVANTAGES_HEIGHT
}
