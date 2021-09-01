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
                text: '核心产品', link: '', items: [
                    { text: 'IRITA HUB', link: '/products/iritahub' },
                    { text: 'IRITA OPB', link: '/products/iritaopb' }
                ]
            },
            {
                text: '应用场景', link: '', items: [
                    { text: '智慧政务', link: '/application-scenarios/goverment' },
                    { text: '碳中和', link: '/application-scenarios/carbonneutral' },
                    { text: '文创与版权', link: '/application-scenarios/cultural' },
                    { text: '工业互联网及物联网', link: '/application-scenarios/net' },
                    { text: '金融', link: '/application-scenarios/finance' },
                    { text: '医疗健康', link: '/application-scenarios/health' },
                ]
            },
            { text: '企业动态', link: '/news' },
            { text: '合作伙伴', link: '/partners' },
            { text: '关于边界', link: '/about' },
            { text: '了解更多', link: '/download', isRight: true, target: '_blank' },
        ]
    },
}