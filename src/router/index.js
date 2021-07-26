import Vue from "vue"
import VueRouter from "vue-router"
import store from "@/store"

/**
 *
 * IMPORTS DOS MÓDULOS DE ROTAS
 *
 * **/
import Auth from "./modules/auth"
import User from "./modules/user"
import HomeGeneric from "./modules/home/home"
import ComponetnsExemplo from "./modules/components"

Vue.use(VueRouter)

/**
 *
 * LISTA DE ROTAS POR MEIO DE MÓDILOS
 *
 * Recebe arrays e faz um spread  na constante routes
 * **/
const routes = [
  ...Auth,
  ...User,
  ...HomeGeneric,
  ...ComponetnsExemplo,
]


/**
 *
 * EXPORT DAS ROTAS DO VUE-ROUTER
 *
 * **/
const router = new VueRouter({
  mode: "history",
  // eslint-disable-next-line no-undef
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0 })
  },
})


/**
 *
 * FAZ O REDUCE PARAs VERIFICAR SE O ATRIBUTO EXISTE NO ARRAY DAS ROTAS
 *
 * @param {String} attribute
 * @param {Array} routes
 */
function getInheritanceMetaAttribute(attribute, routes) {
  return routes.reduce((acc, route) => {
    if (attribute in route.meta) {
      return route.meta[attribute]
    }

    return acc
  }, false)
}


/**
 *
 * COMPARA SE O USUARIOS CONTÉM ALGUMA DAS PERMISSÕES
 *
 * @param {Array} routePerm [RECEBER ESTE PARÂMETRO UTILIZANDO O REDUCE PARA PEGAR A HERANÇA DE PERMISSÃO DO PAI]
 * @param {Array} userPerm
 */
function matchUserPermissions(routePerm, userPerm){
  return routePerm.filter(val => userPerm.includes(val))
}


/**
 *
 * ANTES DE ENTRAR NAS ROTAS SERÁ VALIDADO O ACESSO
 *
 * @param {String} routeTo
 * @param {String} routeFrom
 * @param {Vue} next
 */
router.beforeEach((routeTo, routeFrom, next) => {
  const isAuthenticated = store.getters["Auth/isAuthenticated"]
  const isProtectedRoute = getInheritanceMetaAttribute("isProtected", routeTo.matched)
  const isOnlyGuestRoute = getInheritanceMetaAttribute("onlyGuest", routeTo.matched)

  if (isOnlyGuestRoute && isAuthenticated) {
    return next(routeFrom) //volta para a rota anterior
  }

  if (!isProtectedRoute) {
    return next() // permite passar para uma rota caso ela não seja protegida. Ex: Login
  }

  if (isAuthenticated) {
    // validações de permissões do usuário
    if (routeTo.meta.permissions){
      const user = store.getters["Auth/user"]
      const routePerm = getInheritanceMetaAttribute("permissions", routeTo.matched)
      const matchPerms = matchUserPermissions(routePerm, user.permissions)
      if (!matchPerms.length){
        return next(routeFrom) //volta para a rota anterior caso o usuário não tenha permissão
      }
    }

    return next() // permite passar para uma rota caso estiver autenticado
  }

  return next({ name: "login" }) // se nada acima for true, solicita o login
})


export default router
