import {quickConf} from 'sav-decorator'

export const view = quickConf('view')

export function viewPlugin (router) {
  router.provider({
    view: processAction
  })
}

function processAction () {

}
