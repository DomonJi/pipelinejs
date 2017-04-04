module.exports = function Pipeline() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  var chain = Array.from(fns, function (fn) {
    return typeof fn === 'function' ? fn : function (_) {
      return fn;
    };
  });
  var fn = function fn(arg) {
    return chain.reduce(function (f1, f2) {
      return f2(f1);
    }, arg);
  };
  return typeof fns[0] === 'function' ? new Proxy(fn, {
    get: function get(target, key) {
      return typeof chain[key] === 'function' ? chain[key].bind(chain) : chain[key];
    }
  }) : fn();
};
