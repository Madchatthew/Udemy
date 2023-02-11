// function isPangram(sentence) {
//     let lowerCased = sentence.toLowerCase()
//     for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//         if (lowerCased.indexOf(char) === -1) {
//             return false
//         }
//     }
//     return true
// }

//Newer method. Doesn't work for IE11

function isPangram(sentence) {
    let lowerCased = sentence.toLowerCase()
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (!lowerCased.includes(char)) {
            return false
        }
    }
    return true
}