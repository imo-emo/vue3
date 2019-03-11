<template>
    <div id="declarations">
        declarations
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
class Declarations extends Vue {
    public mounted(): void {
        let a: string | number = 'Smallblack';
        a = 12;
        const animal: number[] = [1, 2];
        const [first, second] = animal;
        const obj: object = {
            name: 'suzhiyu',
            sex: '男',
            age: '18',
        };
        const {...info} = obj;
    }
}

export default Declarations;
</script>

