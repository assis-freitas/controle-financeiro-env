<template>
    <div>
        <Card :title="title" :titleIcon="titleIcon" :titleIconColor="color">
            <Button icon="sort-amount-up-alt" design="outline"/>
            <Button icon="search" design="outline"/>

            <ListRendaGasto :data="data" :icon="btnIcon" :color="color"/>

            <template v-slot:card-footer>
                <Button label="Adicionar Renda" :icon="btnIcon" :color="color" @click="showRegistro"/>
            </template>
        </Card>

        <Modal ref="modalRegistro" title="Título Modal">
            <label>Data</label>
            <input type="date" name="" id="">

            <label>Label</label>
            <input type="text" name="" id="">

            <label>Valor</label>
            <input type="number" name="" id="">
        
            <template v-slot:footer>
                <Button label="Botão 01"/>
                <Button label="Botão 03"/>
                <Button label="Botão 04"/>
            </template>
        </Modal>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";
import ListRendaGasto from "@/components/ListRendaGasto.vue";
import Modal from "./Modal.vue";

@Component({
    components: {
        Card,
        Button,
        ListRendaGasto,
        Modal
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

    @Ref('modalRegistro')
    modalRegistro: Modal|undefined;

    showRegistro() {
        if (this.modalRegistro) {
            this.modalRegistro.show();
        }
    }
}

export default CardRendaGasto;
</script>

<style lang="scss">

</style>