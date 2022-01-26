<template>
    <div class="otherhonours_container">
        <div class="otherhonours_content_container">
            <div class="otherhonours_content">
                <div class="title">{{ otherHonoursContent.title }}</div>
                <el-timeline class="otherhonours_list">
                    <el-timeline-item
                        class="otherhonours_item"
                        v-for="(
                            yearHonours, index
                        ) in otherHonoursContent.otherHonoursList"
                        :key="index"
                        color="$highlightDetailColor"
                    >
                        <template slot="dot">
                            <div class="circle"></div>
                        </template>
                        <div class="year">{{ yearHonours.year }}</div>
                        <el-timeline class="month_list">
                            <el-timeline-item
                            v-for="(monthHonours, mIndex) in yearHonours.monthList"
                            :key="mIndex">
                                <div class="month">
                                    {{ monthHonours.month }}月
                                </div>
                                <ul class="honours_list">
                                    <li
                                        class="honours_item"
                                        v-for="(
                                            honours, hIndex
                                        ) in monthHonours.honours"
                                        :key="hIndex"
                                    >
                                        <div class="honours">
                                            {{ honours.honour }}
                                        </div>
                                    </li>
                                </ul>
                            </el-timeline-item>
                        </el-timeline>
                        <!-- <ul class="month_list">
                            <li
                                class="month_item"
                                v-for="(
                                    monthHonours, mIndex
                                ) in yearHonours.monthList"
                            >
                                <div class="month">
                                    {{ monthHonours.month }}
                                </div>
                            </li>
                        </ul> -->
                    </el-timeline-item>
                </el-timeline>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "OtherHonours",
    props: ["otherHonoursContent"],
    computed: {
        monthArr() {
            return this.otherHonoursContent.otherHonoursList.map(
                (yearHonours, index) => {
                    return yearHonours.monthList.map((item, index) => {
                        return item.month;
                    });
                }
            );
        },
    },
};
</script>

<style lang="stylus">
.otherhonours_container {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 4.8rem 0 9.6rem;
    width: 100%;
    height: 93.6rem;
    background: #F7F8FA url('../../assets/about/honour_global.png') no-repeat center / cover;

    .otherhonours_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
        height: 100%;
        @media (max-width: 1200px) {
            box-sizing: border-box;
            padding-left: 4.8rem;
            padding-right: 4.8rem;
        }
        @media (max-width: 400px) {
            padding-left: 1.6rem;
            padding-right: 1.6rem;
        }

        .otherhonours_content {
            margin: 0 auto;
            max-width: 96rem;

            .title {
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: $fontSize16;
                font-weight: $fontWeight600;
                color: #000;
                line-height: 2.4rem;

                &::after {
                    content: '';
                    display: block;
                    margin-top: 1.6rem;
                    width: 4rem;
                    height: 0.4rem;
                    background: $highlightDetailColor;
                }
            }
            .otherhonours_list {
                margin-top: 2.4rem;
                height: 72rem;
                overflow-y: scroll;
                scrollbar-color: transparent transparent;
                scrollbar-track-color: transparent;
                -ms-scrollbar-track-color: transparent;
                &::-webkit-scrollbar {
                    display: none;
                }
                .otherhonours_item {
                    position: relative;
                    &:last-child {
                        .el-timeline-item__tail {
                            display: block;
                            height: 90%;
                            @media (max-width: 768px) {
                                height: 92%;
                            }
                            @media (max-width: 375px) {
                                height: 93%;
                            }
                        }
                    }
                    .el-timeline-item__tail {
                        left: 10rem;
                        z-index: 99;
                    }
                    .el-timeline-item__dot {
                        box-sizing: border-box;
                        left: 10.1rem;
                        width: 2.4rem;
                        height: 2.4rem;
                        transform: translateX(-50%);
                        border: 0.2rem solid $highlightDetailColor;
                        border-radius: 50%;
                        z-index: 99;
                        .circle {
                            width: 1rem;
                            height: 1rem;
                            background: $highlightDetailColor;
                            border-radius: 50%;
                        }
                    }
                    .el-timeline-item__wrapper {
                        box-sizing: border-box;
                        padding-left: 0;
                    }
                    .year {
                        font-size: $fontSize32;
                        font-weight: $fontWeight500;
                        color: $highlightDetailColor;
                        line-height: 3.2rem;
                    }
                    .month_list { 
                        margin-top: 2.4rem;
                        .el-timeline-item {
                            margin-top: 1.6rem;
                            width: 100%;
                            &:last-child {
                                padding-bottom: 0;
                                .el-timeline-item__node {
                                    top: 56%;

                                }
                            }
                            
                            .month {
                                font-size: $fontSize16;
                                font-weight: $fontWeight600;
                                color: $highlightDetailColor;
                                line-height: 1.6rem;
                                white-space: nowrap;
                            }
                            .el-timeline-item__tail {
                                left: 10rem;
                                z-index: 99;
                            }
                            .el-timeline-item__node {
                                top: 50%;
                                left: 9.4rem;
                                transform: translateY(-115%);
                                background-color: #fff;
                                border: 0.1rem solid $highlightDetailColor;
                                z-index: 99;
                            }
                            .el-timeline-item__wrapper {
                                display: flex;
                                align-items: center;
                                box-sizing: border-box;
                                padding: 2.1rem 2.8rem;
                                max-width: 96rem;
                                min-height: 5.6rem;
                                background: #fff;
                                border-radius: 0.4rem;
                                .el-timeline-item__content {
                                    display: flex;
                                    justify-content: flex-start;
                                    align-items: center;
                                    .honours_list {
                                        margin-left: 7rem;
                                        .honours_item {
                                            margin-top: 1.8rem;
                                            font-size: $fontSize14;
                                            font-weight: $fontWeight400;
                                            color: rgba(0, 0, 0, 0.75);
                                            line-height: 2rem;
                                            &:first-child {
                                                margin-top: 0;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>