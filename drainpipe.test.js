require('chai').should()
var vv = require('./drainpipe')


describe("drainpipe", function() {
  it("should pipe a value through a chain of functions", function() {
    function add1(x) {
      return x + 1
    }

    function mul2(x) {
      return x * 2
    }

    vv(23)
      (add1)
      (mul2)
      ()
      .should.equal(48)
  })

  it("should unwrap a wrapped initial value", function() {
    function identity(x) {
      return x
    }

    vv(vv(vv(23)
         (identity))
       (identity))
     (identity)
     ()
     .should.equal(23)
  })

  it("should unwrap a wrapped return value", function() {
    function identity(x) {
      return vv(x)
    }

    vv(23)
      (identity)
      (identity)
      (identity)
      ()
      .should.equal(23)
  })

  it("should allow additional arguments to be given", function() {
    function add(x, y, z) {
      return x + y + z
    }

    function mul(x, y, z) {
      return x * y * z
    }

    vv(23)
      (add, 1, 3)
      (mul, 2, 4)
      ()
      .should.equal(216)
  })
})
