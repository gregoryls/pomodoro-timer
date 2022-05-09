function getCurrentTime(){
    //time in milliseconds
    currentTime = new Date().getTime();
    
}

let currentTime;



timerText = document.querySelector('.timer');
startButton = document.querySelector('.start');
stopButton = document.querySelector('.stop');

let min = 0;
    let sec = 100;
    stopButton.addEventListener('click',()=>{
        clearInterval(y);
    })
// let y = setInterval(function() {
//     if (min < 10 && sec < 10) timerText.innerText = '0'+min + ':' + '0'+sec;
//     else if (min<10)timerText.innerText = '0'+min + ':' + sec;
//     else if (sec<10)timerText.innerText = min + ':' + '0'+sec;
//     else timerText.innerText = min + ':' + sec;
    
//     sec -= 1;
//     if (sec<0) {
//         min -= 1;
//         sec = 59;
//     }    
//     if (min == 0 && sec == 0){
//         clearInterval(y);
        
//     }

// },1000);

let y = setInterval(function() {
    let minDisplay = Math.floor(sec/60);
    let secDisplay = sec % 60;
    if (secDisplay <10){
        timerText.innerText = minDisplay+':0'+secDisplay;
        document.title = minDisplay+':0'+secDisplay;
    } else{
        timerText.innerText = minDisplay+':'+secDisplay;
        document.title = minDisplay+':'+secDisplay;
    }
    
    sec -= 1;

    if (sec<0){
        clearInterval(y);
    }

},1000)