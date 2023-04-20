module.exports = {
    forEach(ar, fn) {
        for (let element of ar) {
            fn(element);
        }
    }
}