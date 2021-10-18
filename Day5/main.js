'use strict'

let nIntervId;
displayTime();
let sec = 30;

function displayTime() {
    console.log("test");
    nIntervId = setInterval(CountdownTime,1000);
}

function CountdownTime(){
    if((--sec) == 0) {   
        stopDisplayTime();
    }
    let time = document.querySelector('.container h1');
    time.innerHTML = sec;

    console.log(sec);
}
    
function stopDisplayTime(){
    clearInterval(nIntervId);
}


// 밀리초 = 1/1000초
//new Data(x) => 1970년  1월  1일  0시  0분  0초에서  x밀리초가 더해진 시간을 생성, 파라매터 없이 적으면 현재 시간 출력
//setInterval => 지정된 초 동안 함수를 반복하여 실행함 
