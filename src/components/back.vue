<template>
    <div id="back">
        <p @click="back">back</p>
    </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
class Back extends Vue {
    private back(): void {
        this.$router.go(-1);
    }
}
export default Back;
</script>
