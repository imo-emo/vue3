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
    public searchF(config: SearchFun): any {
        return config;
    }
    private mounted(): void {
        interface NameInter {
            name: string;
            age: number;
            sex?: string;
            readonly tel?: number;
        }
        const obj: NameInter = {
            name: 'Smallblack',
            age: 18,
        };
    }
}

export default Interfaces;
</script>

