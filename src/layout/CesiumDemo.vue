<!--
 * @Author: jingmin-kuang
 * @Date: 2023-05-23 13:22:28
 * @LastEditTime: 2023-05-23 15:39:47
 * @LastEditors: jingmin-kuang
 * @Description: 
-->
<template>
  <div id="CesiumDemo"></div>
</template>
<script>
export default {
  name: "CesiumDemo",
  components: {},
  props: {},
  data() {
    return {
      GeoJsonLayer: null,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.init();
      this.setGeo();
    });
  },
  beforeDestroy() {},
  methods: {
    init() {
      //   console.log(Cesium, "Chrtc---");
      const options = {
        animation: false, //是否创建动画小器件，左下角仪表
        baseLayerPicker: false, //是否显示图层选择器
        fullscreenButton: false, //是否显示全屏按钮
        geocoder: false, //是否显示geocoder小器件，右上角查询按钮
        homeButton: false, //是否显示Home按钮
        infoBox: false, //是否显示信息框
        sceneModePicker: false, //是否显示3D/2D选择器
        selectionIndicator: false, //是否显示选取指示器组件
        timeline: false, //是否显示时间轴
        navigationInstructionsInitiallyVisible: false,
        navigationHelpButton: false, //是否显示右上角的帮助按钮
        // 如果为true，则仅根据场景中的更改确定是否需要渲染帧。但需要使用 requestRender 来调用重新绘制
        requestRenderMode: false,
        contextOptions: {
          webgl: {
            alpha: true, // 如果应用程序需要使用alpha混合在其他HTML元素上方合成Cesium，请设置 webgl.alpha 设为true。(设置背景图或背景色)
          },
        },
        scene3DOnly: true, //如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
        imageryProvider: new Cesium.UrlTemplateImageryProvider({
          // 带标记的高德影像地址
          // url:
          //   "http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
          // 不带标记的高德影像地址
          // url:'https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}'
          // 卫星图
          // url: "http://192.168.21.100/google/{z}/{x}/{y}.jpg",
          url: "http://192.168.21.100/google-quanqiu/{z}/{x}/{y}.jpg",
          // url:'http://192.168.21.100/hk84/{z}/{x}/{y}.jpg',
          // 街道图
          // url: "http://192.168.21.100/jiedao/data/{z}/{x}/{y}.jpg",
        }),
      };
      // 初始化地图
      let viewer = new Cesium.Viewer("CesiumDemo", options);
      window.viewer = viewer;
      // 加载地图服务图层
      // let paramObj = {
      //     url: 'http://192.168.21.100/google-quanqiu/{z}/{x}/{y}.jpg',
      //     // mapServerType: itemdata.dataType ? mapServerTypeFn(itemdata.dataType) : null,
      //     // minLevel: itemdata.minLevel ? +itemdata.minLevel : null,
      //     // maxLevel: itemdata.maxLevel ? +itemdata.maxLevel : null,
      //     // showArea: itemdata.showArea
      // }

      //影像底图
      //   viewer.imageryLayers.addImageryProvider(
      //     new Cesium.UrlTemplateImageryProvider({
      //       url: "http://192.168.21.100/google-quanqiu/{z}/{x}/{y}.jpg",
      //     })
      //   );
      //去除左下角版权信息
      viewer._cesiumWidget._creditContainer.style.display = "none";
    },
    setGeo() {
      Cesium.Math.setRandomNumberSeed(0); //设置随机数种子
      let promise = Cesium.GeoJsonDataSource.load("json/china.json"); //geojson面数据
      promise.then(function (dataSource) {
        window.viewer.dataSources.add(dataSource);
        let entities = dataSource.entities.values;
        // var colorHash = {};
        for (let i = 0; i < entities.length; i++) {
          let entity = entities[i];
        //   console.log(entities, "eeee");
          let name = entity.name; //geojson里面必须得有一个name属性，entity.name对应

          //   var color = colorHash[name]; //可以使两个同名要素使用同一种颜色。。。
          let color;
          if (!color) {
            // color = Cesium.Color.fromRandom({
            //   alpha: 0.8,
            // });
            // colorHash[name] = color;
            if (name &&( name == '北京市' || name == '浙江省' || name == '江苏省' || name == '广东省' || name == '上海市' )) {
                color = Cesium.Color.fromCssColorString("rgba(61, 182, 251, 0.5)");
            }else {
                color = Cesium.Color.fromCssColorString("rgba(15, 32, 73, 0.5)");
            }
          }
          entity.polygon.material = color;
          entity.polygon.outline = true;
          entity.polygon.outlineWidth = 10.0;
          entity.polygon.outlineColor = Cesium.Color.fromCssColorString("rgb(186, 239, 255)");
          
          entity.polygon.extrudedHeight = Math.floor(
            // Math.random() * 40000 + 20000
            1000
          ); //20000~60000的随机数，单位是米
          window.viewer.zoomTo(promise);
        }
      });
      this.setEvent();
    },
    setEvent() {
        let viewer = window.viewer;
        let scene = viewer.scene;
        let handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
        let colorArry = [];
        // 鼠标移入变色
		handler.setInputAction(function(movement) {
			if (scene.mode !== Cesium.SceneMode.MORPHING) {
				var pickedObject = scene.pick(movement.endPosition);
                // console.log(pickedObject, movement, 'mmm----');
				if(Cesium.defined(pickedObject) && pickedObject.id ) {
                    let entity = pickedObject.id;
                    let inx = colorArry.findIndex(item => item.name === entity.name);
                    if(inx != -1) {
                        colorArry.splice(inx, 1);
                        let name = entity.name;
                        let color;
                        if (name &&( name == '北京市' || name == '浙江省' || name == '江苏省' || name == '广东省' || name == '上海市' )) {
                            color = Cesium.Color.fromCssColorString("rgba(61, 182, 251, 0.5)");
                        }else {
                            color = Cesium.Color.fromCssColorString("rgba(15, 32, 73, 0.5)");
                        }
                        entity.polygon.material = color;
                    }else {
                        entity.polygon.material = Cesium.Color.fromCssColorString("rgba(11, 167, 120, 0.5)");
                        colorArry.push(entity);
                    }
				}else {
                    colorArry.forEach(entity => {
                        let name = entity.name;
                        let color;
                        if (name &&( name == '北京市' || name == '浙江省' || name == '江苏省' || name == '广东省' || name == '上海市' )) {
                            color = Cesium.Color.fromCssColorString("rgba(61, 182, 251, 0.5)");
                        }else {
                            color = Cesium.Color.fromCssColorString("rgba(15, 32, 73, 0.5)");
                        }
                        entity.polygon.material = color;
                    })
                    colorArry = [];
                }
			}
		}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
    }
  },
};
</script>
<style lang="scss" scoped>
#CesiumDemo {
  width: 100vw;
  height: 100vh;
  color: rgb(11, 167, 120);
}
</style>
