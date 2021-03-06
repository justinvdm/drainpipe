drainpipe.unwrap = unwrap

function drainpipe(x) {
  var curr = unwrap(x)
  self._drainpipe_chain = true

  function self(fn) {
    if (!arguments.length) return curr

    var args = Array.prototype.slice.call(arguments, 1)
    args.unshift(curr)
    curr = unwrap(fn.apply(fn, args))

    return self
  }

  return self
}

function unwrap(x) {
  return (x || 0)._drainpipe_chain ? x() : x
}

module.exports = drainpipe
