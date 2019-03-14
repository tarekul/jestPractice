const {validate} = require('./validate')

const add = (num1,num2) =>{
    required = [
        validate(num1),
        validate(num2)
    ]

    if(required.some((isValid)=> isValid === false)){
        return 'not a number'
    }
    
    return num1 + num2;
}

module.exports = {add}