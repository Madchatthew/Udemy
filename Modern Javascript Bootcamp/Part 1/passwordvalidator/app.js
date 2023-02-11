function isValidPassword(password, username) {
    if (password.length < 8) {
        return false
    } else if (password.includes(` `)) {
        return false
    } else if (password.includes(username)) {
        return false
    } else {
        return true
    }
}

console.log(isValidPassword('bob', 'cjessen'))
console.log(isValidPassword('klkdsein', 'cjessen'))
console.log(isValidPassword('kdjsiw jl', 'cjessen'))
console.log(isValidPassword('kdjsiwcjessenjl', 'cjessen'))
console.log(isValidPassword('kdjsiwcjlklj;2345234234;lk234;lkj;sdlkjra;lskdjfa;lksjf;l', 'georgeboblee'))

// function isValidPassword(password, username) {
//     if (password.length < 8) {
//         return false
//     }
//     if (password.includes(` `)) {
//         return false
//     }
//     if (password.includes(username)) {
//         return false
//     }
//     return true
//     }
// }

// function isValidPassword(password, username) {
//     if ( (password.length < 8) || (password.includes(` `)) || (password.includes(username)) ) {
//         return false
//     }
//     return true
//     }
// }

// function isValidPassword(password, username) {
//     const tooShort = password.length < 8
//     const hasSpace = password.includes(` `)
//     const tooSimiliar = password.includes(username)
//     if (tooShort || hasSpace || tooSimiliar) return true
//
//      return false
// }