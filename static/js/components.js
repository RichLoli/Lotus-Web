Vue.component('charts-areas', {
    props: ['chartsid','chartstitle','xAxis', ],
    data(){
        return {
            chartsid: this.chartsid
        }
    },
    methods: {
        chartsInit() {
            var chartDom = document.getElementById(this.chartsid)
            var myChart = echarts.init(chartDom)
            var option = {
                title: {
                    text: '',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985',
                        },
                    },
                },
                legend: {
                    data: ['邮件营销', '联盟广告'],
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                    },
                ],
                series: [
                    {                                   
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series',
                        },
                        data: [120, 132, 101, 134, 90, 230, 210],
                    },
                    {
                        name: '联盟广告',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series',
                        },
                        data: [220, 182, 191, 234, 290, 330, 310],
                    }
                ],
            }
            option && myChart.setOption(option)
        },
    },
    mounted: function () {
        this.chartsInit()
    },
    template: '<div :id="chartsid" style="height: 300px;"></div>',
})
