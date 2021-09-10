<template>
    <div class="time_container">
        <div class="time_content_container">
            <div class="time_content">
                <div class="time_left" ref="left">
                    <el-timeline>
                        <el-timeline-item
                            v-for="(year, index) in yearArr"
                            :key="index"
                            color="#0967E9"
                            @click.native="changeCurrentYear(index),leftToRight(index)"
                        >
                            <template slot="dot" :class="currentYear === index ? 'active_dot': ''">
                                <div class="circle" :class="currentYear === index ? 'circle_active' : ''"></div>
                            </template>
                            <span class="year" :class="currentYear === index ? 'active_year' : ''">{{ year }}</span>
                        </el-timeline-item>
                    </el-timeline>
                </div>
                <div class="time_right" ref="right">
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
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name: "MilestoneTime",
    props: ["timelineContent"],
    data(){
        return {
            scrollY:0,
            heightArr:[],
            currentYear: 0
        }
    },
    computed: {
        yearArr() {
            return this.timelineContent.map((item, index) => {
                return item.year;
            });
        },
        // currentYear(){
        //     //根据右侧的滑屏情况来决定当前应该返回怎样的下标
        //     //需要当前右侧列表滑动的实时距离 : scrollY
        //     //需要所有右侧分类项高度组成的一个累加数组 : heightArr
        //     var index = 0;
        //     index = this.heightArr.findIndex((item,index,arr)=>{
        //         return (this.scrollY >= item && this.scrollY < arr[index+1])
        //     })


        //     if(index !== this.oldIndex){
        //         console.log(this.oldIndex)
        //         //以下两行代码 应该在index产生改变时在执行
        //         this.oldIndex = index
        //         //选中的那个分类项 要尽量的出现在最顶部
        //         let typeLiNodes = this.$refs.typeList && this.$refs.typeList.children;
        //         //尽量的让typeLiNodes[index] 出现在滑屏区域的最顶部
        //         this.leftScroll && this.leftScroll.scrollToElement(typeLiNodes[index],300)
        //     }


        //     //让对应的左侧分类项选中
        //     return index
        // },
    },
    methods: {
        changeCurrentYear(index) {
            this.currentYear = index;
        },
        //初始化滑屏
        initScroll(){
            this.$nextTick(()=>{
                //将滑屏的包裹器传入到BScroll内部就可以产生滑屏
                this.leftScroll = new BScroll(this.$refs.left,{click:true});
                //计算得到右侧滑屏元素移动的实时距离(正值)
                this.rightScroll =new BScroll(this.$refs.right,{
                    probeType:3,
                    click:true,
                    // wheel: true,
                });
                this.rightScroll.on("scroll",({x, y})=>{
                    this.scrollY = Math.abs(y)
                })
            })
        },
        //初始化heightArr
        initHeightArr(){
            this.$nextTick(()=>{
                let rightLiNodes = this.$refs.timeList.children;

                let height = 0;
                let heights = [height];
                rightLiNodes.forEach((item)=>{
                    height += item.offsetHeight;
                    heights.push(height)
                })
                this.heightArr = heights

                /*let heights = [];
                let res = Array.from(rightLiNodes).reduce((adder,item)=>{
                    //offsetHeight : 代表的是元素的高度
                    heights.push(adder);
                    return adder + item.offsetHeight
                },0)
                heights.push(res);
                this.heightArr = heights
                */
            })
        },
        //左侧列表同步右侧列表
        leftToRight(index){
            this.rightScroll.scrollTo(0,-this.heightArr[index],300)
        },
    },
    mounted(){
        this.initScroll();
        this.initHeightArr();
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