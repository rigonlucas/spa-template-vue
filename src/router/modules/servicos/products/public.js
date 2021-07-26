
export default [
    {
        path: "/busca",
        name: "search",
        component: () => import("@/views/Product/Components/ProductSearchPage"),
    },
    {
        path: "/produto/:id",
        name: "product",
        props: true,
        component: () =>import("@/views/Product/Views/ProductPage"),
    },
]