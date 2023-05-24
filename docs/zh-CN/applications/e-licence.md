---
{
    layout: Layout,
    isELicence: true,
    inland: {
        appTitleContent: {
            title: 区块链电子证照,
            subTitle: 加强数据共享，提升政务效率,
            bg_banner: government_banner
        },
        sceneStatusContent: {
            title: 场景现状及痛点,
            choose: 2,
            sceneStatusList: [
                {
                    text: 纸质证照使用不便,
                    description: 企业和群众到政务部门办事，需要携带大量纸质证件到不同部门重复提交验证，违背“让数据多跑路，让群众少跑路”的发展原则。同时，由于纸质证照易损坏丢失，补办流程繁杂，影响办事效率；纸质证照容易复制造假，查验难度大，大大降低了政务服务效率。
                },
                {
                    text: 传统电子证照数据质量不高,
                    description: 受区域、部门、技术条件及信息化建设不成熟等历史因素影响，传统电子证照源头多，数据格式不统一，部分数据不真实，数据管理分散。导致目前电子证照缺乏统一标准，数据可信性不足，数据同步难以实现，跨部门、跨区域查证验证困难。
                },
                {
                    text: 多方证照数据互通共享难度大,
                    description: 在数据产生部门、数据采集存储部门和数据使用部门之间，由于存在跨部门、跨层级可信协同问题，传统电子证照数据库在数据加密传输、源数据保护及可追溯等方面缺乏技术手段，导致数据调用审批流程复杂，责任不明确且难追究，使得多方证照数据互通共享难度大。
                },
                {
                    text: 证照数据安全性低，存在隐私泄露风险,
                    description: 电子证照中包含个人或企业的隐私数据及敏感信心，在未经主体授权和适当保护措施情况下对外使用或提供服务时，存在极大的安全性和隐私泄露风险。
                },
            ]
        },
        plansContent: {
            plansTitle: 方案简介,
            plansIntro: [
                {
                    intro: 利用区块链技术，可以有效采集和分析分散在各个政务部门孤立系统中存在的电子证照信息，解决传统证照办理事务中重复打印、流程繁琐、各部门单独审批、办证人费时费力的痛点，提供了一站式信息化办证验证解决方案，降低各部门运营成本，为社会组织、企业或个人提供可信化在线电子证照服务，为政府提供大数据共享和授权使用等服务，达到提高政务管理质量和政务服务效率的目的，提升电子证照应用水平和各政务部门信息化一体化建设。
                },
            ],
            productTitle: 方案优势,
            advantageList: [
                {
                    iconName: fuwujicheng.png,
                    advantageText: 高效服务集成,
                    description: 提供通用化面向服务端的链上接口，易于各办证机构系统接入，并基于 iService 服务开展业务审批与协作，减少智能合约开发，降低区块链使用门槛
                },
                {
                    iconName: shujugudao.png,
                    advantageText: 打通数据孤岛,
                    description: 集成可信第三方 CA 证书，提供可信统一数字身份，打通各部门间链上电子证照的唯一身份识别，实现存证验证的数据确权与互通共享
                },
                {
                    iconName: shanglianliuhen.png,
                    advantageText: 全程上链留痕,
                    description: 通过区块链技术实现电子证照发证、存证、审批、验证等各环节数据上链留痕，保证电子证照不可篡改、不可伪造，信息可溯，便于审计
                },
                {
                    iconName: yinsibaohu.png,
                    advantageText: 数据隐私保护,
                    description: 电子证照及审批信息加密存储及传输，只对授权方开放解密使用，保证数据隐私与信息安全，解决了数据鉴权变更、实时共享与安全复用之间的矛盾
                },
            ]
        },
        processContent: {
            title: 业务流程,
            src: e_licence.png,
        },
        coreFunctions: {
            title: 核心功能,
            coreList: [
                {
                    iconName: identity.png,
                    text: 身份认证,
                    description: 以 KYC 身份认证信息为基础，通过 DID 的形式建立链上可信数字身份。
                },
                {
                    iconName: applyregis.png,
                    text: 申请办证,
                    description: 通过统一办证入口，创建并上传实物证照并进行证照核验。
                },
                {
                    iconName: process_approval.png,
                    text: 业务流程核验审批,
                    description: 快速搭建专属的移动数据应用系统，实现链上审批，提升办事效率。
                },
                {
                    iconName: download.png,
                    text: 下载区块链电子证照,
                    description: 链上电子证照一键瞎下载调用，方便快捷，减少审批流程，提升办事效率。
                },
                {
                    iconName: history.png,
                    text: 历史数据查询及业务报表,
                    description: 轻松整合多源数据，形成全局数据视野,实现政务数据化智慧运营。
                },
                {
                    iconName: electronic_certificate.png,
                    text: 区块链电子证照核验,
                    description: 基于边界智能强大的区块链数据隐私保护共享技术，实现区块链电子证照快速核验使用。
                },
            ]
        },
        exampleContent: {
            title: 客户案例,
            example: {
                imgName: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/home-news/Electroniclicense.png,
                text: “ 智慧政务+区块链 ” 都江堰市行政审批局智慧政务在文昌链上线了,
                intro: “ 政务服务底层区块链平台 ” 应用项目是由都江堰区块链场景实验室的核心技术企业共同研发，边界智能承担了平台中“区块链电子证照系统”的搭建，该系统基于开放联盟链 “ 文昌链 ” 开发，也是“ 文昌链 ” 部署的首个政务应用。截至 3 月底，运用了区块链技术的都江堰市行政审批局 “ 智慧政务 + 区块链 ”政务服务底层区块链平台已完成搭建。,
                link: https://mp.weixin.qq.com/s/P8xaUOcgl3m4BATDcL-vgQ,
                route: ,
            },
            moreText: 查看详情
        }
    },
    international: {

    }
}
---