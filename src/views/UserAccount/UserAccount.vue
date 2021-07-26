<template>
    <section class="d-flex align-items-start">
        <nav class="nav nav-pills flex-column">
            <router-link class="nav-link" :to="{ name: 'conta' }">Conta</router-link>
            <router-link class="nav-link" :to="{ name: 'conta-meusdados' }">Endereços</router-link>
        </nav>
        <div class="flex-grow-1">
            <router-view />
        </div>
    </section>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "UserAccount",
  computed: {
    ...mapGetters({ user: "Auth/user" }),
  },
}
</script>

<style scoped>

</style>