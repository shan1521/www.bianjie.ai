---
{
    layout: Layout,
    isNewHome: true,
    title: 首页,
    homeContent: [
        {
            img: banner_home_1.png,
            title: 边界智能 · 链动未来,
            subTitle: 区块链和大数据技术服务专家
        },
        {
            img: banner_home_2.png,
            title: · IRITA ·,
            subTitle: 支持下一代分布式商业系统的联盟链产品线,
            moreText: 前往官网
        },
        {
            img: banner_home_3.png,
            title: 秉持专业 · 追求卓越 · 开放合作,
            subTitle: 成为全球备受尊崇的区块链创新团队，为合作伙伴及行业创造深远价值
        },
    ],
    bsnWenchangchain: {
        description: BSN 文昌链是 BSN 基于 IRITA 打造，具备全生态商业服务能力的开放联盟链,
        moreText: 前往上链
    },
    advantageContent: {
        title: 核心能力与优势,
        advList: [
            {
                img: adv_first.png,
                intro: 成熟创新的区块链产品支持高效开发链改应用,
                description: 支持保护隐私的大数据加密共享，实用性极强的链上链下系统交互能力，灵活的资产数字化建模与交换支持
            },
            {
                img: adv_second.png,
                intro: 前沿技术研发及分布式商业综合技术集成实力,
                description: 2017 年开始深耕跨链技术、构建互联网级区块链网络的核心技术、深入实践大数据隐私保护和授权交换技术
            },
            {
                img: adv_third.png,
                intro: 针对行业及业务场景深度融合与咨询定制能力,
                description: 多年企业服务深耕，成熟的商业咨询团队，对复杂分布式商业系统的深入实践
            },
            {
                img: adv_forth.png,
                intro: 与国内外行业领袖围绕生态发展达成深度合作,
                description: 与多家行业优秀协会组织及企业合作；在政务、金融、医疗等应用领域与国内外行业优秀企业建立合作关系
            },
        ]
    },
    serviceContent: {
        title: 产品与服务,
        iritaContent: {
            title: IRITA - 支持下一代分布式商业系统的联盟链产品线,
            subTitle: IRITA 产品线中各个子产品具有模块化的架构和不同的功能特点，可以根据不同业务场景高效打造不同行业应用
        },
        productContent: [
            {
                icon: IRITACE.png,
                name: IRITA CE,
                intro: 开源版本,
                description: IRITA Community Edition  属于开源版本，可以供开发者学习、快速上手熟悉 IRITA 的体系架构、并部署行业验证应用系统等,
                moreText: 开源社区 GitHub,
                link: https://github.com/bianjieai/irita,
                imgName: IRITACE_banner.png
            },
            {
                icon: IRITAHUB.png,
                name: IRITA HUB,
                intro: 异构区块链跨链服务枢纽,
                description: 基于先进的跨链技术、IBC 协议和 Tendermint 容错共识机制，支持联盟链、公链和链外企业传统系统间的可信计算调用及数据交互，支持跨链资产交换/转移、跨链数据安全共享和跨链服务调用,
                moreText: 了解更多,
                route: /products/iritahub,
                imgName: IRITAHUB_banner.png
            },
            {
                icon: IRITAOPB.png,
                name: IRITA OPB,
                intro: 基于智能合约的开放联盟链,
                description: 支持智能合约应用开发的开放许可应用链，基于 IRITA 的成熟技术框架，联合联盟伙伴提供低成本分布式账本服务，提供安全丰富的区块链功能和接口，以应用服务平台形式支持分布式商业系统应用快速开发、部署及运营,
                moreText: 了解更多,
                route: /products/iritaopb,
                imgName: IRITAOPB_banner.png
            },
            {
                icon: IRITABEAN.png,
                name: IRITA BEAN,
                intro: 保护数据隐私的数据共享平台,
                description: 专注于大数据隐私保护和边缘计算分析的产品，集成主流开源隐私计算框架，实现了大数据多层次授权共享、多方隐私保护查询、多方联盟学习等能力；支持对数据和业务流程全生命周期进行监管，实现数据隐私保护及可信流转。可用于物联网、医疗健康等数据共享管理平台,
                imgName: IRITABEAN_banner.png
            },
            {
                icon: IRITADA.png,
                name: IRITA DA,
                intro: 资产数字化确权及交换平台,
                description: 专注于支持 NFT 的登记、确权及可信交换的产品；支持实体资产在链上的数字化建模和全生命周期管理；实现智能合约驱动实体经济相关流程的自动化运行，降低沟通与业务运营成本,
                imgName: IRITADA_banner.png
            },
        ],
        consult: {
            title: 咨询与技术服务,
            description: 基于全球先进的区块链和大数据综合技术集成能力，结合企业业务场景需求制定定制化解决方案咨询和技术实施。
        },
        moreText: 前往官网,
        chatWithUs: 联系我们
    },
    scenesContent: {
        title: 多场景解决方案,
        scenesList: [
            {
                iconName: zhihuizhengwu.png,
                title: 智慧政务,
                intro: [
                    {text: 加强数据监管},
                    {text: 推动信息建设},
                    {text: 发展可信社会},
                ],
                description: 区块链技术结合智慧政务，促进政务数据互通共享，提升跨部门、跨地区、跨层级协作效率，优化政务服务质量，简化企业、群众办理业务的流程，增强政府公信力,
                route: /applications/e-licence
            },
            {
                iconName: tanzhonghe.png,
                title: 碳中和,
                intro: [
                    {text: 资产数字化建模},
                    {text: 可视化溯源监控},
                    {text: 多方数据安全共享},
                ],
                description: 通过资产数字化建模，建立健全碳排放数据、碳资产配额、碳交易等链上资产管理，辅助政府科学决策和碳中和治理机制，推进政府在碳中和管理过程中的透明化、可信化以及治理模式创新化、精准化，决策科学化、高效化。,
                route: /applications/C-trading
            },
            {
                iconName: shuzihuazichan.png,
                title: 文创与版权,
                intro: [
                    {text: 保护原创权益},
                    {text: 重塑版权价值},
                    {text: 便捷高效维权},
                ],
                description: 结合区块链与 IoT 技术，开展商品品质溯源机制建设，形成生产加工监管追溯体系，实现全产业链生产质量可追溯。,
                route: /applications/digital-art
            },
            {
                iconName: gongyinglianjinrong.png,
                title: 供应链金融,
                intro: [
                    {text: 资产拆分转让},
                    {text: 企业信用传递},
                    {text: 物权转移记录},
                ],
                description: 利用区块链，核心企业信用上链传递后，中小企业可以使用核心企业的信贷授信额度，降低融资成本，提升融资效率。,
                route: /applications/trade-finance
            },
        ],
        moreText: 了解更多
    },
    partnerContent: {
        title: 合作伙伴,
        subTitle: 开放合作 携手共进 共同推动可信区块链技术落地与发展,
        fieldsList: [
            {
                fieldName: 行业生态,
                partnerList: [
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/industry_ecology/wx_logo.png},
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/industry_ecology/xwlzb_logo.png},
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/industry_ecology/bsn_logo.png},
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/industry_ecology/casme_logo.png},
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/industry_ecology/tbi_logo.png},
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/industry_ecology/tc601.png},
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/industry_ecology/cie_logo.png},
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/industry_ecology/shbta_logo.png},
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/industry_ecology/jxm_logo.png},
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/industry_ecology/shso_logo.png},
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/industry_ecology/dida.png},
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/industry_ecology/ccid_logo.png},
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/industry_ecology/lt_logo.png},
                ]
            },
            {
                fieldName: 金融领域,
                partnerList: [
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/financial_field/ADB_logo.jpg},
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/financial_field/dfi_logo.png},
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/financial_field/ode_logo.png},
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/financial_field/zcbri_logo.png},
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/financial_field/lg_logo.png},
                ]
            },
            {
                fieldName: 数字贸易,
                partnerList: [
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/digital_assets/SLZZ_logo.png},
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/digital_assets/hwj_logo.png},
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/digital_assets/xdkj_logo.png},
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/digital_assets/sykj_logo.png},
                ]
            },
            {
                fieldName: 医疗领域,
                partnerList: [
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/medical_field/xkl_logo.png},
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/medical_field/nxyl_logo.png},
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/medical_field/rhdk_logo.png},
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/medical_field/pdwszyzx_logo.png},
                ]
            },
            {
                fieldName: 人工智能与物联网,
                partnerList: [
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/ai_internet/xjkj_logo.png},
                ]
            },
            {
                fieldName: 全球前沿技术,
                partnerList: [
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/technology/cosmos_logo.png},
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/technology/tendermint_logo.png},
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/technology/irisnet_logo.png},
                    {src: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/partners/technology/chainlink_logo.png},
                ]
            },
        ]
    },
    dynamicContent: {
        title: 企业动态,
        mostImportant: {
            imgName: https://www.bianjie.ai/resources/Bianjie/BJHOME-IMAGE/home-news/BSN-wenchang_chain.png,
            title: 边界智能打造并上线首批 BSN 开放联盟链「文昌链 IRITA OPB」,
            date: '2021-01-31',
            intro: 边界智能基于其自主研发的安全可控的企业级联盟链 IRITA 系列产品，打造上线了首批 BSN 开放联盟链「文昌链  IRITA OPB」，以 BaaS 形式让开发者/中小企业直接专注于应用层业务逻辑的实现和部署，从而更好的满足中小企业以更具成本效益的方式快速开发和部署分布式商业应用 DBApp 的需求。,
            link: https://mp.weixin.qq.com/s/F0QEBBG1uDVDWAEQDXMPBg,
            route: ,
        },
        dynamicList: [
            {
                title: 丝路之舟与边界智能达成战略合作，共建联合国贸发会新型数字贸易基础设施,
                date: '2021-09-06',
                intro: 边界智能与中国丝路集团全资子公司丝路之舟就「基于区块链及大数据隐私保护技术的新一代数字贸易基础设施」达成战略合作，支持打造联合国贸发会（UNCTAD，联合国系统内唯一综合处理国家贸易与经济发展问题的国际经济组织）的新型数字贸易基础设施平台 DODR。,
                link: https://mp.weixin.qq.com/s/DZrPLe3J1hyeR1j_xGDOJQ,
                route: ,
            },
            {
                title: 厚积薄发！边界智能前沿区块链技术及解决方案屡次夺冠,
                date: '2021-07-05',
                intro: 在区块链技术和产业创新大有可为的 2021 年，边界智能凭借在 NFT、绿色金融、大数据隐私保护等方面的前沿技术实力和创新应用能力，在多项重量级的比赛中荣获冠军，荣获 2021 长三角（上海）区块链应用创新大赛成长组一等奖、2021 年南京创新周 · 江北新区数字金融创新大赛特等奖等。,
                link: ,
                route: /companynews/边界智能前沿区块链技术及解决方案屡次夺冠,
            },
            {
                title: 「文昌链  IRITA OPB」上的多样化分布式商业应用,
                date: '2021-09-06',
                intro: 基于「文昌链  IRITA OPB」，已有众多不同领域的分布式商业应用 DBApp 上线部署，包括基于 NFT 技术开发的票务管理应用「魔卡」，与南京壹证通共同打造的识蛛可信身份平台，都江堰审批局「智慧政务+区块链」政务服务底层区块链平台等；还将支持 IP.PUB 应用助推中国传统艺术品可信全球贸易。,
                link: ,
                route: /companynews/文昌链IRITAOPB上的多样化分布式商业应用,
            },
        ],
        moreText: 更多动态
    }
}

---

