import {prop, state, promise} from 'sav-prop'

export function propPlugin (ctx) {
  prop(ctx)
  promise(ctx)
  state(ctx)
}
