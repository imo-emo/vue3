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
    @Provide() private name: string = 'Smallblack';
    @Provide() private isDone: boolean = false;
    @Provide() private list: number[] = [1, 2, 3];
    @Provide() private tuple: [string, number] = ['Smallblack', 1];
    @Provide() private Any: any = 'anyBody';
    @Provide() private obj: object = { name: 'Smallblack', age: 18, sex: '男', bolan: false};
    private mounted(): void {
        const nameLength: number = (this.name as string).length;
        enum Direction {
            a = 1,
            b = 2,
        }
    }
}

export default BaseType;
</script>

