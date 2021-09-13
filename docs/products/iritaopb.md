---
{
    layout: Layout,
    isIritaOpb: true,
    title: IRITA OPB-核心产品,
    iritaopbTitleContent: {
        title: 开放联盟链产品 - IRITA OPB,
        subTitle: 符合中国监管合规要求 · 成熟公链底层技术框架 · 基于智能合约的开放联盟链产品,
        moreText: 了解更多
    },
    iritaopbIntroContent: {
        title: 产品简介,
        description: [
            {paragraph: IRITA OPB 是边界智能基于 IRITA 联盟链底层技术自主研发的一个基于智能合约的开放联盟链产品。目前已在 BSN 环境中部署，命名为文昌链，是 BSN 的首批开放联盟链之一。},
            {paragraph:  IRITA OPB 自主可控，支持 SM2 的多种国密算法，具备商业应用开发的身份管理、节点准入机制等功能；具备公网非信任环境下的跨链、跨中心系统能力；拥有数据隐私保护加密与授权共享能力；提供多样化服务接口，方便集成与二次开发。},
            {paragraph: IRITA HUB 的跨链机制采用了业界具有前沿创新性的 IBC + iService，其应用层协议 iService 模块能高效支持包括异构系统跨链、同构系统跨链和大数据存储层等在内的链上/链下/跨链应用层交互；跨链服务市场及治理。边界智能自主创新的相关技术已经提交专利申请，其底层协议的开源实现受到国内外业界认可。},
            {paragraph:  IRITA OPB 提供对节点部署的许可控制，满足中国市场的监管要求。采用类 BaaS 模式，为开发者提供丰富的链应用开发工具，能更好的满足中小企业以更具成本效益的方式快速开发和部署 DApp 及其他链上应用的需求。},
        ]
    },
    featuresContent: {
        title: 产品特点,
        featureList: [
            {
                title: 节点准入控制,
                description: IRITA OPB 基于可信任BSN根CA统一颁发的节点身份证书，结合节点标识白名单列表，在节点间 TLS 通信时进行节点身份认证
            },
            {
                title: 去中心化架构,
                description: 采用完全分布式的架构，对数据加密，计算和交互在加密后数据的多个计算节点之间独立完成，无中心控制节点，具备更强容灾与防攻击能力
            },
            {
                title: 多智能合约,
                description: IRITA OPB 既支持以Solidity语言为核心的EVM虚拟机，也支持 Cosmwasm 等多种智能合约，便于开发者根据自己的基础进行有针对性的选择
            },
            {
                title: IDE 支持,
                description: IRITA OPB 提供了多种IDE环境，支持不同类型智能合约，便于开发者快速地搭建智能合约开发环境，进行合约开发、编译、调试、测试和发布部署
            },
        ],
        exampleTitle: IRITA OPB 智能合约示例,
        exampleList: [
            {
                title: CosmWasm 智能合约示例,
                link: https://github.com/CosmWasm/cw-examples
            },
            {
                title: EVM NFT 智能合约示例,
                link: https://github.com/bianjieai/bsnhub-service-relayer/blob/master/test-consumers/fisco/NFTServiceConsumer/NFTServiceConsumer.sol
            },
        ]
    },
    processContent: {
        title: 上链流程,
        processList: [
            {
                iconName: zhucezhanghao.png,
                process: 注册账号，开通体验,
                description: 注册账号，登入控制台开通免费体验版，正式体验并使用开放联盟链
            },
            {
                iconName: heyuekaifa.png,
                process: 合约及业务应用开发,
                description: 可选择具体的合约语言进行智能合约开发，并基于自己的业务需求进行业务应用开发
            },
            {
                iconName: yingyongjieru.png,
                process: 合约安装，应用接入,
                description: 使用集成SDK，连接业务端和底层链平台，部署应用并发布上链
            }
        ],
        controlText: 前往控制台
    }
}
---