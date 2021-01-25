<template>
    <div ref="tagElement" class="tag" :class="configClass">
        <FontAwesomeIcon v-if="icon" :icon="icon" /> {{ label }}
    </div>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue } from "vue-property-decorator";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

@Component({
    components: {
        FontAwesomeIcon
    }
})
class Tag extends Vue {
    @Prop({
        required: true
    })
    label: string|undefined;
    
    @Prop()
    icon: string|undefined;

    @Prop()
    type: string|undefined;

    @Prop()
    color: string|undefined;

    @Prop()
    size: string|undefined;

    @Ref('tagElement')
    tagElement: HTMLSpanElement|undefined;

    get configClass() {
        return `tag-${ this.type ?? 'flat' } tag-${ this.size ?? 'md' }`;
    }

    mounted() {
        if (this.tagElement) {
            this.tagElement.style.setProperty('--tag-color', this.color ?? 'var(--primary-color)');
        }
    }
}

export default Tag;
</script>

<style lang="scss">
    .tag {
        width: auto;
        height: auto;
        display: inline-block;
        padding: 0.5rem;
        border-radius: 40px;
        font-size: 0.8rem;
        font-weight: normal;
        text-align: left;

        &.tag-flat, &.tag-outline {
            border: 1px solid var(--tag-color);
        }

        &.tag-outline {
            color: var(--tag-color);
        }

        &.tag-flat {
            background: var(--tag-color);
            color: rgba(255,255,255);
        }

        &.tag-sm {
            font-size: 0.7rem;
            padding: 0.3rem;
        }

        &.tag-md {
            font-size: 0.8rem;
            padding: 0.5rem;
        }

        &.tag-lg {
            font-size: 1rem;
            padding: 0.7rem;
        }
    }
</style>