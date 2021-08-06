<template>
    <div>
        <v-snackbar
            v-model="snackbar.snackbarAviso"
            :timeout="snackbar.timer"
            @close="save.message = null"
        >
            <b class="text-uppercase">
                {{ this.snackbar.message }}
            </b>
            <template v-slot:action="{ attrs }">
                <v-btn
                    text
                    v-bind="attrs"
                    color="pink"
                    @click="snackbar.snackbarAviso = false"
                >
                    fechar
                </v-btn>
            </template>
        </v-snackbar>
        <v-dialog
            v-model="acceptVisible"
            persistent
            max-width="500"
        >
            <v-card>
                <v-card-title class="text-h5">
                    Termos de uso
                </v-card-title>
                <v-card-text>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="startRedacao('agree')"
                    >
                        Aceitar termos
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-row v-if="userTerms">
            <v-col
                cols="12"
                sm="12"
                md="9">
                <v-card
                    outlined
                    height="100vh">
                    <v-toolbar flat>
                        <v-toolbar-title>Minha redação</v-toolbar-title>
                    </v-toolbar>
                    <v-tabs centered>
                        <v-tab>
                            <v-icon left>
                                mdi-comment-question-outline
                            </v-icon>
                            orientações
                        </v-tab>
                        <v-tab>
                            <v-icon left>
                                mdi-book
                            </v-icon>
                            meu tema
                        </v-tab>
                        <v-tab>
                            <v-icon left>
                                mdi-pen
                            </v-icon>
                            Escreva
                        </v-tab>
                        <v-tab :disabled="this.writePercent < 100">
                            <v-icon left>
                                mdi-check-circle
                            </v-icon>
                            enviar
                        </v-tab>

                        <v-tab-item class="py-1 px-8">
                            <v-card
                                outlined
                                flat>
                                <v-card-text>
                                    <p>
                                        Dicas para utilizar o sistema
                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item class="py-1 px-8">
                            <v-card
                                outlined
                                flat>
                                <v-card-text>
                                    <p>
                                        Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
                                    </p>

                                    <p>
                                        Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.
                                    </p>

                                    <p class="mb-0">
                                        Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
                                    </p>
                                    <p>
                                        Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
                                    </p>

                                    <p>
                                        Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
                                    </p>

                                    <p>
                                        Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
                                    </p>

                                    <p>
                                        Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
                                    </p>

                                    <p class="mb-0">
                                        Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item class="py-1 px-8">
                            <v-card
                                outlined
                                flat
                            >
                                <v-card-text>
                                    <v-progress-linear
                                        :value="writePercent"
                                        :color="writeColor"
                                        height="30"
                                        :disabled="true"
                                    >
                                        <strong v-if="this.writePercent < 100">
                                            {{ this.writePercent }}%
                                        </strong>
                                    </v-progress-linear>
                                    <v-textarea
                                        v-model="texto"
                                        height="100vh"
                                        name="input-7-1"
                                        filled
                                        :label="this.texto ? '' : 'Escreva sua redação aqui' "
                                        auto-grow
                                        @paste.prevent
                                        @drag.prevent
                                        @keydown="typing"
                                    ></v-textarea>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item class="py-1 px-8">
                            <v-card
                                outlined
                                flat>
                                <v-card-title>
                                    Entregar redação
                                </v-card-title>
                                <v-card-text>
                                    {{ texto }}
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>
                </v-card>
            </v-col>
            <v-col
                cols="12"
                sm="12"
                md="3">
                <v-card outlined>
                    <v-card-text
                        align="center">
                        <v-tooltip left>
                            <template v-slot:activator="{ on, attrs }">
                                <v-alert
                                    :color="colorWarning"
                                    icon="mdi-clock"
                                    border="left"
                                    prominent
                                    colored-border
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    <v-chip
                                        class="ma-2"
                                        :color="colorWarning"
                                        text-color="white"
                                        large
                                    >
                                        <h2>{{ timer }}</h2>
                                    </v-chip>
                                </v-alert>
                            </template>
                            <span>Cronômetro de finalização da prova</span>
                        </v-tooltip>
                        <v-tooltip left>
                            <template v-slot:activator="{ on, attrs }">
                                <v-alert
                                    :color="writeColor"
                                    icon="mdi-pen"
                                    border="left"
                                    prominent
                                    colored-border
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    <v-chip
                                        class="ma-2"
                                        :color="writeColor"
                                        text-color="white"
                                        large
                                    >
                                        <h2>
                                            {{ texto.length }}/<small>{{ charMin }}</small>
                                        </h2>
                                    </v-chip>
                                </v-alert>
                            </template>
                            <span>Sinaliza a quantidade de caracteres mínimos</span>
                        </v-tooltip>
                    </v-card-text>
                </v-card>
                <v-divider class="py-2"></v-divider>
                <v-card outlined>
                    <v-card-text>
                        <v-row>
                            <v-col cols="6">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            block
                                            color="primary"
                                            :loading="isSavingLocal"
                                            v-bind="attrs"
                                            v-on="on"
                                            @click="saveLocal"
                                        >
                                            <v-icon dark>
                                                mdi-check
                                            </v-icon>
                                            Salvar
                                        </v-btn>
                                    </template>
                                    <span>Salvamento local</span>
                                </v-tooltip>
                            </v-col>
                            <v-col>
                                <div v-if="!!save.lastSave">
                                    <small>
                                        Salvo às
                                        <b>
                                            {{
                                                this.save.lastSave.getHours() + ":" + this.save.lastSave.getMinutes() + ":" + this.save.lastSave.getSeconds()
                                            }}
                                        </b>
                                    </small>
                                </div>
                                <div v-else>
                                    <small class="red--text text--darken-2">Você ainda <b>não salvou</b> sua redação</small>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
  name: "RedacaoTexto",
  data () {
    return {
      acceptVisible: true,
      userTerms: false,
      texto: "",
      startIn: null,
      finishedIn: null,
      timer: "--:--:--",
      colorWarning: "success darken-2",
      writePercent: 0,
      countDown: 7200,// 2 horas
      countDownFix:7200,
      charMin: 1000,
      writeColor: "red darken-2",
      isTyping: false,
      isSavingLocal: false,
      save: {
        lastSave: null,
      },
      snackbar:{
        message: null,
        snackbarAviso: false,
        timer: 9000,
        color: null,
      },
    }
  },
  watch: {
    texto: function (newValue, oldValue){
      if (newValue){
        let MIN_CHAR = this.charMin
        let NEW_TEXTO_LENGTH = newValue.length
        let OLD_TEXTO_LENGTH = oldValue.length
        let MESSAGE = "lembre-se de salvar sua redação periodicamente"
        if (MIN_CHAR > NEW_TEXTO_LENGTH){
          this.writePercent = (100 * NEW_TEXTO_LENGTH)/MIN_CHAR
          if (NEW_TEXTO_LENGTH === 200){
            this.writeColor = "red ligthen-1"
            if (OLD_TEXTO_LENGTH < NEW_TEXTO_LENGTH)
              {this.message(MESSAGE, 10000)}
          } else if (NEW_TEXTO_LENGTH === 700){
            this.writeColor = "yellow darken-1"
            if (OLD_TEXTO_LENGTH < NEW_TEXTO_LENGTH)
              {this.message(MESSAGE, 10000)}
          } else if (NEW_TEXTO_LENGTH === 1000){
            this.writeColor = "blue darken-1"
            if (OLD_TEXTO_LENGTH < NEW_TEXTO_LENGTH)
              {this.message(MESSAGE, 10000)}
          }
        } else {
          this.writePercent = 100
          this.writeColor = "green darken-1"
        }
      }
    },
    countDown: function (newValue){
      if (newValue){
        if (newValue === (this.countDownFix - 1800)){ //30 minutos
          this.colorWarning = "blue darken-2"
          this.saveLocal()
        }
        if (newValue === (this.countDownFix - 3600)){ //60 minutos
          this.colorWarning = "yellow darken-2"
          this.saveLocal()
        }
        if (newValue === (this.countDownFix - 5400)){ //90 minutos
          this.colorWarning = "red darken-2"
          this.saveLocal()
        }
        //console.log(newValue)
        if (newValue === 1){
          this.saveLocal()
          this.timer = "--:--:--"
          console.log(this.timer)
        }
        //console.log(newValue)
      }
    },
  },
  created() {

  },
  methods: {
    startRedacao(){
      this.acceptVisible = false
      this.userTerms = true
      this.countDownTimer()
    },
    convertSecToHour(secs){
      let hours = Math.floor(secs / (60 * 60))

      let divMinutes = secs % (60 * 60)
      let minutes = Math.floor(divMinutes / 60)

      let divisorSeconds = divMinutes % 60
      let seconds = Math.ceil(divisorSeconds)

      if (seconds < 9)
      {seconds = "0"+seconds}
      if (minutes < 9)
      {minutes = "0"+minutes}
      if (hours < 9)
      {hours = "0"+hours}


      let obj = {
        "h": hours,
        "m": minutes,
        "s": seconds,
      }
      let factor = ""
      if (obj.s === 0)
        {factor = "0"}
      return `${obj.h}:${obj.m}:${obj.s}${factor}`
    },
    countDownTimer() {
      let countDown = this.countDown
      if (countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1
          this.timer = this.convertSecToHour(countDown)
          this.countDownTimer()
        }, 1000)
      }
    },
    typing(){

    },
    saveLocal(){
      if (!this.isSavingLocal){
        this.isSavingLocal = true
        console.log(this.texto)

        setTimeout(() =>{
          this.message("Redação salva no SEU NAVEGADOR", 10000)
          this.isSavingLocal = false
          this.save.lastSave = new Date()
        }, 1000)
      }
    },
    message(message, timer){
      this.snackbar.message = message
      this.snackbar.color = "info"
      this.snackbar.timer = timer
      this.snackbar.snackbarAviso = true
    },
  },
}
</script>

<style scoped>

</style>
