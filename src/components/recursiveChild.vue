<template>
    <div>
        {{item.name}}
        <!-- <items v-for="item in item.children" :key="item.id"></items> -->
    </div>
</template>
<script lang="ts">
import {Component, Vue, Prop, Provide} from 'vue-property-decorator';

@Component({
    name: 'items',
})
class RecursiveChild extends Vue {
    @Prop() public item: any;
    @Provide() public name: any = 'items';
}
export default RecursiveChild;
</script>