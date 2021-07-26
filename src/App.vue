<template>
    <div id="app">
        <v-app id="inspire">
            <v-app-bar
                app
                color = "#003E7D"
                flat
            >
                <v-container class="py-0 fill-height">
                    <v-btn
                        v-for="link in links"
                        :key="link"
                        text
                        color="white"
                    >
                        {{ link }}
                    </v-btn>
                    <v-btn @click="themeChange">
                        Trocar tema
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-responsive max-width="260">
                        <v-text-field
                            color="gray"
                            :loading="false"
                            dense
                            flat
                            hide-details
                            rounded
                            solo-inverted
                        ></v-text-field>
                    </v-responsive>

                    <v-avatar
                        class="ml-10"
                        color="grey"
                        size="48"
                    >
                        <i class="mdi mdi-account mdi-36px"></i>
                    </v-avatar>
                </v-container>
            </v-app-bar>

            <v-main class="">
                <v-container fluid>
                    <v-row>
                        <v-col cols="1">
                            <v-sheet rounded="lg" >
                                <v-list color="transparent">
                                    <v-list-item
                                        v-for="n in 5"
                                        :key="n"
                                        link
                                    >
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                List Item {{ n }}
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>

                                    <v-divider class="my-2"></v-divider>

                                    <v-list-item
                                        link
                                        color="grey lighten-4"
                                    >
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                Refresh
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-sheet>
                        </v-col>

                        <v-col>
                            <v-sheet
                                min-height="70vh"
                                rounded="lg"
                            >
                                <router-view></router-view>
                            </v-sheet>
                        </v-col>
                    </v-row>
                </v-container>
            </v-main>
        </v-app>
    </div>
</template>

<script>
  //import Header from "./components/Header"
  //import Footer from "./components/Footer"
  export default {
    components: {
      //Footer,
      //Header,
    },
    data: () => ({
      links: [
        "Dashboard",
        "Messages",
        "Profile",
        "Updates",
      ],
    }),
    methods: {
      themeChange(){
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      },
    },
  }
</script>

<style lang="scss">
  #app {
    min-height: 100vh;
  }

  .modal.show {
    display: block;
    background-color: rgba(0, 0, 0, 0.4);
  }

  /* Transitions */
  /* Slide para modals e confirmar*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease-out;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
