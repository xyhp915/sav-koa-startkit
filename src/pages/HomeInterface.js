import {get} from 'sav-router'
import {props} from 'sav-decorator'
import {view} from '../router-plugins/view'

@props({
  view: true,
  path: ''
})
export class HomeInterface {
  @view
  @get('~')
  index () {}

  @view
  @get
  about () {}
}
