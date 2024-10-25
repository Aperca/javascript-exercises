const palindromes = function (str) {
    
    let smach= str.toLowerCase().split('').reverse().join('');
    return smach===str
}
// Do not edit below this line
module.exports = palindromes;
