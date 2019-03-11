<template>
    <div id="baseTyep">
        {{name}}
    </div>
</template>
<script lang="ts">
import {Component, Vue, Provide} from 'vue-property-decorator';

@Component
class BaseType extends Vue {
    @Provide() private name: string = 'Smallblack';
}

export default BaseType;
</script>

