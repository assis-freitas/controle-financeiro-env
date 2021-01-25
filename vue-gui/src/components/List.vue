<template>
    <ul class="list">
        <li v-for="(item, index) in data" :key="_key(item, index)">
            <slot :item="item" :index="index">{{  item }}</slot>
        </li>
    </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
class List extends Vue {
    @Prop({
        required: true
    })
    data: any[]|undefined;

    @Prop()
    keyItem: string|undefined;

    _key(item: any, defaultValue: any) {
        if (this.keyItem) {
            return item[this.keyItem] ?? defaultValue;
        }

        return defaultValue;
    }
}

export default List;
</script>

<style lang="scss">
    ul.list {
        border: 1px solid var(--gray-color);
        border-radius: 10px;
        list-style: none;
        text-align: left;
        padding: 0;
        margin: 0;

        & > li {
            padding: 1vh 1vw;
            border-bottom: 1px solid var(--gray-color);
            color: rgb(103,103,103);
            display: flex;
            justify-content: space-between;

            &:last-child {
                border-bottom: 0;
            }
        }
    }
</style>