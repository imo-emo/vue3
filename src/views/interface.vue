<template>
    <div id="interface">
        interface
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
class Interfaces extends Vue {
    private mounted(): void {
        interface NameInter {
            name: string;
            age: number;
        }
        const obj: NameInter = {
            name: 'Smallblack',
            age: 18,
        };
    }
}

export default Interfaces;
</script>

