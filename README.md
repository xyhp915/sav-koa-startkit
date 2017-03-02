# sav-koa-startkit
startkit for savjs and koa2

#### 框架使用

```js

import Koa from 'koa'
import {Router} from 'koa-router'

let app = new Koa()
let router = new Router()

app.use(router.route())

app.listen(3000)

```


#### 接口模块定义

```js

@props({
    path: 'account'
})
class AccountInterface {
    @get
    profile() {}
}

@gen
@impl(AccountInterface)
class Account {
    async profile() {}
}

```



#### 路由大模块
- Api接口层
- View页面视图层

