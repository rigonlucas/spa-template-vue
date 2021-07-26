<template>
    <div id="app" class="d-flex flex-column">
        <Header/>
        <main class="flex-grow-1">
            <router-view/>
        </main>
        <Footer/>
    </div>
</template>

<script>
  import Header from "./components/Header"
  import Footer from "./components/Footer"
  export default {
    components: {
      Footer,
      Header,
    },
  }
</script>

<style lang="scss">
  #app {
    min-height: 100vh;
  }

  .modal.show {
    display: block;
    background-color: rgba(0, 0, 0, 0.4);
  }

  /* Transitions */
  /* Slide para modals e confirmar*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease-out;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
