import {HomeInterface} from './HomeInterface'
import {gen, impl} from 'sav-decorator'

@gen
@impl(HomeInterface)
export class Home {
  async index (ctx) {
    ctx.body = 'xxx'
  }
}
