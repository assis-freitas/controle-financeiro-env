<template>
    <div ref="colElement" :class="colClass">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue } from "vue-property-decorator";

@Component({})
class Col extends Vue {
    @Prop()
    size: number|undefined;

    @Prop()
    align: string|undefined;

    @Ref('colElement')
    colElement: HTMLDivElement|undefined;

    get colClass() {
        return this.size ? `col-${ this.size }` : 'col';
    }

    mounted() {
        if (this.colElement) {
            this.colElement.style.setProperty('--align-self-col', this.align ?? 'inherit');
        }
    }
}

export default Col;
</script>

<style lang="scss">
    $maxColumns: 12;

    .col {
        width: auto;
        align-self: var(--align-self-col);
    }

    @for $i from 1 through $maxColumns {
        .col-#{$i} {
            width: calc(#{(100 * $i / $maxColumns)}vw - var(--gap));
            align-self: var(--align-self-col);
        }
    }
</style>