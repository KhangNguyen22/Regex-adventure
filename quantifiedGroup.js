//module.exports means export this module!!!
module.exports = function(str) {
    //The below returns true or false.
    return /^(0x[a-fA-F0-9]{2}\s+){8}$/.test(str)
    
}

