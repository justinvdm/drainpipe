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
})
