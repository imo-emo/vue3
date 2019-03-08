<template>
  <div id="app">
    <div id="nav">
      <router-view/>
      <button @click="nameChange">{{newName}}</button>
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
import { Component, Vue, Provide } from 'vue-property-decorator';

@Component
class App extends Vue {
    name: string = 'Smallblack';
    get newName(): string{
        return this.name.split("").reverse().join('');
    }
    nameChange(): any{
        this.name = this.name.split("").reverse().join("");
    }
    mounted(){

    }
}
export default App;
</script>