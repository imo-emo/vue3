<template>
    <div id="assertions">
        assertions
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
class Assertions extends Vue {
    public mounted(): void {
        const name = `Smallblack`;
        const len = (name as string).length;
    }
}

export default Assertions;
</script>
