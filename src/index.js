/**
 * Created by Domon on 17/4/3.
 */
module.exports = function Pipeline(...fns) {
  let chain = Array.from(fns, fn => typeof fn === 'function' ? fn : _ => fn)
  let fn = arg => chain.reduce((f1, f2) => f2(f1), arg)
  return typeof fns[0] === 'function' ? new Proxy(fn, {
    get: (target, key) => typeof chain[key] === 'function' ? chain[key].bind(chain) : chain[key]
  }) : fn()
}
