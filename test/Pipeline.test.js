/**
 * Created by Domon on 17/4/3.
 */

import Pipeline from '../dist'
import assert from 'power-assert'

describe('Pipeline', function () {
  it('works correctly', function () {
    const ppl = Pipeline(_ => _.length, _ => _ * 2)
    assert(ppl([1, 2, 3]) === 6)
    assert(ppl.length === 2)
  })
  it('push and pop', function () {
    let ppl = Pipeline(_ => _.map(i=>i+1), _ => _.filter(i => i > 5))
    ppl.push(_=>_.sort())
    assert(ppl.length===3)
    assert(ppl([1,3,7,5]).toString()===[6,8].toString())
  })
  it('directly pipe',function () {
    let ppl = Pipeline(3,_=>_+1,_=>_*2)
    assert(ppl == 8)
  })
})