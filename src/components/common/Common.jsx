/*
 * @Author: jingmin-kuang
 * @Date: 2023-05-22 16:21:39
 * @LastEditTime: 2023-06-08 17:56:38
 * @LastEditors: jingmin-kuang
 * @Description: 
 */
import KKButton from '@/components/button/button.jsx' 
import KKInput from '@/components/input/input.jsx' 
import KTitle from '@/components/h/h.jsx';
import Fly from '@/components/Fly/Fly.jsx';

const Common = {
    name: "Common",
    data() {
        return {
        }
    },
    methods: {
    },
    render() {
        return (
            <div class="common-wrapper">
            <h1>使用自定义组件库</h1>
            <br/>
            <br/>
            <br/>
            <k-button type="primary">点我</k-button>
            <KKButton type="'primary'" />
            <KKInput type="number"  />
            <KTitle>
                你猜啊
                <div style="color: red;">
                    谢谢谢谢谢
                </div>
            </KTitle>
            <Fly
                {
                    ...{
                        scopedSlots: {
                            row: ({ user }) => {
                                // 这个user就是子组件传递来的数据，同理可这样拿到el-table的row，
                                // 不过test得是default，不过案例还是我这样
                              return  <div style="color:blue;">快来啊，{user.name}，看看这个作用域插槽</div>
                            }
                        }
                    }
                }
            >
                <div>默认插槽111</div>
                <template slot="footer">
                    <button>确定</button>
                    <button>取消</button>
                </template>
            </Fly>
        </div>
        )
    }
};

export default Common;
