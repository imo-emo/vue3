<template>
    <div id="list">

    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator';

@Component
class List extends Vue {
    @Prop(Array) public data: any;
}

export default List;
</script>

