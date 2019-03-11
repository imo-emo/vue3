<template>
  <div id="app">
    <div id="nav">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script lang="ts">
import { Component, Vue, Provide, Prop, Watch } from 'vue-property-decorator';

@Component
class App extends Vue {
    // @Prop()
    // propA:number

    @Provide() private name: string = 'Smallblack';

    get newName(): string {
        return this.name.split('').reverse().join('');
    }

    @Watch('name')
    private valueChange(val: string, oldValue: string): void {
        let a: number = 1;
        a = 2;
    }

    private nameChange(): void {
        this.name = this.name.split('').reverse().join('');
    }

    private mounted(): void {
        let a: number = 1;
        a = 2;
    }
}
export default App;
</script>