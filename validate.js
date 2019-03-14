const validate = (num) =>{
    if(typeof num === "number") return true
    return false
}

module.exports = {validate}