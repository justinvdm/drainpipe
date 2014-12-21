# drainpipe

pipe a value through a chain of functions

```javascript
vv(23)
  (function(v) { return v * 2 })
  (function(v) { return v + 2 })
  (function(v) { console.log(v) })  // 47
```


## install

node:

```
$ npm install drainpipe
```

browser:

```
$ bower install drainpipe
```

```html
<script src="/bower_components/drainpipe/drainpipe.js"></script>
```


## api

### `vv(x)`

Takes in a value and starts a drainpipe chain.

### `vv(x)(fn[, arg1[, arg2[, ...]]])`

Takes in a function and optional extra arguments, calls the function with the current value in the drainpipe chain and stores its result as the new value in the drainpipe chain.

```javascript
function add(a, b) {
  return a + b
}


vv(23)
  (add, 1)
  (add, 3)
  (function(v) { console.log(v) })  // 27
```

### `vv(x)()`

Returns the current value in the drainpipe chain

```javascript
var x = vv(23)
  (function(v) { return v * 2 })
  (function(v) { return v + 2 })
  ()

console.log(x)  // 47
```
