<template>
    <div id="BigVisual">
    </div>
</template>
<script>
export default {
    name: "BigVisual",
    components: {
    },
    props: {
    },
    data() {
        return {
            GeoJsonLayer: null,
        }
    },
    computed: {
    },
    watch: {
    },
    created() {
    },
    mounted() {
        this.$nextTick(() => {
            this.init();
        })
    },
    beforeDestroy() {
    },
    methods: {
        init() {
            let mapMode = 'map3D';
            localStorage.setItem('mapMode', mapMode);
            window.mapMode = mapMode;
            console.log(Cesium, 'Chrtc---');
            const options = {
                // this.option.baseMapUrl,
                // 如果为true，则仅根据场景中的更改确定是否需要渲染帧。但需要使用 requestRender 来调用重新绘制
                requestRenderMode: false,
                contextOptions: {
                webgl: {
                    alpha: true, // 如果应用程序需要使用alpha混合在其他HTML元素上方合成Cesium，请设置 webgl.alpha 设为true。(设置背景图或背景色)
                }
                },
                scene3DOnly: true, //如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
            }  
            // 初始化地图
            // let viewer = new Cesium.Viewer(this.$refs[this.id], options);
            let threeMap = new Chrtc[mapMode].Map(document.querySelector('#BigVisual'), options);
            window.threeMap = threeMap;
            // 加载地图服务图层
            let paramObj = {
                url: 'http://192.168.21.100/google-quanqiu/{z}/{x}/{y}.jpg',
                // mapServerType: itemdata.dataType ? mapServerTypeFn(itemdata.dataType) : null,
                // minLevel: itemdata.minLevel ? +itemdata.minLevel : null,
                // maxLevel: itemdata.maxLevel ? +itemdata.maxLevel : null,
                // showArea: itemdata.showArea
            }
            let mapLayer = new Chrtc[mapMode].Layer.mapServerLayer(paramObj);
            threeMap.addMapLayer(mapLayer);
            this.creatLayer();
        },
        creatLayer() {
            // 创建 GeoJsonLayer 图层
            this.GeoJsonLayer = new Chrtc[mapMode].Layer.GeoJsonLayer("china", '../components/json/china.json');
            this.GeoJsonLayer.eachOverlay((item) => {
                // item 为一个entity,
                // if (item.polyline) {
                //     //todo
                //     let polyline = DC.Polyline.fromEntity(item)
                // }
                if (item.polygon) {
                    //todo
                    // let polygon = DC.Polygon.fromEntity(item)
                    console.log(item, '------iiiii');
                }
                // if (item.billboard) {
                //     //todo
                //     let point = DC.Point.fromEntity(item)
                //     let divIcon = DC.DivIcon.fromEntity(item)
                //     let billboard = DC.Billboard.fromEntity(item)
                // }
            })
        }
    },
}
</script>
<style lang="scss" scoped>

</style>
