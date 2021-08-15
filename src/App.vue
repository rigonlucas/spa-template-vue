<template>
    <div id="app">
        <v-app id="inspire">
            <div v-if="isAuthenticated">
                <v-navigation-drawer
                    id="left"
                    v-model="showLeftMenu"
                    app
                    flat
                >
                    <bar-menu-left/>
                </v-navigation-drawer>

                <v-navigation-drawer
                    id="right"
                    v-model="showRightMenu"
                    app
                    flat
                    right
                >
                    <bar-menu-right/>
                </v-navigation-drawer>

                <v-app-bar
                    app
                    flat
                    color="#003E7D"
                    class="white--text"
                >
                    <v-app-bar-nav-icon
                        class="white--text"
                        @click.stop="toggleLeftMenu"></v-app-bar-nav-icon>
                    <bar-header-left/>
                    <v-spacer></v-spacer>
                    <bar-header-right/>
                    <v-app-bar-nav-icon
                        class="white--text"
                        @click.stop="toggleRightMenu">
                        <v-icon>mdi-toolbox</v-icon>
                    </v-app-bar-nav-icon>
                </v-app-bar>
            </div>

            <v-main :class="[isAuthenticatedClass]">
                <v-container fluid>
                    <router-view></router-view>
                </v-container>
            </v-main>

            <v-footer
                v-if="isAuthenticated"
                app>
                EITA
            </v-footer>
        </v-app>
    </div>
</template>

<script>
  //import Header from "./components/Header"
  //import Footer from "./components/Footer"
  import BarMenuLeft from "@/components/System/Bar/BarMenuLeft"
  import BarHeaderRight from "@/components/System/Bar/BarHeaderRight"
  import BarHeaderLeft from "@/components/System/Bar/BarHeaderLeft"
  import { mapGetters } from "vuex"
  import BarMenuRight from "@/components/System/Bar/BarMenuRight"
  export default {
    components: {
      BarMenuRight,
      BarHeaderLeft,
      BarHeaderRight,
      BarMenuLeft,
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
      menus: [],
      backgroundColor: "blue",
      showLeftMenu: false,
      showRightMenu: false,
    }),
    computed: {
      ...mapGetters({ isAuthenticated: "Auth/isAuthenticated" }),
      isAuthenticatedClass(){
        console.log(this.isAuthenticated)
        if (this.isAuthenticated){
          return
        }
        return "blue darken-5 overflow-hiidden"
      },
    },
    mounted() {
      //this.menus = this.userMenus()
      //console.log(Object.keys(this.menus.left))
      //console.log(Object.entries(this.menus.left))
    },
    methods: {
      //...mapGetters({ userMenus: "Auth/userMenus" }),
      toggleLeftMenu(){
        this.showLeftMenu = !this.showLeftMenu
      },
      toggleRightMenu(){
        this.showRightMenu = !this.showRightMenu
      },
    },
  }
</script>
