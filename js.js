function getCurrentTime(){
    //time in milliseconds
    currentTime = new Date().getTime();
    
}

let currentTime;


const userTimerInput = document.querySelector('#userTimerInput')
const timerText = document.querySelector('.timer');
const startButton30 = document.querySelector('.start-30');
const startButton25 = document.querySelector('.start-25');
const startButton15 = document.querySelector('.start-15');
const startButton5 = document.querySelector('.start-5');
const startButtonCustom = document.querySelector('.start-custom');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');
const resumeButton = document.querySelector('.resume');


let minDisplay;
let secDisplay;

function test(sec){
    stopButton.addEventListener('click', ()=>{
        clearInterval(y);
    });
    resetButton.addEventListener('click', ()=>{
        clearInterval(y);
        timerText.innerText = '00:00';
        document.title = 'Pomodoro Timer';
    })
    
    
    let y = setInterval(function() {
        minDisplay = Math.floor(sec/60);
        secDisplay = sec % 60;
        if (secDisplay <10){
            timerText.innerText = minDisplay+':0'+secDisplay;
            document.title = minDisplay+':0'+secDisplay;
        } else{
            timerText.innerText = minDisplay+':'+secDisplay;
            document.title = minDisplay+':'+secDisplay;
        } 
        sec -= 1;
        if (sec<0) clearInterval(y);            
    },1000)
}

startButton30.addEventListener('click',()=> {
    test(1800);
});

startButton25.addEventListener('click',()=> {
    test(1500);
});

startButton15.addEventListener('click',()=> {
    test(900);
});

startButton5.addEventListener('click',()=> {
    test(300);
});
startButtonCustom.addEventListener('click',() =>{
    console.log(userTimerInput.value)
    test(userTimerInput.value*60);//convert user input to seconds
})

resumeButton.addEventListener('click', ()=>{
    let secondsRemaining = (minDisplay*60)+secDisplay;
    test(secondsRemaining-1); //-1 second makes resuming countdown feel more fluid
})