/*
 * @Author: jingmin-kuang
 * @Date: 2023-03-11 13:11:15
 * @LastEditTime: 2023-05-23 16:04:54
 * @LastEditors: jingmin-kuang
 * @Description: 
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": "off"
  },
  globals: {
    'Chrtc': true,
    'mapMode': true,
    'Cesium': true,
  }
};
