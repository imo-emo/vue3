<template>
  <div class="home">
      <List :data="list"></List>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import List from '../components/list.vue';
import {list} from '../api/list';

@Component({
    components: {
        List,
    },
})
export default class Home extends Vue {
    @Provide() private list: any = list;
}
</script>
