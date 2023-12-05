<template>
  <v-app>
    <loading :value="loading" />
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="headline font-weight-regular d-flex align-center">
        PortuPy
      </div>
      <v-spacer />

      <v-btn
        v-if="$vuetify.breakpoint.name === 'xl' || $vuetify.breakpoint.name === 'lg' || $vuetify.breakpoint.name === 'md'"
        href="#download"
        text
      >
        <span class="mr-2">download</span>
      </v-btn>
      <v-btn
        v-if="$vuetify.breakpoint.name === 'xl' || $vuetify.breakpoint.name === 'lg' || $vuetify.breakpoint.name === 'md'"
        href="#documentacao"
        text
      >
        <span class="mr-2">Documentação</span>
      </v-btn>
      <v-btn
        v-if="$vuetify.breakpoint.name === 'xl' || $vuetify.breakpoint.name === 'lg' || $vuetify.breakpoint.name === 'md'"
        href="#sobre"
        text
      >
        <span class="mr-2">Sobre</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    loading: true,
    perfil: window.atob(localStorage.getItem('umbrella:perfil')),
    dataAtual: '',
    drawer: false,
    group: null,
    nome: window.atob(localStorage.getItem('umbrella:nome')),
    email: window.atob(localStorage.getItem('umbrella:email')),
    imagemPerfil: null
  }),

  watch: {
    group () {
      this.drawer = false
    }
  },

  created () {
    setTimeout(() => {
      this.atualizarData()
    }, 200)
  },

  methods: {
    atualizarData () {
      this.dataAtual = this.$day().format('dddd - DD - MMMM - YYYY HH:mm:ss')

      setTimeout(() => {
        this.atualizarData()
      }, 1000)
    },
    abrirJenela (tela) {
      if (tela !== this.$router.currentRoute.path) {
        const route = this.$router.resolve({ path: tela })

        if (tela) {
          this.$router.push(route.href)
        }
      } else {
        window.location.reload(true)
      }
    }
  }
}
</script>
