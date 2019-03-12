<template>
    <div id="child">
        child {{childName}} <button @click="reverseName">reverse</button>
    </div>
</template>
<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
class Child extends Vue {
    @Prop() public name: any;
    get childName(): any {
        return this.name.split('').reverse().join('');
    }
    private reverseName(): void {
        this.$emit('nameReverse');
    }
}

export default Child;
</script>

