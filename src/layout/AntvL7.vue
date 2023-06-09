<!--
 * @Author: jingmin-kuang
 * @Date: 2023-05-23 15:47:35
 * @LastEditTime: 2023-05-24 10:55:31
 * @LastEditors: jingmin-kuang
 * @Description: 
-->
<template>
  <div id="map"></div>
</template>
<script>
import {
  Scene,
  RasterLayer,
  PolygonLayer,
  LineLayer,
  PointLayer,
} from "@antv/l7";
import { GaodeMap, Map } from "@antv/l7-maps";
import china from "../components/json/china.json";
export default {
  name: "AntvL7",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.initMap();
  },
  beforeDestroy() {},
  methods: {
    initMap() {
      const scene = new Scene({
        id: "map",
        // map: new GaodeMap({
        //   style: "dark",
        //   center: [110.770672, 34.159869],
        //   pitch: 45,
        // }),
        map: new Map({
          center: [100.402831, 35.927109],
          zoom: 4,
          pitch: 40,
        }),
      });
      window.scene = scene;
      this.loadMap();
    },
    loadMap() {
      window.scene.on("loaded", () => {
        // 加载影像底图服务
        const baseLayer = new RasterLayer({
          zIndex: 0,
        });
        baseLayer.source(
          // 'https://webst0{1-4}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
          "http://192.168.21.100/google-quanqiu/{z}/{x}/{y}.jpg",
          {
            parser: {
              type: "rasterTile",
              tileSize: 256,
              // minZoom: 6,
              // maxZoom: 15,
              zoomOffset: 0,
              // extent: [-180, -85.051129, 179, 85.051129],
            },
          }
        );
        window.scene.addLayer(baseLayer);
        this.setLayer();
      });
    },
    setLayer() {
      // 底部的线
      let lineDown = new LineLayer()
        .source(china)
        .shape("line")
        .color("#0DCCFF")
        .size(1)
        .style({
          raisingHeight: 0,
        });
      // 上部的线
      let lineUp = new LineLayer({ zIndex: 1 })
        .source(china)
        .shape("line")
        .color("#0DCCFF")
        .size(1)
        .style({
          raisingHeight: 150000 + 150000,
        });

      window.scene.addLayer(lineDown);
      window.scene.addLayer(lineUp);

      // 加载中国地图
      const provincelayer = new PolygonLayer({})
        .source(china)
        .size(15000)
        .shape("extrude")
        .color("name", (value) => {
          // console.log(value, '---vvvvv');
          if (
            value &&
            (value == "北京市" ||
              value == "浙江省" ||
              value == "江苏省" ||
              value == "广东省" ||
              value == "上海市")
          ) {
            // return "rgba(61, 182, 251, 0.5)";
            return "rgba(265, 0, 0, 0.5)";
          } else {
            // return "rgba(15, 32, 73, 0.5)";
            return "rgba(215, 32, 215, 0.5)";
          }
        })
        .active({
          color: "rgba(11, 167, 120, 0.5)",
        })
        .style({
          //   heightfixed: true,
          pickLight: true,
          raisingHeight: 150000,
          opacity: 0.8,
        });

      window.scene.addLayer(provincelayer);
    },
  },
};
</script>
<style lang="scss" scoped>
#map {
  width: 100vw;
  height: 100vh;
}
</style>
