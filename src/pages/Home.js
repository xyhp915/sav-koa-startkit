import {get} from 'sav-router'
import {gen, props} from 'sav-decorator'

@gen
@props({
  view: true
})
export class Home {
  @get('~')
  async index ({setState}) {
    setState({
      title: 'sav-koa-startkit'
    })
  }

  @get('/about')
  async about ({setState}) {
    setState({
      title: 'About'
    })
  }
}
