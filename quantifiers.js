//module.exports means export this module!!!
module.exports = function(str) {
    //The below returns true or false.
    return /^\d+\.jpe?g$/.test(str)
}

