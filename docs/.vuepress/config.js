module.exports = {
    title: '边界智能-BIANJIE.AI',
    description: 'bianjie.ai',
    base: '/',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        // [ 'meta', {name:'keywords',content:'IRITA,irita,IRITA HUB,IRITA OPB,文昌链,BSN开放联盟链,iService,IBC,跨链服务,边界智能区块链,边界科技,上海边界,边界区块链'}],
        // [ 'meta', {name:'description',content:''}],
        // [ 'meta', {name:'viewport',content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0'}]
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
                        icon: '', 
                        scene: '智慧政务',
                        text: '电子证照',
                        link: '/applications/e-licence'
                    },
                    {
                        icon: '', 
                        scene: '碳中和',
                        text: '碳核查',
                        link: '/applications/C-trading'
                    },
                    {
                        icon: '', 
                        scene: '文创与版权',
                        text: '一体化数字艺术品',
                        link: '/applications/digital-art'
                    },
                    {
                        icon: '', 
                        scene: '工业互联网及物联网',
                        text: '物联网可信数据采集',
                        link: '/applications/datacollection'
                    },
                    {
                        icon: '', 
                        scene: '金融',
                        text: '供应链金融',
                        link: '/applications/trade-finance'
                    },
                    {
                        icon: '', 
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