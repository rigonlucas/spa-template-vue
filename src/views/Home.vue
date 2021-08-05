<template>
    <v-container>
        <redacao-texto/>
        <v-row v-show="false">
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
            <v-col cols="2">
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
                            block
                            small
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
            <v-col>
                <v-card>
                    <v-card-title>
                        Dashboard
                    </v-card-title>
                    <v-card-text>
                        <line-chart
                            title_props="BIzinho"
                            :labels_props="labelsLineChart"
                            :datasets_props="datasetsLineChart"
                        />
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

// import { fetchProducts } from "@/services/ProductService"
// import { mapActions } from "vuex"


import LineChart from "@/components/Base/LineChart"
import RedacaoTexto from "@/components/System/Redacao/RedacaoTexto"
export default {
  name: "Home",
  components: {
    RedacaoTexto,
    LineChart,
  },
  data () {
    return {
      dialog: false,
      labelsLineChart:[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ],
      datasetsLineChart:[
        {
          label: "Financeiro",
          data: [21, 100, 53, 94, 23, 64, 100],
        },
        {
          label: "Desempenho em avaliações",
          data: [62, 30, 50, 90, 80, 6, 60],
        },
        {
          label: "Entrega de atividades",
          data: [12, 30, 54, 8, 0, 18, 69],
        },
        {
          label: "Desempenho em avaliações sad",
          data: [122, 30, 542, 8, 10, 128, 69],
        },
        {
          label: "Desempenho em avaliações sad",
          data: [231, 123, 542, 8, 10, 231, 69],
        },
      ],
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
