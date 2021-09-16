<template>
    <div class="jobs_container">
        <div class="jobs_content_container">
            <div class="jobs_content">
                <div class="title">{{ hotJobs.title }}</div>
                <ul class="jobs_type_list">
                    <li
                        class="job_type_item"
                        v-for="(item, index) in hotJobs.jobsType"
                    >
                        <div class="job_type_wrap">
                            <span class="job_type">{{ item.jobType }}</span>
                            <Top
                                class="job_icon"
                                :class="
                                    item.visible
                                        ? 'job_icon_rotate'
                                        : ''
                                "
                                @click.native="putAway(index)"
                            ></Top>
                        </div>
                        <div
                            class="job_detail"
                            v-if="item.visible"
                        >
                            <div class="responsibility_title">
                                {{ item.responsibilityTitle }}:
                            </div>
                            <ul class="responsibilities_list">
                                <li
                                    class="responsibility_item"
                                    v-for="(
                                        responsibility, rIndex
                                    ) in item.responsibilities"
                                    :key="rIndex"
                                >
                                    <span class="item">{{
                                        responsibility.text
                                    }}</span>
                                </li>
                            </ul>
                            <div class="requirement_title">
                                {{ item.requirementTitle }}:
                            </div>
                            <ul class="requirements_list">
                                <li
                                    class="requirement_item"
                                    v-for="(
                                        requirement, reqIndex
                                    ) in item.requirements"
                                    :key="reqIndex"
                                >
                                    <span class="item">{{
                                        requirement.text
                                    }}</span>
                                </li>
                            </ul>
                            <div class="welcome">{{ item.welcome }}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Top from "@theme/components/Common/Top.vue";
export default {
    name: "Jobs",
    props: ["hotJobs"],
    data() {
        let jobList = this.hotJobs.jobsType;
        jobList.forEach(j=>j.visible = false)
        return {
            jobList,
        };
    },
    methods: {
        putAway(index) {
            this.jobList.forEach((item,i)=>{
                if(index === i) {
                    item.visible = !item.visible;
                }else{
                    item.visible = false;
                }
            })
        },
    },
    components: {
        Top,
    },
};
</script>

<style lang="stylus">
.jobs_container {
    width: 100%;
    background: #F5F6FB;

    .jobs_content_container {
        margin: 0 auto;
        max-width: $contentWidth;

        .jobs_content {
            box-sizing: border-box;
            margin: 0 auto;
            padding: 4.8rem 0 10rem;
            max-width: 96rem;

            .title {
                font-size: $fontSize24;
                font-weight: $fontWeight500;
                color: #000;
                line-height: 2.4rem;
                text-align: center;
            }

            .jobs_type_list {
                margin-top: 4rem;

                .job_type_item {
                    margin-top: 1.6rem;
                    box-sizing: border-box;
                    padding: 2.4rem;
                    background: #fff;
                    border-radius: 0.4rem;

                    &:first-child {
                        margin-top: 0;
                    }

                    .job_type_wrap {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        .job_type {
                            font-size: $fontSize20;
                            font-weight: $fontWeight400;
                            color: #000;
                            line-height: 2.4rem;
                        }

                        .job_icon {
                            transform: rotate(90deg);
                            transition: all 0.2s linear;

                            &:hover {
                                cursor: pointer;
                            }
                        }

                        .job_icon_rotate {
                            transform: rotate(-90deg);
                            transition: all 0.2s linear;
                        }
                    }

                    .job_detail {
                        margin-top: 2.4rem;
                        border-top: 0.1rem solid #E1E5F4;

                        .responsibility_title {
                            margin-top: 2.3rem;
                            font-size: $fontSize16;
                            font-weight: $fontWeight600;
                            color: #000;
                            line-height: 2.4rem;
                        }

                        .responsibilities_list {
                            margin-top: 1.2rem;

                            .responsibility_item {
                                font-size: $fontSize14;
                                font-weight: $fontWeight400;
                                color: rgba(0, 0, 0, 0.75);
                                line-height: 2.4rem;
                            }
                        }

                        .requirement_title {
                            margin-top: 1.6rem;
                            font-size: $fontSize16;
                            font-weight: $fontWeight600;
                            color: #000;
                            line-height: 2.4rem;
                        }

                        .requirements_list {
                            margin-top: 1.2rem;

                            .requirement_item {
                                font-size: $fontSize14;
                                font-weight: $fontWeight400;
                                color: rgba(0, 0, 0, 0.75);
                                line-height: 2.4rem;
                            }
                        }

                        .welcome {
                            margin-top: 1.2rem;
                            font-size: $fontSize14;
                            font-weight: $fontWeight500;
                            color: rgba(0, 0, 0, 0.75);
                            line-height: 2.4rem;
                        }
                    }
                }
            }
        }
    }
}
</style>