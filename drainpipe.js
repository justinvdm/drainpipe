module.exports = drainpipe


function drainpipe(x) {
  var curr = x
  self._drainpipe_chain = true

  function self(fn) {
    if (!arguments.length) return curr
    curr = fn(curr)
    return self
  }

  return self
}
