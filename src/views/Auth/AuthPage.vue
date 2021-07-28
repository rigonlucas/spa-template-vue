<template>
    <v-row
        justify="center"
        align="center"
    >
        <v-col
            cols="10"
            sm="3"
        >
            <login class="pa-md-4 mx-lg-auto"/>
        </v-col>
    </v-row>
</template>

<script>
import Login from "@/views/Auth/components/Login"

export default {
  name: "AuthPage",
  components: { Login },
  created() {
    console.log(this.$route.query)
  },
   mounted() {
   },
  methods: {
    teste() {

    },
  },
}
</script>

<style scoped>
.auth-page {
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 10px;
}

.login-wrapper, .register-wrapper {
  width: 400px;
  margin: 0 20px;
}
</style>