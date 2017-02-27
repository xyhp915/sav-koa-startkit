import Koa from 'koa'
import {Router} from 'sav-router'
import {schemaPlugin} from 'sav-router-schema'

import actions from './actions/index'

import {propPlugin} from './koa-plugins/prop'
import {authPlugin} from './router-plugins/auth'

let port = 3000
let app = new Koa()

app.use(propPlugin)

let router = new Router({
  case: 'camel'
})

router.use(schemaPlugin)
router.use(authPlugin)

router.declare(actions)
app.use(router.route())

app.listen(port)
console.log(`server: http://localhost:${port}`)
