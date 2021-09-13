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
                    { text: '智慧政务', link: '/applications/e-licence' },
                    { text: '碳中和', link: '/applications/C-trading' },
                    { text: '文创与版权', link: '/applications/digital-art' },
                    { text: '工业互联网及物联网', link: '/applications/datacollection' },
                    { text: '供应链金融', link: '/applications/trade-finance' },
                    { text: '医疗健康', link: '/applications/e-prescription-circulation' },
                ]
            },
            { text: '企业动态', link: '/news' },
            { text: '合作伙伴', link: '/partners' },
            { text: '关于边界', link: '/about' },
            { text: '了解更多', link: '/download', isRight: true, target: '_blank' },
        ],
    },
}