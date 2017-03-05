import {gen, impl} from 'sav-decorator'
import {AccountInterface} from './AccountInterface'

@gen
@impl(AccountInterface)
export class Account {
  async login ({setState}) {
    setState({
      error: 0,
      message: 'login successed'
    })
  }
  async logout ({setState}) {
    setState({
      message: 'logout successed'
    })
  }
  async profile ({setState}) {
    setState({
      uid: 1001,
      username: 'jetiny'
    })
  }
}
