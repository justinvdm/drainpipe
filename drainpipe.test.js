require('chai').should()
var drainpipe = require('./drainpipe')


describe("drainpipe", function() {
  it("should pipe a value through a chain of functions", function() {
    function add1(x) {
      return x + 1
    }

    function mul2(x) {
      return x * 2
    }

    drainpipe(23)
      (add1)
      (mul2)
      ()
      .should.equal(48)
  })

  it("should unwrap a wrapped initial value", function() {
    function identity(x) {
      return x
    }

    drainpipe(
      drainpipe(
        drainpipe(23)
           (identity))
         (identity))
       (identity)
      ()
      .should.equal(23)
  })

  it("should unwrap a wrapped return value", function() {
    function identity(x) {
      return drainpipe(x)
    }

    drainpipe(23)
      (identity)
      (identity)
      (identity)
      ()
      .should.equal(23)
  })
})
