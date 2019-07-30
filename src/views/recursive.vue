<template>
    <div id="recursive">
        <items v-for="item in datalist" :key="item.id" :item="item"></items>
    </div>
</template>
<script lang="ts">
import {Component, Vue, Provide} from 'vue-property-decorator';
import items from '../components/recursiveChild.vue';
import {list} from '../api/Recursive';

@Component({
    components: {
        items,
    },
})
class Recursive extends Vue {
    @Provide() public datalist: any = list;
}
export default Recursive;
</script>
