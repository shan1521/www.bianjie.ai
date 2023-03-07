<template>
    <div class="footer_container">
        <div class="footer_content_top">
            <div class="top_content">
                <div class="top_content_container">
                    <div class="content_left">
                        <div class="left_img" :class="{left_img_inter: edition}">
                            <img
                                :src="getDiffEditionImg()"
                                alt=""
                                class="img"
                            />
                        </div>
                    </div>
                    <div class="content_right">
                        <div class="total">
                            <span class="total_title">{{ companyInfo?.title }}</span>
                            <div class="company_info" v-for="(item, index) in companyInfo?.content" :key="index">
                                <a v-if="item.href" class="company_link" :href="item.href" target="_blank">{{ item.label }}</a>
                                <router-link v-if="item.route" class="company_link" :to="item.route">{{ item.label }}</router-link>
                            </div>
                        </div>
                        <div class="contact">
                            <span class="contact_title">{{ contactUSTitle }}</span>
                            <div class="contact_us" v-for="(item, index) in contactUS" :key="index">
                                <ClipCopy v-if="item.copy" class="contact_item" :copyText="item.label" :copySign="copyText" />
                                <a
                                    v-else-if="item.href"
                                    class="contact_item"
                                    :href="item.href"
                                    target="_self"
                                    rel="noopener noreferrer"
                                >
                                    {{item.label}}
                                </a>
                                <span v-else class="contact_item">{{item.label}}</span>
                            </div>
                        </div>
                        <div class="focus">
                            <div class="qr_code">
                                <img
                                    src="../assets/home/qrcode_footer.png"
                                    alt=""
                                    class="qr_code_img"
                                />
                            </div>
                            <span class="focus_title">{{`· ${ scanCodeFollowUS } ·`}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer_content_bottom">
            <div class="bottom_content">
                <div class="bottom_content_container" :style="{'justify-content': edition ? 'center' : 'space-between'}">
                    <div class="copyright_content" v-for="(item, index) in copyrightInfo" :key="index">
                        <a
                            v-if="item.href"
                            :href="item.href"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            {{ item.label }}
                        </a>
                        <span v-else>{{ item.label }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ClipCopy from './Common/ClipCopy.vue';
import { getLocalesFooter, getCurrentEdition } from '../util';
import footerInlandPng from '../assets/home/logo_footer.png';
import footerInterPng from '../assets/home/logo_footer_inter.png';
export default {
    name: "Footer",
    data() {
        return {
            footerInfo: {},
            edition: getCurrentEdition()
        }
    },
    computed: {
        companyInfo() {
            return this.footerInfo.companyInfo;
        },
        contactUSTitle() {
            return this.footerInfo.contactUSTitle;
        },
        contactUS() {
            return this.footerInfo.contactUS;
        },
        copyText() {
            return this.footerInfo.copyText;
        },
        scanCodeFollowUS() {
            return this.footerInfo.scanCodeFollowUS;
        },
        copyrightInfo() {
            return this.footerInfo.copyrightInfo;
        }
    },
    methods: {
        getDiffEditionImg() {
            const img = this.edition ? footerInterPng : footerInlandPng;
            return img;
        }
    },
    mounted() {
        this.footerInfo = getLocalesFooter(this, this.$store.state.currentLang);
    },
    watch: {
        '$store.state.currentLang': {
            handler(newLang) {
                this.footerInfo = getLocalesFooter(this, newLang);
            },
            immediate: true,
            deep: true
        }
    },
    components: {
        ClipCopy
    }
};
</script>

<style lang='stylus' scoped>
.footer_container {
    width: 100%;
    height: auto;
    flex: 0 0 auto;

    .footer_content_top {
        width: 100%;
        background: #061939;

        @media (max-width: 768px) {
            height: auto;
            line-height: 2.4rem;
        }

        .top_content {
            box-sizing: border-box;
            padding: 4.8rem 0;
            margin: 0 auto;
            max-width: $contentWidth;
            height: 100%;

            .top_content_container {
                display: flex;
                justify-content: space-between;
                margin: 0 auto;
                max-width: 100rem;
                @media (max-width: 1096px) {
                    box-sizing: border-box;
                    padding-left: 4.8rem;
                    padding-right: 4.8rem;
                }

                @media (max-width: 840px) {
                    flex-direction: column;
                    align-items: center;
                }

                .content_left {
                    .left_img {
                        width: 17.9rem;
                        height: 6rem;

                        img {
                            display: block;
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .left_img_inter {
                        width: 18.1rem;
                        height: 4.8rem;
                    }
                }

                .content_right {
                    display: flex;
                    font-size: $fontSize14;

                    @media (max-width: 840px) {
                        margin-top: 6rem;
                    }
                    @media (max-width: 580px) {
                        margin-top: 3.2rem;
                        justify-content: space-between;
                    }

                    .total {
                        display: flex;
                        flex-direction: column;

                        @media (max-width: 580px) {
                            margin-top: 2.4rem;
                            align-items: center;
                        }

                        .total_title {
                            font-size: $fontSize14;
                            font-weight: $fontWeight600;
                            color: #fff;
                            line-height: 2.4rem;

                            &::after {
                                content: '';
                                display: block;
                                margin-top: 0.8rem;
                                width: 5.6rem;
                                height: 0.1rem;
                                background: rgba(255, 255, 255, 0.4);
                            }
                            @media (max-width: 580px) {
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                            }
                        }
                        .company_info {
                            margin-top: 1.2rem;
                            &:fitst-child {
                                margin-top: 1.5rem;
                            }

                            .company_link {
                                font-size: $fontSize14;
                                font-weight: $fontWeight400;
                                color: $whiteColorOpacity;
                                line-height: 2.4rem;
                                cursor: pointer;
                                white-space: nowrap;
                            }
                        }
                    }

                    .contact {
                        margin-left: 10rem;
                        display: flex;
                        flex-direction: column;
                        @media (max-width: 1096px) {
                            margin-left: 6rem;
                        }

                        @media (max-width: 580px) {
                            margin-top: 2.4rem;
                            margin-left: 4.8rem;
                            align-items: center;
                        }

                        .contact_title {
                            font-size: $fontSize14;
                            font-weight: $fontWeight600;
                            color: #fff;
                            line-height: 2.4rem;

                            &::after {
                                content: '';
                                display: block;
                                margin-top: 0.8rem;
                                width: 5.6rem;
                                height: 0.1rem;
                                background: rgba(255, 255, 255, 0.4);
                            }
                            @media (max-width: 580px) {
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                            }
                        }
                        
                        .contact_us {
                            margin-top: 1.2rem;
                            &:first-child {
                                margin-top: 1.5rem;
                            }

                            .contact_item {
                                font-size: $fontSize14;
                                font-weight: $fontWeight400;
                                color: $whiteColorOpacity;
                                line-height: 2.4rem;
                                white-space: nowrap;
                            }
                        }
                    }

                    .focus {
                        margin-left: 10rem;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        @media (max-width: 768px) {
                            margin-left: 9rem;
                        }
                        @media (max-width: 580px) {
                            display: none;
                        }
                        

                        .qr_code {
                            width: 13.6rem;
                            height: 13.6rem;

                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }

                        .focus_title {
                            margin-top: 0.8rem;
                            font-size: $fontSize14;
                            font-weight: $fontWeight400;
                            color: #fff;
                            line-height: 2.4rem;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }

    .footer_content_bottom {
        width: 100%;
        height: 4.8rem;
        color: rgba(255, 255, 255, 0.75);
        background: #1C2D49;
        font-size: $fontSize14;
        font-weight: $fontWeight400;

        @media (max-width: 1200px) {
            box-sizing: border-box;
            padding: 0 4.8rem;
        }

        @media (max-width: 768px) {
            padding: 0 1.6rem;
            height: auto;
            line-height: 3rem;
        }

        .bottom_content {
            margin: 0 auto;
            max-width: $contentWidth;
            height: 100%;

            .bottom_content_container {
                display: flex;
                align-items: center;
                margin: 0 auto;
                max-width: 87.6rem;
                height: 100%;

                @media (max-width: 768px) {
                    flex-direction: column;
                    text-align: center;
                }

                a {
                    color: rgba(255, 255, 255, 0.75);
                    cursor: pointer;
                }
            }
        }
    }
}
</style>