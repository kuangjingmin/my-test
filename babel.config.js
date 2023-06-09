/*
 * @Author: jingmin-kuang
 * @Date: 2023-03-11 13:11:15
 * @LastEditTime: 2023-06-02 16:12:19
 * @LastEditors: jingmin-kuang
 * @Description: 
 */
module.exports = {
  presets: [
    "@vue/cli-plugin-babel/preset",
    ['@vue/babel-preset-jsx',
     {
     'injectH': false
     }
    ]
  ],
};
