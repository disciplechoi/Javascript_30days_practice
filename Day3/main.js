'use strict';

loadJoke();

const button = document.querySelector('button');
button.addEventListener('click',loadJoke);
/*loadjoke()라고 하면 클릭 시 작동하지 않는다... 이상하다
-> addEventListener에서는 괄호가 필요없다.
*/

// function loadJoke(){
//     const config ={
//         headers :{
//             'Accept' : 'application/json'
//         },
//     }

//     fetch('https://icanhazdadjoke.com/', config)
//     .then(response => response.json())
//     .then(function(data){
//         const p = document.getElementById('joke');
//         p.innerHTML=data.joke;
//     });

// }


function loadJoke(){
    let promise = fetch('https://icanhazdadjoke.com/').then(response => response.json());

    console.log(promise);
}





