<template>
    <div class="card">
        <div class="card-title">
            <slot name="card-title">
                <h2><FontAwesomeIcon v-if="titleIcon" :icon="titleIcon" :style="_titleIconColor"/> {{ title }}</h2>
            </slot>
        </div>
        <div class="card-body">
            <slot></slot>
        </div>
        <div class="card-footer">
            <slot name="card-footer"></slot>
        </div>
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
class Card extends Vue {
    @Prop()
    title: string|undefined;

    @Prop()
    titleIcon: string|undefined;

    @Prop()
    titleIconColor: string|undefined;

    @Ref('icon')
    iconElement: HTMLElement|undefined;

    get _titleIconColor() {
        return { color: this.titleIconColor ?? "rgb(00,00,00)" };
    }
}

export default Card;
</script>

<style lang="scss">
    .card {
        width: 100%;
        box-shadow: 0 0 14px 2px rgba(00,00,00,.1);
        border-radius: 19px;
        padding: 1rem;

        & .card-title > h2 {
            font-weight: normal;
            font-size: 1.5rem;
            text-align: center;
        }

        & .card-footer {
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
    }
</style>