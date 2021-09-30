<template>
    <div class="time_container">
        <div class="time_content_container">
            <div class="time_content">
                <div class="time_right">
                    <div class="time_right_content" ref="right">
                        <ul class="time_wrap" ref="timeList">
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
    </div>
</template>

<script>
export default {
    name: "MilestoneTime",
    props: ["timelineContent"],
};
</script>

<style lang="stylus">
.time_container {
    width: 100%;
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
            @media (max-width: 1150px) {
                box-sizing: border-box;
                padding-left: 4.8rem;
                padding-right: 4.8rem;
            }
            @media (max-width: 400px) {
                padding-left: 1.6rem;
                padding-right: 1.6rem;
            }


            .time_right {
                box-sizing: border-box;
                padding: 4.8rem 6.4rem;
                height: 74.8rem;
                background: #fff;
                border-radius: 0.4rem;
                @media (max-width: 768px) {
                    padding: 4.8rem 3.2rem;
                }
                .time_right_content {
                    box-sizing: border-box;
                    height: 65.4rem;
                    overflow-y: auto;
                    cursor: pointer;
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
}
</style>