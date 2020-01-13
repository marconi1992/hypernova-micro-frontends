import { renderVue, Vue } from 'hypernova-vue'
import ProductList from './components/ProductList.vue'

renderVue('ProductList', Vue.extend(ProductList))
