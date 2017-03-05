import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import favicon from 'koa-favicon'

import {Router} from 'sav-router'
import {schemaPlugin} from 'sav-router-schema'
import {viewPlugin} from 'sav-router-view'

import apis from './apis/index'
import pages from './pages/index'

import {propPlugin} from 'sav-prop'

import {resolve} from 'path'

let port = 3000
let app = new Koa()

app.use(favicon(resolve(__dirname, '../favicon.ico')))
app.use(bodyParser())

let router = new Router({
  case: 'camel',
  viewRoot: resolve(__dirname, 'views')
})

router.use(propPlugin)
router.use(viewPlugin)
router.use(schemaPlugin)

router.declare(apis.concat(pages))
app.use(router.route())

app.listen(port)
console.log(`server: http://localhost:${port}`)
