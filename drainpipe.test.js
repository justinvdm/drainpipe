require('chai').should()
var dp = require('./drainpipe')


describe("dp", function() {
  it("should pipe a value through a chain of functions", function() {
    function add1(x) {
      return x + 1
    }

    function mul2(x) {
      return x * 2
    }

    dp(23)
      (add1)
      (mul2)
      ()
      .should.equal(48)
  })

  it("should unwrap a wrapped initial value", function() {
    function identity(x) {
      return x
    }

    dp(
      dp(
        dp(23)
           (identity))
         (identity))
       (identity)
      ()
      .should.equal(23)
  })

  it("should unwrap a wrapped return value", function() {
    function identity(x) {
      return dp(x)
    }

    dp(23)
      (identity)
      (identity)
      (identity)
      ()
      .should.equal(23)
  })
})
