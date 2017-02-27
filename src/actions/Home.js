import {get} from 'sav-router'
import {gen} from 'sav-decorator'

@gen
export class Home {
  @get('~')
  async index () {

  }
}
