<template>
    <div ref="row" class="row" :class="rowConfigClass">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue } from "vue-property-decorator";

@Component({})
class Row extends Vue {
    @Prop()
    justifyContent: string | undefined;

    @Ref('row')
    rowElement: HTMLDivElement|undefined;

    get rowConfigClass() {
        return this.justifyContent ? `justify-content-${ this.justifyContent }` : '';
    }

    mounted() {
        if (this.rowElement) {
            this.rowElement.style.setProperty('--justify-content-var', this.justifyContent ?? 'space-around');
        }
    }
}

export default Row;
</script>

<style lang="scss">
    .row {
        width: 100%;
        height: auto;
        display: inline-flex;
        flex-flow: row wrap;
        justify-content: var(--justify-content-var);
        gap: var(--gap);
        margin: 1vh 0;
    }
</style>