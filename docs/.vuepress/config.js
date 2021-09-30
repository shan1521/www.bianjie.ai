module.exports = {
    title: '边界智能-BIANJIE.AI',
    description: 'bianjie.ai',
    base: '/',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { name: 'keywords', content: '上海边界智能科技有限公司,上海边界智能,边界智能,边界科技,BIANJIE.AI,bianjie.ai,IRITA,irita,IRITA HUB,边界区块链,边界智能区块链,边界智能文昌链,文昌链 NFT,文昌链' }],
        ['link', { name: 'description', content: '上海边界智能专注于区块链、大数据相关产品技术研发、应用平台建设和解决方案咨询的高科技公司和国家高新技术企业。以区块链跨链、隐私计算及大数据分析技术创新为核心，自主研发了安全可控、符合国密标准、支持下一代分布式商业系统构建的企业联盟链 IRITA 产品系列。' }],
        ['link', { name: 'baidu-site-verification', content: 'CadgsdV9bv' }],
        ['link', { name: 'google-site-verification', content: 'Y1zz3l93YMcsFRVcKcGM9KmdE3wukv8KiJucw0xpC9M' }],
        ['link', { name: '360-site-verification', content: 'KXEyCmQU' }],
        ['meta', {property:'og:image',content:'https://www.bianjie.ai/resources/Bianjie/Bianjie-Logo-Vertical-White.png'}],
        ['meta', {property:'og:title',content:'边界智能-BIANJIE.AI'}],
        ['meta', {property:'og:description',content:'上海边界智能专注于区块链、大数据相关产品技术研发、应用平台建设和解决方案咨询的高科技公司和国家高新技术企业。以区块链跨链、隐私计算及大数据分析技术创新为核心，自主研发了安全可控、符合国密标准、支持下一代分布式商业系统构建的企业联盟链 IRITA 产品系列。'}],
        ['meta', {name:'viewport',content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0'}]
    ],
    themeConfig: {
        logo: '',
        search: false,
        navbar: false,
        nav: [
            { text: '首页', link: '/' },
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
                                intro: '区块链跨链服务枢纽',
                                route: '/products/IRITAHUB'
                            },
                            {
                                abbreviation: 'IRITA OPB',
                                intro: '基于智能合约的开放联盟链产品',
                                route: '/products/IRITAOPB'
                            },
                            {
                                abbreviation: 'BSN 文昌链',
                                intro: '基于 IRITA 的开放联盟链',
                                link: 'https://bsn-wenchang.bianjie.ai/'
                            },
                        ]
                    },
                    {
                        icon: 'icon-yingyongceng',
                        type: '区块链应用层技术产品',
                        productList: [
                            {
                                abbreviation: 'IRITA BEAN',
                                intro: '保护数据隐私的数据共享平台',
                                route: '/products/IRITABEAN'
                            },
                            {
                                abbreviation: 'IRITA DA',
                                intro: '资产数字化确权及交换平台',
                                route: '/products/IRITADA'
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
                        link: '/applications/e-licence'
                    },
                    {
                        icon: 'icon-tan', 
                        scene: '碳中和',
                        text: '碳核查',
                        link: '/applications/C-trading'
                    },
                    {
                        icon: 'icon-banquan', 
                        scene: '文创与版权',
                        text: '一体化数字艺术品',
                        link: '/applications/digital-art'
                    },
                    {
                        icon: 'icon-wulianwang', 
                        scene: '工业互联网及物联网',
                        text: '物联网可信数据采集',
                        link: '/applications/datacollection'
                    },
                    {
                        icon: 'icon-jinrong', 
                        scene: '金融',
                        text: '供应链金融',
                        link: '/applications/trade-finance'
                    },
                    {
                        icon: 'icon-yiliao', 
                        scene: '医疗健康',
                        text: '电子处方流转',
                        link: '/applications/e-prescription-circulation'
                    },
                ]
            },
            { text: '企业动态', link: '/news' },
            { text: '合作伙伴', link: '/partners' },
            { text: '关于边界', link: '/about' },
            { text: '了解更多', link: '/download', isRight: true, target: '_blank' },
        ],
    },
}