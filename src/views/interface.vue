<template>
    <div id="interface">
        interface
        <back></back>
    </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import back from '../components/back.vue';

interface SearchFun {
    id: number;
}

@Component({
    components: {
        back,
    },
})
class Interfaces extends Vue {
    public searchF(config: SearchFun): any { // 函数类型
        return config;
    }
    private mounted(): void {
        interface NameInter { // 类型校验，对结构进行检查  注:可选属性&只读属性&额外属性检查
            name: string;
            age: number;
            sex?: string;
            readonly tel?: number;
        }
        interface Shape {
          color: string;
        }
        // interface Square extends Shape, NameInter {} // interface 继承
        const obj: NameInter = {
            name: 'Smallblack',
            age: 18,
        };
        // const obja = { // 使用 断言
        //     name: 'Smallblack',
        //     age: 18,
        // };
        // console.log(obja as NameInter);
        // class Clock implements NameInter { // interface 通过 implements 对类进行类型校验 constructor属于类的静态部分不属于检查范围
        //     public name = 'Smallblack';
        //     public age = 18;
        // }
    }
}

export default Interfaces;
</script>

