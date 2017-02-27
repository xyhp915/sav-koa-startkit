import {gen, impl} from 'sav-decorator'
import {AccountInterface} from './AccountInterface'

@gen
@impl(AccountInterface)
export class Account {
  async login () {

  }
  async logout () {

  }
  async profile () {

  }
}
