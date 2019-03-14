const {validate} = require('../validate')
// const validate = (num) =>{
//     if(typeof num === "number") return true
//     return false
// }

test("expect number input to return true",()=>{
    expect(validate(5)).toBe(true)
})

test("expect non-number input to return false",()=>{
    expect(validate("5")).toBe(false)
})

test("expect non-number input to return false",()=>{
    expect(typeof validate()).toBe("boolean")
})

