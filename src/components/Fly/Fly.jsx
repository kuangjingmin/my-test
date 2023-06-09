/*
 * @Author: jingmin-kuang
 * @Date: 2023-06-07 15:16:17
 * @LastEditTime: 2023-06-07 15:24:11
 * @LastEditors: jingmin-kuang
 * @Description: 
 */
const Fly = {
    name: 'Fly',
    data() {
        return {

        }
    },
    method: {

    },
    render() {
        return (
            <div class="item">
                {/* 自定义默认插槽 */}
                {this.$slots.default}
                {/**自定义具名插槽*/}
                <div class="custom-dialog__foolter">{this.$slots.footer}</div>
                {/**自定义作用域插槽*/}
                {this.$scopedSlots.row({user: {name:'纸飞机'}})}
            </div>
        )
    }
}
export default Fly;