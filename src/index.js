/**
 * Created by Domon on 17/4/3.
 */
export default function Pipeline(...functions) {
  let chain = Array.from(functions, fn => typeof fn === 'function' ? fn : _ => fn)
  let fn = arg => chain.reduce((f1, f2) => f2(f1), arg)
  fn.chain = chain
  fn.valueOf = fn
  return new Proxy(fn, {
    get: function (target, key) {
      if (key in fn && key !== 'length') return fn[key]
      return typeof chain[key] === 'function' ? chain[key].bind(chain) : chain[key]
    }
  })
}
