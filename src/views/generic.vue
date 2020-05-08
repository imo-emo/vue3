<template>
    <div id="generic">
        generic
        <back></back>
    </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import back from '../components/back.vue';

@Component({
    components: {
        back,
    },
})
class Generic extends Vue {
    private indentity<T>(arg: T): T {
        return arg;
    }
    private mounted(): void {
        const output = this.indentity<string>('name');
        // class GenericNumber<T> { // 泛型类
        //   public zeroValue: T;
        //   public add: (x: T, y: T) => T;
        // }
    }
}

export default Generic;
</script>

