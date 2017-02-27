import {quickConf} from 'sav-decorator'

export const auth = quickConf('auth')

export function authPlugin (router) {
  router.provider({
    auth: processAction
  })
}

function processAction () {

}
