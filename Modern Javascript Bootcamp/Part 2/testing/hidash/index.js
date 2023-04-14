module.exports = {
    foreach(arr, fn) {
        for (let i = 0; i < arr; i++) {
            const value = arr[i];
            fn(value, i);
        }
    }
};

