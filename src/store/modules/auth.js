import { login, register } from "@/services/AuthService" // { login, register } REFENCIA ESPECIFICAMENTE DUAS FUNÇÕES DENTRO DO ARQUIVO
import { logout } from "@/services/AuthService" // { logout } REFENCIA ESPECIFICAMENTE UMA FUNÇÃO DENTRO DO ARQUIVO

export default {
  namespaced: true,
  state: {
    user: {},
    token: "",
    menus: {},
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload
    },
    SET_TOKEN(state, payload) {
      state.token = payload
    },
    SET_MENUS(state, payload){
        state.menus = payload
    },
  },
  actions: {
        /**
       * AO REGISTRAR-SE PERSISTIR OS DADOS RETORNADOS DA API E FAZER O AUTO-LOGIN
       * @param commit
       * @param userData
       * @returns {Promise<void>}
       */
        async register({ commit }, userData) {
            const { data } = await register(userData)

            //CHAMA A ACTION
            commit("SET_USER", data.user)
            commit("SET_TOKEN", data.token)
            commit("SET_MENUS", data.menus)
        },
        /**
       * LOGIN E PERSISTÊNCIA DOS DADOS NO LOCAL STORAGE
       * @param commit
       * @param email
       * @param password
       * @returns {Promise<void>}
       */
        async login({ commit }, { email, password }) {
            const { data } = await login(email, password)

            commit("SET_USER", data.user)
            commit("SET_TOKEN", data.token)
            commit("SET_MENUS", data.menus)
        },
        /**
       * LIMPAR A SESSÃO DO USUÁRIO E PERSISTIR O LOGOUT
       * @param commit
       * @returns {Promise<void>}
       */
        async logout({ commit }) {
            await logout()

            commit("SET_USER", {})
            commit("SET_TOKEN", "")
            commit("SET_MENUS", {})
        },
        /**
        * Forçar o logout caso o token esteja inválido*/
        forceLogout({ commit }){
            commit("SET_USER", {})
            commit("SET_TOKEN", "")
            commit("SET_MENUS", {})
        },
  },
  getters: {
        /**
       * RETORNA O TOKEN ARMAZENADO NO STORAGE
       * @param store
       * @returns {boolean}
       */
        isAuthenticated(store) {
          return !!store.token
        },
        /**
       * RETORNA O USUÁRIO LOGADO NA SESSÃO
       * @param store
       * @returns {any}
       */
        user(store) {
          return store.user
        },
        userMenus(store){
            return store.menus
        },
  },
}
