<template>
    <div id="classT">
        class
        <back></back>
    </div>
</template>
<script lang="ts">
import {Component, Vue, Provide} from 'vue-property-decorator';
import back from '../components/back.vue';

// public private protected readonly static abstract(抽象类 -> 用于定义抽象类和在抽象类内部定义抽象方法 类似Interface)
// class Demo {
//     public sex: number = 12;
//     protected type: boolean = true;
//     private name: string = 'Smallblack';
// }
// class DemoC extends Demo {
//     readonly tel: number = 123;
// }
// const Demos  = new DemoC();

@Component({
    components: {
        back,
    },
})
class ClassT extends Vue {
    @Provide() public num: number = 123;
}

export default ClassT;
</script>
