/*
 * @Author: jingmin-kuang
 * @Date: 2023-06-06 17:31:05
 * @LastEditTime: 2023-06-07 15:59:36
 * @LastEditors: jingmin-kuang
 * @Description: 
 */
const KTitle = {
    name: 'KTitle',
    data() {
        return {
            level: '1',
        }
    },
    render() {
        const tag = `h${this.level}`;
        return (
            <tag>
                {this.$slots.default}
            </tag>
        )
    }
};

export default KTitle;