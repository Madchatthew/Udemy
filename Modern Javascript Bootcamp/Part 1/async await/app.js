async function get3Pokemon() {
    const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
    const results = await Promise.all([prom1, prom2, prom3]);
    printPokemon(results);
}

function printPokemon(results) {
    for (let pokemon of results) {
        console.log(pokemon.data.name);
    }
}
get3Pokemon();

// Parallel Requests

// async function get3Pokemon() {
//     const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
//     const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
//     const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
//     const poke1 = await prom1;
//     const poke2 = await prom2;
//     const poke3 = await prom3;
//     console.log(poke1.data);
//     console.log(poke2.data);
//     console.log(poke3.data);
// }
// get3Pokemon();

// Sequential requests

// async function get3Pokemon() {
//     const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
//     const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
//     const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
//     console.log(poke1.data);
//     console.log(poke2.data);
//     console.log(poke3.data);
// }
// get3Pokemon();




// async function getPlanets() {
//     const res = await axios.get('https://swapi.dev/api/planets/');
//     console.log(res.data);
// }

// getPlanets();

// const btn = document.querySelector('button');

// const moveX = (element, amount, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const bodyBoundry = document.body.clientWidth;
//             const elRight = element.getBoundingClientRect().right;
//             const currLeft = element.getBoundingClientRect().left;
//             if(elRight + amount > bodyBoundry) {
//                 reject({bodyBoundry, elRight, amount});
//             } else {
//                 element.style.transform = `translateX(${currLeft + amount}px)`;
//                 resolve();
//             }    
//         }, delay);
//     })
// };

// async function animateRight(el, amt) {
//     await moveX(el, amt, 1000);
//     await moveX(el, amt, 1000);
//     await moveX(el, amt, 1000);
//     await moveX(el, amt, 1000);
//     await moveX(el, amt, 1000);
//     await moveX(el, amt, 1000);
//     await moveX(el, amt, 1000);
//     await moveX(el, amt, 1000);
// }
// animateRight(btn, 100).catch((err) => {
//     console.log('All Done!');
//     animateRight(btn, -100);
// })

// moveX(btn, 100, 1000)
// .then(() => moveX(btn, 100, 1000))
// .then(() => moveX(btn, 100, 1000))
// .then(() => moveX(btn, 1200, 1000))
// .then(() => moveX(btn, 100, 1000))
// .catch(({bodyBoundry, elRight, amount}) => {
//     console.log(`Body is ${bodyBoundry}px wide.`);
//     console.log(`Element is at ${elRight}px, ${amount}px is to large.`);
// })