<template>
    <button ref="buttonElement" :type="type" class="btn" :class="btnClassConfig" @click="click">
        <slot>
            <FontAwesomeIcon :icon="icon" /> {{ label }}
        </slot>
    </button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Ref, Vue } from "vue-property-decorator";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

@Component({
    components: {
        FontAwesomeIcon
    }
})
class Button extends Vue {
    @Prop()
    label: string|undefined;

    @Prop()
    color: string|undefined;

    @Prop()
    size: string|undefined;

    @Prop({
        default: 'button'
    })
    type: string|undefined;

    @Prop()
    icon: string|undefined;

    @Prop()
    design: string|undefined;

    @Prop({
        default: 'circle'
    })
    borderRoundType: string|undefined;

    @Ref()
    buttonElement: HTMLButtonElement|undefined;
    
    @Emit()
    click() {
        return this.buttonElement;
    }

    get btnClassConfig() {
        return `btn-${ this.design ?? 'flat' } btn-${ this.size ?? 'md' } btn-border-${ this.borderRoundType }`;
    }

    mounted() {
        if (this.buttonElement) {
            this.buttonElement.style.setProperty('--button-color-var', this.color ?? 'var(--primary-color)');
        }
    }
}

export default Button;
</script>

<style lang="scss">
    .btn {
        cursor: pointer;
        margin: 1vh 0;
        outline: 0;
        transition: 0.2s;
        margin: 1vh 0.2vw;

        &.btn-border-circle {
            border-radius: 30px;
        }

        &.btn-border-rounded {
            border-radius: 5px;
        }

        &.btn-border-square {
            border-radius: 0;
        }

        &.btn-flat {
            border: 1px solid var(--button-color-var);
            background: var(--button-color-var);
            color: rgb(255,255,255);

            &:hover {
                box-shadow: 0 2px 5px 0 rgba(00, 00, 00, .5);
            }
        }

        &.btn-outline {
            border: 1px solid var(--button-color-var);
            color: var(--button-color-var);
            background: transparent;

            &:hover {
                background: var(--button-color-var);
                color: rgb(255, 255, 255);
            }
        }

        &.btn-sm {
            padding: 0.5rem;
            font-size: 0.8rem;
        }

        &.btn-md {
            padding: 0.7rem;
            font-size: 0.9rem;
        }

        &.btn-lg {
            padding: 1rem;
            font-size: 1.3rem;
        }
    }
</style>