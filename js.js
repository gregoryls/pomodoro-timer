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
//hour text field
function timer(sec){
    
    console.log(typeof(sec));
    console.log(sec);
    let b = sec;
    console.log(b)
    if (sec<1){
        alert('Please enter a number greater than 1');
        userTimerInput.value = '';
        return;
    }
    if (b === NaN){
        alert('Please enter a number greater than 1');
        return;
    }
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
        if (sec<0) {
            clearInterval(y);   
            document.title = 'BzzzzzzBzzzzzz'
        }         
    },1000)
}

startButton30.addEventListener('click',()=> {
    timer(1800);
});

startButton25.addEventListener('click',()=> {
    timer(1500);
});

startButton15.addEventListener('click',()=> {
    timer(900);
});

startButton5.addEventListener('click',()=> {
    timer(300);
});
startButtonCustom.addEventListener('click',() =>{
    timer(userTimerInput.value*60);//convert user input to seconds
})

resumeButton.addEventListener('click', ()=>{
    let secondsRemaining = (minDisplay*60)+secDisplay;
    timer(secondsRemaining-1); //-1 second makes resuming countdown feel more fluid
})

const helpButton = document.getElementById('helpButton');
const helpModal = document.querySelector('.modal');
const helpClose = document.querySelector('.close');

helpButton.onclick = function() {
    helpModal.style.display = 'block';
}

helpClose.onclick = function() {
    helpModal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == helpModal) {
      helpModal.style.display = "none";
    }
  }