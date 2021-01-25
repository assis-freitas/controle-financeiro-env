<template>
    <nav id="menu">
        <span id="brand">Assis Freitas</span>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
class Menu extends Vue {}

export default Menu;
</script>

<style lang="scss">
    

    @mixin shadowText($size, $color: rgba(255, 255, 255, .7)) {
        text-shadow: 0 0 $size $color, 0 0 $size $color;
    } 

    @keyframes brandAnimation {
        0% {
            @include shadowText(0);
        }

        50% {
            @include shadowText(15px);
        }

        100% {
            @include shadowText(0);
        }
    }
    nav#menu {
        --menuHeight: 7vh;

        width: 100%;
        height: var(--menuHeight);
        background: rgb(13,230,78);
        background: linear-gradient(90deg, rgba(13,230,78,1) 0%, rgba(27,139,113,1) 100%);
        margin-bottom: 5vh;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;

        #brand {
            font-family: "Montserrat Alternates", sans-serif;
            color: rgb(255,255,255);
            font-weight: bold;
            font-size: 1.5rem;
            animation-name: brandAnimation;
            animation-duration: 5s;
            animation-iteration-count: infinite;
        }
    }
</style>