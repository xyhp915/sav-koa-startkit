import {get, post} from 'sav-router'
import {req, res} from 'sav-router-schema'

import {auth} from '../router-plugins/auth'

export class AccountInterface {
  @res({
    props: {
      error: Number,
      message: String
    }
  })
  @post
  @req({
    props: {
      userName: String,
      password: String
    }
  })
  @auth(false)
  login () {}

  @res
  @post
  logout () {}

  @res({
    props: {
      userId: Number,
      userName: String
    }
  })
  @get
  profile () {}
}
