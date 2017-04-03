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
Pipeline(3, inc, double)
// 8

let ppl1 = Pipeline(length, double)
ppl1([1,2,3]) // 6
ppl1.length // 2
ppl1[0] // [Function]

// you can use push pop shift unshift and any other array method
let ppl2 = ppl1.push(square) 
ppl2([2,3,4]) // 36

// you can combine two pipeline
let ppl3 = Pipeline(inc,square)
let ppl4 = Pipeline(ppl1,ppl3)
ppl4([1,2,3]) // 49
```

