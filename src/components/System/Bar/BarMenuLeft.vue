<template>
    <v-list dense>
        <v-list-item>
            <v-list-item-action>
                <v-icon>mdi-toolbox-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>Serviços</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item>
            <v-list-item-action>
                <v-icon>mdi-settings</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>Configurações</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item>
            <v-list-item-action>
                <v-icon>mdi-help</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>Ajuda</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
export default {
  name: "BarMenuLeft",
}
</script>

<style scoped>

</style>
