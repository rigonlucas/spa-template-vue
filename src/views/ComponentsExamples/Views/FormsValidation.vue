<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <ValidationProvider rules="email" v-slot="{ errors }" name="email">
                    <input type="text" v-model="email">
                    <span>{{ errors[0] }}</span>
                    <div class="invalid-feedback">
                        Please provide a valid city.
                    </div>
                </ValidationProvider>
            </div>
        </div>
    </div>
</template>

<script>
import { ValidationProvider } from "vee-validate"
export default {
  name: "formsValidation",
  data(){
    return {
      email: "",
    }
  },
  components: {
    ValidationProvider,
  },
}
</script>

<style scoped>

</style>