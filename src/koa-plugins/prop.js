import {prop, state, promise} from 'sav-prop'

export async function propPlugin (ctx, next) {
  prop(ctx)
  promise(ctx)
  state(ctx)
  await next()
}
