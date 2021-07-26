<template>
    <v-container>
        <v-row>
            <v-col cols="2">
                <v-btn
                    color="error"
                    small
                    block
                    @click="alertar"
                >
                    Click
                </v-btn>
            </v-col>
            <v-col>
                <v-dialog
                    v-model="dialog"
                    persistent
                    max-width="290"
                    @click:outside="closeDialog('outside')"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            color="primary"
                            dark
                            v-bind="attrs"
                            v-on="on"
                        >
                            Open Dialog
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title class="text-h5">
                            Use Google's location service?
                        </v-card-title>
                        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="error darken-1"
                                text
                                @click="closeDialog('disagree')"
                            >
                                Disagree
                            </v-btn>
                            <v-btn
                                color="green darken-1"
                                text
                                @click="closeDialog('agree')"
                            >
                                Agree
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

// import { fetchProducts } from "@/services/ProductService"
// import { mapActions } from "vuex"


export default {
  name: "Home",
  components: {

  },
  data () {
    return {
      dialog: false,
    }
  },
  methods: {
    alertar(){
      alert()
    },
    closeDialog(ev){
      console.log(ev)
      this.dialog = false
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
