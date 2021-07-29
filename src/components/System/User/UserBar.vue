<template>
    <v-menu
        bottom
        min-width="200px"
        rounded
        offset-y
    >
        <template v-slot:activator="{ on }">
            <v-btn
                icon
                x-large
                v-on="on"
                class="mx-1"
            >
                <v-avatar
                    color="brown"
                    size="36"
                >
                    <span class="white--text text-h6">{{ user.initials }}</span>
                </v-avatar>
            </v-btn>
        </template>
        <v-card>
            <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                    <v-avatar
                        color="brown"
                    >
                        <span class="white--text text-h5">{{ user.initials }}</span>
                    </v-avatar>
                    <h3>{{ user.fullName }}</h3>
                    <p class="text-caption mt-1">
                        {{ user.email }}
                    </p>
                    <v-divider class="my-3"></v-divider>
                    <v-btn
                        depressed
                        rounded
                        text
                    >
                        <i class="mdi mdi-account-edit"></i>
                        Minha conta
                    </v-btn>
                    <v-divider class="my-3"></v-divider>
                    <v-btn
                        depressed
                        rounded
                        text
                        @click="themeChange"
                    >
                        <template v-if="this.$vuetify.theme.dark">
                            <i class="mdi mdi-brightness-6 yellow--text"></i>
                            Light
                        </template>
                        <template v-else>
                            <i class="mdi mdi-moon-waning-crescent blue--text text--darken-3"></i>
                            Dark
                        </template>
                    </v-btn>
                    <v-divider class="my-3"></v-divider>
                    <v-btn
                        depressed
                        rounded
                        text
                        @click="logout"
                    >
                        <i class="mdi mdi-exit-to-app"></i>
                        Sair
                    </v-btn>
                </div>
            </v-list-item-content>
        </v-card>
    </v-menu>
</template>

<script>
import {mapActions} from "vuex"

export default {
  name: "UserBar",
  data() {
    return {
      user: {
        initials: "LR",
        fullName: "Lucas",
        email: "lucas.rigon@ufn.edu.br",
      },
    }
  },
  methods: {
    ...mapActions({ dispatchLogout: "Auth/logout"  }),
    async logout() {
      await this.dispatchLogout()
      this.$router.push({ name: "login", query: { param: "teste", teste: "teste" } })
    },
    themeChange(){
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
}
</script>

<style scoped>

</style>
