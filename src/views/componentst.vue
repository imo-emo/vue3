<template>
    <div id="componentst">
        parent: {{name}}
        <child :name="name" @nameReverse="nameReverse"></child>
        <back></back>
    </div>
</template>
<script lang="ts">
import {Component, Vue, Provide} from 'vue-property-decorator';
import back from '../components/back.vue';
import child from '../components/child.vue';

@Component({
    components: {
        back, child,
    },
})
class Componentst extends Vue {
    @Provide() private name: string = 'Smallblack';
    private nameReverse(): void {
        this.name = this.name.split('').reverse().join('');
    }
}

export default Componentst;
</script>

