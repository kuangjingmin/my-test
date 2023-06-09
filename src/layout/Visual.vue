<!--
 * @Author: jingmin-kuang
 * @Date: 2023-05-22 16:19:14
 * @LastEditTime: 2023-05-22 17:58:40
 * @LastEditors: jingmin-kuang
 * @Description: 
-->
<template>
    <div id="map">
        
    </div>
</template>
<script>
import china from '../components/json/china.json'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import glify from 'leaflet.glify';
export default {
    name: "Visual",
    components: {
    },
    props: {
    },
    data() {
        return {
        }
    },
    computed: {
    },
    watch: {
    },
    created() {
    },
    mounted() {
        this.createMap();
    },
    beforeDestroy() {
    },
    methods: {
        createMap() {
            let map = L.map('map').setView([116.402831,39.927109], 8);
            // 创建高度属性的覆盖层
            // http://192.168.21.100/google/{z}/{x}/{y}.jpg
            // https://tile.openstreetmap.org/{z}/{x}/{y}.png
            // https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}
            L.tileLayer('https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}', {
                maxZoom: 8,
                // attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            var vertexLayer = L.vertexOverlayer().addTo(map);
            // 从GeoJSON数据创建Glify图层
            var gl = L.Glify({
                data: china,
                color: function(feature) {
                    return feature.properties.color;
                },
                extrude: true,  // 将GeoJSON对象展开为3D物体
                height: function(feature) {
                    return feature.properties.height || 0; // 指定高度属性
                },
                // click: function(feature, context, event) {
                //     //当点击对象时执行的代码
                // },
                // mouseover: function(feature, context, event) {
                //     //当鼠标移动到对象上时执行的代码
                // }
            }).addTo(vertexLayer);
            
            console.log(L, '----pppp111');
            console.log(L.Glify, '----pppp222');
            console.log(gl, glify, '----pppp3333');
            console.log(china, '----pppp3333');
            // glify.shapes({
            //     map,
            //     data: china,
            //     color: '#f40',
            //     // click: (e, feature) => {
            //     //     // do something when a shape is clicked
            //     //     // return false to continue traversing
            //     // },
            //     // hover: (e, feature) => {
            //     //     // do something when a shape is hovered
            //     // }
            // });

        }
    },
}
</script>
<style lang="scss" scoped>
#map {
    width: 100vw;
    height: 100vh;
}
</style>
