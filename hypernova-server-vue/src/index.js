import hypernova from 'hypernova/server'
import { renderVue, Vue } from 'hypernova-vue'
import express from 'express'
import path from 'path'

import ProductList from './components/ProductList.vue'

hypernova({
  devMode: true,
  getComponent (name, context) {
    if (name === 'ProductList') {
      return renderVue(name, Vue.extend(ProductList))
    }
  },
  port: process.env.PORT || 3030,

  createApplication () {
    const app = express()

    app.use(express.static(path.join(process.cwd(), 'dist')))

    return app
  }
})
