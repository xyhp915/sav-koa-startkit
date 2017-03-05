import {get, post} from 'sav-router'
import {req, res} from 'sav-router-schema'

export class AccountInterface {
  @res({
    props: {
      error: Number,
      message: String
    }
  })
  @post()
  @req({
    props: {
      username: String,
      password: String
    }
  })
  login () {}

  @res()
  @post()
  logout () {}

  @res({
    props: {
      uid: Number,
      username: String
    }
  })
  @get()
  profile () {}
}
