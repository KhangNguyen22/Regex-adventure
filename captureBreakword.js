//module.exports means export this module!!!
module.exports = function(str) {
    //The below returns true or false.
    var m=/\bx=(\d+)\b/.exec(str)
    return m ? m[1] : null
}

