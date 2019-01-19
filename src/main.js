import Vue from 'vue'
import App from './App.vue'
import Time from './time'
import Header from './components/Header.vue'
import NovoJogo from './components/NovoJogo.vue'
import Tabela from './components/Tabela.vue'
import Placar from './components/Placar.vue'
import Modal from './components/Modal.vue'
import Busca from './components/Busca.vue'
import Clube from './components/Clube.vue'
import Libertadores from './components/Libertadores.vue'
import Rebaixados from './components/Rebaixados.vue'
import $ from 'jquery'
import PopperJs from 'popper.js'

import 'bootstrap/dist/css/bootstrap.min.css'

window.jQuery = window.$ = $;
window.Popper = PopperJs;
require('bootstrap');

Vue.config.productionTip = false

Vue.filter('ucwords', (valor) => valor.charAt(0).toUpperCase() + valor.slice(1));

Vue.component('v-header', Header)
Vue.component('v-novo-jogo', NovoJogo)
Vue.component('v-tabela', Tabela)
Vue.component('v-placar', Placar)
Vue.component('v-modal', Modal)
Vue.component('v-busca', Busca)
Vue.component('v-clube', Clube)
Vue.component('v-libertadores', Libertadores)
Vue.component('v-rebaixados', Rebaixados)

new Vue({
  render: h => h(App),
  provide(){
		return {
			timesColecao: [
        new Time('américa MG', require('./assets/img/escudos/america_mg.png')),
        new Time('Atlético MG', require('./assets/img/escudos/atletico_mg.png')),
        new Time('Atlético PR', require('./assets/img/escudos/atletico_pr.png')),
        new Time('Bahia', require('./assets/img/escudos/bahia.png')),
        new Time('Botafogo', require('./assets/img/escudos/botafogo.png')),
        new Time('Ceará', require('./assets/img/escudos/ceara.png')),
        new Time('Chapecoense', require('./assets/img/escudos/chapecoense.png')),
        new Time('Corinthians', require('./assets/img/escudos/corinthians.png')),
        new Time('Cruzeiro', require('./assets/img/escudos/cruzeiro.png')),
        new Time('Flamengo', require('./assets/img/escudos/flamengo.png')),
        new Time('Fluminense', require('./assets/img/escudos/fluminense.png')),
        new Time('Grêmio', require('./assets/img/escudos/gremio.png')),
        new Time('Internacional', require('./assets/img/escudos/internacional.png')),
        new Time('Palmeiras', require('./assets/img/escudos/palmeiras.png')),
        new Time('Paraná', require('./assets/img/escudos/parana.png')),
        new Time('Santos', require('./assets/img/escudos/santos.png')),
        new Time('São Paulo', require('./assets/img/escudos/sao_paulo.png')),
        new Time('Sport', require('./assets/img/escudos/sport.png')),
        new Time('Vasco', require('./assets/img/escudos/vasco.png')),
        new Time('Vitória', require('./assets/img/escudos/vitoria.png'))
			]
		}
	}
}).$mount('#app')
