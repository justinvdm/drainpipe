module.exports = drainpipe
drainpipe.unwrap = unwrap


function drainpipe(x) {
  var curr = unwrap(x)
  self._drainpipe_chain = true

  function self(fn) {
    if (!arguments.length) return curr
    curr = unwrap(fn(curr))
    return self
  }

  return self
}


function unwrap(x) {
  return (x || 0)._drainpipe_chain
    ? x()
    : x
}
