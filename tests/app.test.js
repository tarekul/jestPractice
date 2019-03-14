const {add} = require('../app')
//const add = require('../app').add

test("takes two number and returns a number sum",()=>{
    expect(add(4,5)).toBe(9)
})

test("takes two number and returns a number sum",()=>{
    expect(add("4",5)).toBe('not a number')
})