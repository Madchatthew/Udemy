// function reqListener () {
//     console.log(this.responseText);
//   }
  
//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener("load", reqListener);
//   oReq.open("GET", "http://www.example.org/example.txt");
//   oReq.send();

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
    return axios.get(url);
}

const printPlanets = ({ data }) => {
    for (let planet of data.results) {
        console.log(planet.name);
    }
    return Promise.resolve(data.next);
}

fetchNextPlanets()
.then(printPlanets)
.then(fetchNextPlanets)
.then(printPlanets)
.then(fetchNextPlanets)
.then(printPlanets)
.then(fetchNextPlanets)
.then(printPlanets)
.then(fetchNextPlanets)
.then(printPlanets)
.then(fetchNextPlanets)
.then(printPlanets)
.catch((err) => {
    console.log(err);
})


// const checkStatusAndParse = (response) => {
//     if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
//     return response.json()
// }

// const printPlanets = (data) => {
//     for (let planet of data.results) {
//         console.log(planet.name);
//     }
//     return Promise.resolve(data.next);
// }

// const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
//     return fetch(url);
// }

// fetch('https://swapi.dev/api/planets/')
// .then(checkStatusAndParse)
// .then(printPlanets)
// .then(fetchNextPlanets)
// .then(checkStatusAndParse)
// .then(printPlanets)
// .then(fetchNextPlanets)
// .then(checkStatusAndParse)
// .then(printPlanets)
// .then(fetchNextPlanets)
// .then(checkStatusAndParse)
// .then(printPlanets)
// .then(fetchNextPlanets)
// .then(checkStatusAndParse)
// .then(printPlanets)
// .catch((err) => {
//     console.log('Something went wrong with fetch!');
//     console.log(err);
// });

// fetch('https://swapi.dev/api/planets')
// .then(checkStatusAndParse)
// .then((data) => {
//     const filmURL = data.results[0].films[0];
//     return fetch(filmURL);
// })
// .then(checkStatusAndParse)
// .then((data) => {
//     console.log(data.title);
// })


// const firstReq = new XMLHttpRequest();

// firstReq.addEventListener('load', function() {
//     console.log('It Worked');
//     const data = JSON.parse(this.responseText);
//     for (let planet of data.results) {
//         console.log(planet.name);
//     }
// });
// firstReq.addEventListener('error', () => {
//     console.log('Error');
// });
// firstReq.open('GET', 'https://swapi.dev/api/planets');
// firstReq.send();
// console.log('Request Sent');