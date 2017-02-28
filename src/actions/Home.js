import {get} from 'sav-router'
import {gen} from 'sav-decorator'

@gen
export class Home {
  @get('~')
  async index ({ctx}) {
    ctx.body = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <a href="account/profile">profile</a>
    <a href="account/profile?uid=1234">profile?uid=1234</a>
    <form action="account/login" method="post">
      <input type="hidden" name="username" value="username"/>
      <input type="hidden" name="password" value="password"/>
      <button type="submit">login</button>
    </form>
    <form action="account/logout" method="post">
      <button type="submit">logout</button>
    </form>
  </body>
</html>`
  }
}
