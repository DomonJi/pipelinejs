# pipelinejs
> A simple Pipeline implementation for Javascript

## Install
``` shell
npm i --save pipelinejs
```
## Usage

``` javascript
import Pipeline from 'pipelinejs'

function inc(_){return _+1}
function double(_){return _*2}
function length(_){return _.length}
function square(_){return _*_}

// if you put data into constructor, it will pipe directly
Pipeline(3, inc, double) // 8
// equals to double(inc(3))

// and you can put data later
let ppl1 = Pipeline(length, double)
ppl1([1,2,3]) // 6 
// equals to double(length([1,2,3]))
ppl1.length // 2 
// number of functions in pipeline
ppl1[0] // [Function]

// you can use `push` `pop` `shift` `unshift` and any other array method
ppl1.push(square) // push function `square` into pipeline
ppl1([2,3,4]) // 36
// equals to square(double(length([1,2,3])))

// you can combine two pipeline
let ppl2 = Pipeline(inc,square)
let ppl3 = Pipeline(ppl1,ppl2)
ppl3([1,2,3]) // 49
// equals to square(inc(double(length([1,2,3]))))
```

