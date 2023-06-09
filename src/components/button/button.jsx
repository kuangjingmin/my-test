/*
 * @Author: jingmin-kuang
 * @Date: 2023-06-02 16:24:18
 * @LastEditTime: 2023-06-05 15:21:44
 * @LastEditors: jingmin-kuang
 * @Description: 
 */

const Button = {
    name: 'KKButton',
    props: ["type"],
    methods: {
        handleClick() {
            console.log('----000000');
        }
    },
    render() {
        return (
            <button type={this.type} onClick={this.handleClick}>
                点我
            </button>
            // 监听事件想到用 onChange, onClick等。需要注意的是，传参数不能使用 onClick={this.removePhone(params)}，
            // 这样子会每次 render 的时候都会自动执行一次方法应该使用 bind，或者箭头函数来传参
            // <button type="button" onClick={this.handleClick.bind(this, 11)}>点击bind</button>
            // <button type="button" onClick={() => this.handleClick(11)}>点击箭头函数</button>
        )
    },
};
export default Button;