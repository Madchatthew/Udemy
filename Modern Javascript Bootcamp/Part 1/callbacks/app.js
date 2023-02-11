const btn = document.querySelector('button');

const moveX = (element, amount, delay, onSuccess, onFailure) => {
    setTimeout(() => {
        const bodyBoundry = document.body.clientWidth;
        const elRight = element.getBoundingClientRect().right;
        const currLeft = element.getBoundingClientRect().left;
        if(elRight + amount > bodyBoundry) {
            onFailure();
        } else {
            element.style.transform = `translateX(${currLeft + amount}px)`;
            onSuccess();
        }    
    }, delay);
};

moveX(btn, 100, 1000, () => {
    moveX(btn, 100, 1000, () => {
        moveX(btn, 100, 1000, () => {
            moveX(btn, 100, 1000, () => {
                moveX(btn, 1000, 1000, () => {
                    console.log('Are we done yet?')
                }, () => {
                    alert('Cannot move any further!!');    
                });
            }, () => {
                alert('Cannot move any further!!');
            });
        }, () => {
            alert('Cannot move any further!!');
        });
    }, () => {
        alert('Cannot move any further!!');
    });
}, () => {
    alert('Cannot move any further!!');
});

// moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//         moveX(btn, 100, 1000, () => {
//             moveX(btn, 100, 1000, () => {
//                 moveX(btn, 10000, 1000);
//             });
//         });
//     });
// });

// Callback Hell Example

// setTimeout(() => {
//     btn.style.transform = `translateX(100px)`;
//     setTimeout(() => {
//         btn.style.transform = `translateX(200px)`;
//         setTimeout(() => {
//             btn.style.transform = `translateX(300px)`;
//             setTimeout(() => {
//                 btn.style.transform = `translateX(400px)`;
//                 setTimeout(() => {
//                     btn.style.transform = `translateX(500px)`;
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000);