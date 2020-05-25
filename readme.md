# drainpipe

![Build Status](https://api.travis-ci.org/justinvdm/drainpipe.png)

utility for piping a value through a chain of functions

```js
vv(23)
  (v => v * 2)
  (v => v + 2)
  (v => console.log(v))
// =>
48
```

## api

### `vv(x)`

Takes in a value and starts a chain.

### `vv(x)(fn[, arg1[, arg2[, ...]]])`

Takes in a function and optional extra arguments, calls the function with the
current value in the drainpipe chain and stores its result as the new value in
the drainpipe chain.

```js
function add(a, b) {
  return a + b
}

vv(23)
  (add, 1)
  (add, 3)
  (v => console.log(v)) // 27
```

### `vv(x)()`

Returns the current value in the drainpipe chain

```js
var x = vv(23)
  (v => v * 2)
  (v => v + 2)
  ()

console.log(x) // 48
```

## install

You can use this library as the npm package `drainpipe`:

```
npm i drainpipe
# or
yarn add drainpipe
```

It can be used in both es-module-aware and commonjs bundlers/environments.

```js
// es module
import vv from 'drainpipe'

// commonjs
const vv = require('drainpipe')
```

It can also be used a `<script>`:

```html
<script
  crossorigin
  src="https://unpkg.com/drainpipe/dist/umd/drainpipe.js"
></script>

<script>
  vv(23)(v => console.log(v))
</script>
```
