<template>
    <div id="app">
        <v-app id="inspire">
            <v-navigation-drawer
                app
                flat
                v-model="showMenu"
            >
                <bar-menu-left/>
            </v-navigation-drawer>

            <v-app-bar
                app
                flat
                color = "#003E7D"
                class="white--text"
            >
                <v-app-bar-nav-icon @click.stop="toggleMenu"  class="white--text"></v-app-bar-nav-icon>

                <v-toolbar-title>UFN</v-toolbar-title>
                <v-spacer></v-spacer>
                <user-bar/>
            </v-app-bar>

            <v-main class="">
                <v-container fluid>
                    <v-row>
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
  import UserBar from "@/components/System/User/UserBar"
  import BarMenuLeft from "@/components/System/Bar/BarMenuLeft"
  export default {
    components: {
      BarMenuLeft,
      UserBar,
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
      showMenu: false,
    }),
    methods: {
      toggleMenu(){
        this.showMenu = !this.showMenu
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
