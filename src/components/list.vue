<template>
    <div id="list">
        <ul>
            <li v-for="item in data" :key="item.id" @click="GoPath(item.url)">{{item.name}}</li>
        </ul>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator';

@Component
class List extends Vue {
    @Prop(Array) public data: any;
    public GoPath(path: string): void {
        this.$router.push({
            name: path,
        });
    }
}

export default List;
</script>

