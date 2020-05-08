<template>
    <div id="baseTyep">
        baseType
        <back></back>
    </div>
</template>
<script lang="ts">
import {Component, Vue, Provide} from 'vue-property-decorator';
import back from '../components/back.vue';

@Component({
    components: {
        back,
    },
})
class BaseType extends Vue {
    @Provide() private number: number = 1; // 数字
    @Provide() private name: string = 'Smallblack'; // 字符串，支持模版字符串
    @Provide() private isDone: boolean = false; // 布尔值
    @Provide() private list: number[] = [1, 2, 3]; // 数组
    @Provide() private tuple: [string, number] = ['Smallblack', 1]; // 元组 tuple
    @Provide() private Any: any = 'anyBody'; // 不清楚类型的变量指定的一个类型,值来自于动态的内容
    @Provide() private obj: object = { name: 'Smallblack', age: 18, sex: '男', bolan: false}; // Object
    @Provide() private Undefined: undefined = undefined; // undefined 所有类型的子类型
    @Provide() private Null: null = null; // null 所有类型的子类型
    @Provide() private assertions: number = ('assertions' as string).length;
    private mounted(): void { // 与any类型相反,没有任何类型
        const nameLength: number = (this.name as string).length;
        enum Direction { // 数字枚举&字符串枚举&异构枚举 特性:反向映射(仅限普通枚举和数字枚举) 定义: 使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。
            a = 1,
            b = a * 2,
            // b = 'yes', // 异构枚举
        }
    }
}

export default BaseType;
</script>

