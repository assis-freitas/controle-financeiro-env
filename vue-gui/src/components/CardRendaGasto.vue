<template>
    <Card :title="title" :titleIcon="titleIcon" :titleIconColor="color">
        <Button icon="sort-amount-up-alt" design="outline"/>
        <Button icon="search" design="outline"/>

        <ListRendaGasto :data="data" :icon="btnIcon" :color="color"/>

        <template v-slot:card-footer>
            <Button label="Adicionar Renda" :icon="btnIcon" :color="color"/>
        </template>
    </Card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";
import ListRendaGasto from "@/components/ListRendaGasto.vue";

@Component({
    components: {
        Card,
        Button,
        ListRendaGasto
    }
})
class CardRendaGasto extends Vue {
    @Prop({
        default: []
    })
    data: {data: string, label: string, valor: number}[]|undefined;

    @Prop({
        required: true
    })
    title: string|undefined;

    @Prop()
    titleIcon: string|undefined;

    @Prop()
    btnIcon: string|undefined;

    @Prop()
    color: string|undefined;

}

export default CardRendaGasto;
</script>

<style lang="scss">

</style>