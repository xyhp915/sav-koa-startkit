import Koa from 'koa'
import bodyParser from 'koa-bodyparser'

import {Router} from 'sav-router'
import {schemaPlugin} from 'sav-router-schema'

import apis from './apis/index'
import pages from './pages/index'

import {propPlugin} from './koa-plugins/prop'
import {authPlugin} from './router-plugins/auth'

let port = 3000
let app = new Koa()

app.use(propPlugin)
app.use(bodyParser())

let router = new Router({
  case: 'camel'
})

router.use(schemaPlugin)
router.use(authPlugin)

router.declare(apis.concat(pages))
app.use(router.route())

app.listen(port)
console.log(`server: http://localhost:${port}`)
