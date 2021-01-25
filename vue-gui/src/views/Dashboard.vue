<template>
    <div>
        <Row justifyContent="center">
            <Col>
                <Tag :label="`Renda: R$ ${ totalRendas }`" :icon="rendaIcon" :color="rendaColor"/>
            </Col>
            <Col>
                <Tag :label="`Gastos: R$ ${ totalGastos }`" :icon="gastosIcon" :color="gastosColor"/>
            </Col>
            <Col>
                <Tag :label="`Disponível: R$ ${ totalDisponivel }`" icon="wallet"/>
            </Col>
        </Row>
        <Row>
            <Alert title="Parabéns!" message="Você está indo bem! Continue assim e no final vai ta com dinheiro sobrando..." color="var(--success-color)" size="lg"/>
        </Row>
        <Row justifyContent="center">
            <Col size="4">
                <CardRendaGasto :data="rendas" title="Rendas" btnIcon="plus" :titleIcon="rendaIcon" :color="rendaColor"/>
            </Col>
            <Col size="4">
                <CardRendaGasto :data="gastos" title="Gastos" btnIcon="minus" :titleIcon="gastosIcon" :color="gastosColor"/>
            </Col>
        </Row>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue";
import Row from "@/components/Row.vue";
import Col from "@/components/Col.vue";
import Tag from "@/components/Tag.vue";
import CardRendaGasto from "@/components/CardRendaGasto.vue";
import Alert from "@/components/Alert.vue";

@Component({
    components: {
        Row,
        Col,
        Card,
        Tag,
        CardRendaGasto,
        Alert
    }
})
class Dashboard extends Vue {
    rendaColor = "var(--renda-default-color)";
    rendaIcon = "money-bill-alt";

    gastosColor = "var(--gastos-default-color)";
    gastosIcon = "receipt";

    rendas = [
        { data: "15/01/2021", label: 'Pagamento de Salário', valor: 1500 },
        { data: "17/01/2021", label: 'Transferência de João', valor: 200 },
        { data: "20/01/2021", label: 'Depósito no caixa', valor: 800 }
    ];

    gastos = [
        { data: "19/01/2021", label: 'Conta de Água', valor: 300 },
        { data: "23/01/2021", label: 'Conta de Energia', valor: 500 },
        { data: "29/01/2021", label: 'Compra Carrefour Express', valor: 1000 }
    ];

    get totalGastos() {
        return parseFloat(this.gastos.map((item) => item.valor).reduce((prevVal, currentVal) => prevVal + currentVal).toFixed(2));
    }

    get totalRendas() {
        return parseFloat(this.rendas.map((item) => item.valor).reduce((prevVal, currentVal) => prevVal + currentVal).toFixed(2));
    }

    get totalDisponivel() {
        return (this.totalRendas - this.totalGastos).toFixed(2);
    }
}

export default Dashboard;
</script>

<style lang="scss">

</style>