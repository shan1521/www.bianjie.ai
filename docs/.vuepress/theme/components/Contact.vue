<template>
    <div class="contact_container">
        <div class="contact_img">
            <img :src="contactUSImg" alt="" />
        </div>
        <div class="qrcode_container">
            <div class="qrcode">
                <img src="../assets/home/qrcode_footer.png" alt=""/>
            </div>
            <p class="qrcode_text">{{`· ${ scanCodeFollowUS } ·`}}</p>
            <div class="email_container">
                <img src="../assets/icon_yx.png" alt="" />
                <span>contact@bianjie.ai</span>
            </div>
        </div>
    </div>
</template>
<script>
import { getCurrentEdition, getLocalesFooter } from '../util';
import { LANG_OPTIONS } from '../constants';
import contact_cn from '../assets/contact.png';
import contact_hk from '../assets/contact_hk.png';
import contact_en from '../assets/contact_en.png';
const CONTACT_US_IMG = {
    '/zh-CN/': contact_cn,
    '/zh-HK/': contact_hk,
    '/en/': contact_en,
}

export default {
    name: "Contact",
    data() {
        return {
            footerInfo: {},
            contactUSImg: '',
            edition: getCurrentEdition()
        }
    },
    computed: {
        scanCodeFollowUS() {
            return this.footerInfo.scanCodeFollowUS;
        }
    },
    mounted() {
        this.footerInfo = getLocalesFooter(this, this.$store.state.currentLang);
    },
    watch: {
        '$store.state.currentLang': {
            handler(newLang) {
                this.contactUSImg = this.edition ? CONTACT_US_IMG[newLang] : CONTACT_US_IMG[LANG_OPTIONS[2].value];
                this.footerInfo = getLocalesFooter(this, newLang);
            },
            immediate: true,
            deep: true
        }
    }
};
</script>
<style lang='stylus' scoped>
.contact_container {
    position: fixed;
    right: 3.2rem;
    bottom: 11.2rem;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    z-index: 1;
    @media(max-width: 1100px) {
        right: 0.8rem;
    }
    @media(max-width: 500px) {
        display: none;
    }
    &:hover {
        .qrcode_container {
            display: block;
        }
    }
    .contact_img {
        width: 4rem;
        height: 13rem;
        img {
            height: 100%;
        }
    }
    .qrcode_container {
        display: none;
        position: absolute;
        right: 5.2rem;
        box-sizing: border-box;
        padding: 2rem;
        background: #fff;
        box-shadow: 0 0 1.2rem 0 rgba(7, 24, 78, 0.08);
        border-radius: 0.4rem;
        border: 0.1rem solid #E1E5F4;
        .qrcode {
            width: 17rem;
            height: 17rem;
            img {
                height: 100%;
            }
        }
        .qrcode_text {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 0.6rem;
            font-size: $fontSize14;
            font-weight: $fontWeight400;
            color: #000000;
            line-height: 2.4rem;
            text-align: center;
            &::after {
                content: '';
                display: block;
                margin-top: 1.2rem;
                width: 12rem;
                height: 0.1rem;
                background: rgba(0, 0, 0, 0.1);
            }
        }
        .email_container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 1.1rem;
            font-size: $fontSize14;
            font-weight: $fontWeight400;
            color: #000000;
            line-height: 2.4rem;
            img {
                margin-right: 0.8rem;
                width: 1.7rem;
                height: 1.2rem;
            }
        }
    }
}
</style>