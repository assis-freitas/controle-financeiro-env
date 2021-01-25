<template>
    <div id="app">
        <Menu />
        <router-view />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Menu from "./components/Menu.vue";

@Component({
    components: {
        Menu
    }
})
class App extends Vue {}

export default App;
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;800&family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,400;1,700&display=swap');

:root {
    --gap: 30px;
    --gray-color: rgb(204, 204, 204);
    --primary-color: rgb(46,160,255);
    --success-color: rgb(11, 173, 73);
    --renda-default-color: rgb(8,175,83);
    --gastos-default-color: rgb(243,106,106);
}

body {
    margin: 0;
    padding: 0;    
}

*, *::after, * ::before {
    box-sizing: border-box;    
}

#app {
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
