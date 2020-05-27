const it = require('ava')
const vv = require('..')

it('should pipe a value through a chain of functions', t => {
  function add1(x) {
    return x + 1
  }

  function mul2(x) {
    return x * 2
  }

  t.is(48, vv(23)(add1)(mul2)())
})

it('should unwrap a wrapped intestial value', t => {
  function identity(x) {
    return x
  }

  t.is(23, vv(vv(vv(23)(identity))(identity))(identity)())
})

it('should unwrap a wrapped return value', t => {
  function identity(x) {
    return vv(x)
  }

  t.is(23, vv(23)(identity)(identity)(identity)())
})

it('should allow addtestional arguments to be given', t => {
  function add(x, y, z) {
    return x + y + z
  }

  function mul(x, y, z) {
    return x * y * z
  }

  t.is(216, vv(23)(add, 1, 3)(mul, 2, 4)())
})
