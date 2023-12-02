import Vue from 'vue'
import axios from 'axios'

const Axios = axios.create({
  baseURL: `${process.env.VUE_APP_URL}/api`
})

Axios.interceptors.response.use((response) => {
  if (response.data) {
    if (typeof response.data.mensagem === 'string') Vue.prototype.$notificacao(response.data.mensagem)
    else if (typeof response.data.erro === 'string') Vue.prototype.$notificacao(response.data.erro, 'erro')
    else if (typeof response.data.atencao === 'string') Vue.prototype.$notificacao(response.data.atencao, 'atencao')
    else if (typeof response.data.informacao === 'string') Vue.prototype.$notificacao(response.data.informacao, 'informacao')
  }

  return response
}, (error) => {
  if (!error.response) {
    Vue.prototype.$notificacao('Erro ao processar requisição. Tente novamente!', 'erro')

    delete axios.defaults.headers.Authorization
  } else if (error.response.status === 401) {
    Vue.prototype.$notificacao(error.response.data.mensagem, 'atencao')
  } else if (error.response.status === 403) {
    Vue.prototype.$notificacao('Usuário sem permissão', 'atencao')
  } else if (error.response.status === 404) {
    Vue.prototype.$notificacao('Requisição não encontrada!', 'erro')
    return Promise.reject(error)
  } else if (error.response.status === 500) {
    Vue.prototype.$notificacao(error.response.data.erro || error.response.data.error || 'Erro no servidor, tente novamente mais tarde. Se presistir, contate alguém da equipe!', 'erro', true)
  } else {
    Vue.prototype.$notificacao('Erro ao processar requisição. Tente novamente!', 'erro')
  }

  return Promise.resolve(error.response)
})

Vue.prototype.$axiosLocal = Axios

export default Axios
