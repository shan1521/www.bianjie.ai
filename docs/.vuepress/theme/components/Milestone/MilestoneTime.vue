<template>
    <div class="time_container">
        <div class="time_content_container">
            <div class="time_content">
                <div class="time_left">
                    <el-timeline>
                        <el-timeline-item
                            v-for="(year, index) in yearArr"
                            :key="index"
                            color="#0967E9"
                            @click.native="changeCurrentYear(index)"
                        >
                            <template slot="dot" :class="currentYear === index ? 'active_dot': ''">
                                <div class="circle" :class="currentYear === index ? 'circle_active' : ''"></div>
                            </template>
                            <span class="year" :class="currentYear === index ? 'active_year' : ''">{{ year }}</span>
                        </el-timeline-item>
                    </el-timeline>
                </div>
                <div class="time_right">
                    <ul class="time_wrap">
                        <li
                            class="time_item"
                            v-for="(timeline, index) in timelineContent"
                            :key="index"
                        >
                            <div class="year">{{ timeline.year }}</div>
                            <ul class="month_list">
                                <li
                                    class="month_item"
                                    v-for="(
                                        month, mIndex
                                    ) in timeline.monthList"
                                    :key="mIndex"
                                >
                                    <div class="month">{{ month.month }}月</div>
                                    <ul class="events">
                                        <li
                                            class="event_item"
                                            v-for="(
                                                event, eIndex
                                            ) in month.events"
                                            :key="eIndex"
                                        >
                                            <div class="event">
                                                {{ event.event }}
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MilestoneTime",
    props: ["timelineContent"],
    data(){
        return {
            currentYear: 0
        }
    },
    computed: {
        yearArr() {
            return this.timelineContent.map((item, index) => {
                return item.year;
            });
        },
    },
    methods: {
        changeCurrentYear(index) {
            this.currentYear = index;
        }
    }
};
</script>

<style lang="stylus">
.time_container {
    width: 100%;
    // height: 100%;
    background: #F5F6FB;

    .time_content_container {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 6.4rem 0 12rem;
        max-width: $contentWidth;
        height: 100%;

        .time_content {
            display: flex;
            align-items: flex-start;
            margin: 0 auto;
            max-width: 110.4rem;

            .time_left {
                box-sizing: border-box;
                margin-right: 2.4rem;
                padding: 2.4rem 1.7rem 0.5rem 1.6rem;
                max-width: 13.6rem;
                background: #EFF1FA;
                border-radius: 0.4rem;

                .el-timeline {
                    height: 100%;

                    .el-timeline-item {
                        padding-bottom: 4rem;
                        &:hover {
                            cursor: pointer;
                        }

                        &:last-child {
                            padding-bottom: 0;
                        }
                        .active_year {
                            color: #0967E9;
                        }

                        
                        .el-timeline-item__dot {
                            .circle {
                                width: 1.1rem;
                                height: 1.1rem;
                                border: 0.1rem solid #0967E9;
                                border-radius: 50%;
                                transform: translateX(-5%);
                            }
                            .circle_active {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                box-sizing: border-box;
                                width: 2.7rem;
                                height: 2.7rem;
                                border: 0.1rem solid #0967E9;
                                border-radius: 50%;
                                transform: translate(-25%, -25%);
                                &::before {
                                    content: '';
                                    display: inline-block;
                                    box-sizing: border-box;
                                    width: 1.1rem;
                                    height: 1.1rem;
                                    background: #0967E9;
                                    border-radius: 50%;
                                }
                            }
                        }

                        .el-timeline-item__wrapper {
                            top: 0;
                            transform: translateY(-25%);

                            .el-timeline-item__content {
                                font-size: $fontSize24;
                                font-weight: $fontWeight400;
                                color: rgba(0, 0, 0, 0.35);
                                line-height: 2.4rem;
                            }

                            .el-timeline-item__timestamp {
                                margin-top: 0;
                            }
                        }
                    }
                }
            }

            .time_right {
                box-sizing: border-box;
                padding: 4.8rem 6.4rem;
                height: 74.8rem;
                background: #fff;
                border-radius: 0.4rem;
                overflow-y: auto;

                &::-webkit-scrollbar {
                    display: none;
                }

                .time_wrap {
                    border-left: 0.1rem solid #D8D8D8;

                    .time_item {
                        margin-top: 3.2rem;

                        &:first-child {
                            margin-top: 0;
                        }

                        .year {
                            display: flex;
                            align-items: center;
                            font-size: $fontSize28;
                            font-weight: $fontWeight500;
                            color: #000;
                            line-height: 3.2rem;

                            &::before {
                                content: '';
                                display: inline-block;
                                margin-right: 2.5rem;
                                width: 0.4rem;
                                height: 3.2rem;
                                background: #0967E9;
                            }
                        }

                        .month_list {
                            margin-top: 3.2rem;
                            margin-left: 2.5rem;

                            .month_item {
                                display: flex;
                                margin-top: 1.6rem;

                                &:first-child {
                                    margin-top: 0;
                                }

                                .month {
                                    margin-right: 1.2rem;
                                    width: 3.1rem;
                                    font-size: $fontSize14;
                                    font-weight: $fontWeight500;
                                    color: #0967E9;
                                    line-height: 2.4rem;
                                    white-space: nowrap;
                                }

                                .events {
                                    font-size: $fontSize14;
                                    font-weight: $fontWeight400;
                                    color: rgba(0, 0, 0, 0.75);
                                    line-height: 2.4rem;
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