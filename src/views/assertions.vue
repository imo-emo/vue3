<template>
    <div id="assertions">
        assertions
        {{GetName}}
        <input v-model="name" />
        <back></back>
    </div>
</template>
<script lang="ts">
import {Component, Vue, Provide, Watch} from 'vue-property-decorator';
import back from '../components/back.vue';

@Component({
    components: {
        back,
    },
})
class Assertions extends Vue {
    @Provide() private name: string = '123';
    public mounted(): void {
        const name = `Smallblack`;
        const len = (name as string).length;
        this.doSomething();
        const obj = {
            [Symbol('name')]: '一斤代码',
            age: 18,
        };
        const str = 'stringObject';
        // console.log(str.padStart(20, '123'))
    }
    public async doSomething() {
        const result = this.getSomething();
    }
    public getSomething() {
        return 'abc';
    }
    get GetName() {
        return this.name.split('').reverse().join('');
    }
    @Watch('name') public nameChange() {
        const name = this.name.slice(this.name.length - 3, this.name.length);
        this.$nextTick(() => {
            this.name = name;
        });
    }
}

export default Assertions;
</script>