# sav-koa-startkit
startkit for savjs and koa2

#### 框架使用

```js

import Koa from 'koa'
import {Router} from 'sav-router'

let app = new Koa()
let router = new Router()

app.use(router.route())

app.listen(3000)

```


#### 接口模块定义

```js

class TestInterface {
  @conf('hello', 'world')
  test () {}
}

@gen({auth: true})
@impl(TestInterface)
  class Test {
  async test () {}
}

Test = {
  name: 'Test',
  props: {auth: true},
  actions: {
    test: {
      name: 'test',
      method: async test () {},
      middleware: [
        ['hello', 'world']
      ]
    }
  }
}

```



#### 路由大模块
- Api接口层
- View页面视图层

