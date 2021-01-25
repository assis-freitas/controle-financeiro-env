<template>
    <div ref="alertElement" class="alert" :class="alertClassConfig">
        <slot>
            <h3 class="alert-title" v-if="title">{{ title }}</h3>
            <p>{{ message }}</p>
        </slot>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue } from "vue-property-decorator";

@Component({})
class Alert extends Vue {
    @Prop()
    title: string|undefined;

    @Prop({
        required: true
    })
    message: string|undefined;
    
    @Prop()
    size: string|undefined;

    @Prop()
    color: string|undefined;

    @Ref('alertElement')
    alertElement: HTMLDivElement|undefined;

    get alertClassConfig() {
        return `alert-${ this.size ?? 'md' }`;
    }

    mounted() {
        if (this.alertElement) {
            this.alertElement.style.setProperty('--alert-color-var', this.color ?? 'var(--primary-color)');
        }
    }
}

export default Alert;
</script>

<style lang="scss">
    .alert {
        border: 1px solid var(--alert-color-var);
        border-radius: 5px;
        min-width: 30vw;
        color: #717171;
        border-left-width: 3px;
        text-align: left;

        &.alert-title {
            margin: 1vh 0;
            font-weight: 300;
        }

        & p {
            margin: 1vh 0;
            font-weight: normal;
        }

        &.alert-sm {
            padding: 0.5vh 0.6vw;
            font-size: 0.8rem;
        }

        &.alert-md {
            padding: 1vh 1vw;
            font-size: 1rem;
        }

        &.alert-lg {
            padding: 1vh 2vw;
            font-size: 1.5rem;
        }
    }
</style>