/*
 * @Author: jingmin-kuang
 * @Date: 2023-06-02 16:24:18
 * @LastEditTime: 2023-06-05 15:20:01
 * @LastEditors: jingmin-kuang
 * @Description: 
 */

const Input = {
    name: 'KKInput',
    props: ["type"],
    data() {
        return {
            number: 1,
        }
    },
    methods: {
        handleClick() {
            console.log('----000000');
        },
        handleInput(e) {
            this.number = e.target.value;
        }
    },
    render() {
        return (
            // 新版 vue-cli4 中，已经默认集成了 JSX 语法对 v-model 的支持，可以直接使用
            // 如果你的项目比较老，也可以安装插件babel-plugin-jsx-v-model 来进行支持

            // <input type={this.type} v-model={this.number} />
            // 自己实现, 毕竟v-model只是语法糖
            <input type={this.type} value={this.number} onInput={this.handleInput}/>
        )
    },
};
export default Input;