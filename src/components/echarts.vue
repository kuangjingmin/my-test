<!--
 * @Author: jingmin-kuang
 * @Date: 2023-05-11 13:44:04
 * @LastEditTime: 2023-05-22 13:47:55
 * @LastEditors: jingmin-kuang
 * @Description: 
-->
<template>
  <div id="echartsDom"></div>
</template>
<script>
// import china from './svg/china.svg'
import china from "./json/china.json";
// import axios from "axios";
import * as echarts from "echarts";
import "echarts-gl";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      myChart: null,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.init();
  },
  beforeDestroy() {},
  methods: {
    init() {
      let chartDom = document.getElementById("echartsDom");
      this.myChart = echarts.init(chartDom);
      echarts.registerMap("china", china);
      let option = {
        geo3D: {
          map: "china",
          show: true,
          roam: true,
          itemStyle: {
            color: "#387BFF",
            opacity: 1,
            borderColor: "#fff",
            borderWidth: 0.5,
          },
          // label: {
          //   show: true,
          //   color: "#fff", // 添加颜色设置
          //   // borderWidth: 2,
          //   fontSize: 20,
          //   formatter: (params) => {
          //     console.log(params, "pppppppp");
          //     return params.name;
          //   },
          // },
          emphasis: {
            label: {
              show: true,
              formatter: (params) => {
                return params.name;
              },
              // 官方文档是错误的，在这儿设置颜色根本不起作用！！！
              // textStyle: {
              //   color: '#F40',
              //   borderWidth: 2,
              //   borderColor: '#fff',
              //   fontSize: 20,
              // },
              // 要在这儿设置才起作用！！！
              color: "#fff", // 添加颜色设置
              borderColor: "#fff", // 添加边框颜色设置
              // borderWidth: 2,
              fontSize: 20,
            },
            itemStyle: {
              color: "#387",
            },
          },
          // regions: makeTakenRegions(takenSeatNames)
        },
        // series: [{
        //   type: 'map3D',
        //   map: 'china',
        //   label: {
        //     show: true,
        //     textStyle: {
        //         color: '#fff' // 设置文字颜色
        //     }
        //   },
        //   itemStyle: {
        //     color: '#387BFF', //图形的颜色。地图中就是板块的颜色
        //     opacity: 1,	//透明度
        //     borderColor: '#fff', //边框颜色
        //     borderWidth: 0.5,	//边框宽度
        //     emphasis: {	//鼠标悬停的样式
        //         color: '#7BA8FF',
        //         borderColor: '#fff',
        //         borderWidth: 0.5
        //     }
        //   },
        //   // emphasis: {
        //   //   itemStyle: {
        //   //     // color: '#fff',
        //   //     borderColor: "green",
        //   //     borderWidth: 2,
        //   //   },
        //   //   label: {
        //   //     show: true,
        //   //     // formatter: (params) => {
        //   //     //   console.log(params, '-====ppppp');
        //   //     //   return params.name;
        //   //     // },
        //   //     textStyle: {
        //   //       color: '#F40',
        //   //       borderWidth: 2,
        //   //       borderColor: '#fff',
        //   //       fontSize: 20,
        //   //     }
        //   //   },
        //   // },
        // }]
      };
      this.myChart.setOption(option);
      // svg只能geo使用，geo3D不可以用！！！！
      // axios.get("http://192.168.25.146:9011/images/china.svg").then((res) => {
      //   // 首先向 echarts 注册 SVG 字符串或解析过的 SVG DOM
      //   echarts.registerMap("china", { svg: res.data });
      //   let option = {
      //     tooltip: {},
      //     geo3D: {
      //       map: "china",
      //       roam: true,
      //       selectedMode: "multiple",
      //       layoutCenter: ["50%", "50%"],
      //       layoutSize: "95%",
      //       tooltip: {
      //         show: true,
      //       },
      //       itemStyle: {
      //         color: "#fff",
      //       },
      //       emphasis: {
      //         itemStyle: {
      //           color: undefined,
      //           borderColor: "green",
      //           borderWidth: 2,
      //         },
      //         label: {
      //           show: false,
      //         },
      //       },
      //       select: {
      //         itemStyle: {
      //           color: "green",
      //         },
      //         label: {
      //           show: false,
      //           textBorderColor: "#fff",
      //           textBorderWidth: 2,
      //         },
      //       },
      //       // regions: makeTakenRegions(takenSeatNames)
      //     },
      //   };
      //   this.myChart.setOption(option);
      // });
    },
  },
};
</script>
<style lang="scss" scoped>
#echartsDom {
  width: 100vw;
  height: 100vh;
}
</style>
