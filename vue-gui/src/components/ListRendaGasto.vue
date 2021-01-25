<template>
    <List :data="data">
        <template v-slot:default="slotProps">
            <Col align="center">
                <Tag :label="slotProps.item.data" size="sm" :icon="['far', 'calendar-alt']" />
            </Col>
            <Col align="center">
                {{ slotProps.item.label }}
            </Col>
            <Col align="center">
                <Tag :label="`R$ ${ slotProps.item.valor.toFixed(2).replace('.', '.') }`" size="sm" :icon="icon" :color="color" type="outline"/>
            </Col>
        </template>
    </List>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import List from "@/components/List.vue";
import Col from "@/components/Col.vue";
import Tag from "@/components/Tag.vue";

@Component({
    components: {
        List,
        Col,
        Tag
    }
})
class ListRendaGasto extends Vue {
    @Prop({
        required: true
    })
    data: any[]|undefined;

    @Prop()
    color: string|undefined;

    @Prop()
    icon: string|undefined;
}

export default ListRendaGasto;
</script>

<style lang="scss">

</style>