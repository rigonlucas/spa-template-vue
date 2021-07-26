/**
 *
 * FERRAMENTAS E PLUGIN'S DO VUE
 *
 */
import Vue from "vue"
import App from "./App.vue"

/**
 *
 * VEEVALIDATE ^3 IMPORTS
 *
 */

import { extend } from "vee-validate"
import * as rules from "vee-validate/dist/rules"
import { messages } from "vee-validate/dist/locale/pt_BR.json"

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // spread todas as regras
    message: messages[rule], // registra as mensagens com em pt-br para cada regra
  })
})


/**
 *
 * FERRAMENTAS IMPLEMENTADAS
 *
 */
import router from "./router" //IMPORTA AS RODAS DA SPA
import store from "./store" //CAMADA DE PERSISTÊNCIA DA SESSÃO
import { ApiPlugin } from "./services/api/apiClient" //BASE DE CHAMADA HTTP PARA A API
import "@/bootstrap/index" //INICIALIZADOR DE COMPONENTES DE MÁSCARA

/**
 *
 * ESTILOS DA APLICAÇÃO
 *
 */
import "./style/style.scss"
import "mdi-icons/css/materialdesignicons.min.css"

Vue.use(ApiPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app")
