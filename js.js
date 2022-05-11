


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
let timerCountdownFunction;

function timer(sec){
    clearInterval(timerCountdownFunction);

    if (sec<1){
        alert('Please enter a number greater than 1');
        userTimerInput.value = '';
        return;
    }
    
    stopButton.addEventListener('click', ()=>{
        clearInterval(timerCountdownFunction);
    });
    resetButton.addEventListener('click', ()=>{
        clearInterval(timerCountdownFunction);
        timerText.innerText = '00:00';
        document.title = 'Pomodoro Timer';
    })
    
    
    timerCountdownFunction = setInterval(function() {
        hourDisplay = Math.floor(sec/(60*60));
        minDisplay = Math.floor(sec%(60*60)/60);
        secDisplay = sec % 60;
        if (hourDisplay>0){
            if (minDisplay<10 && secDisplay<10){
                timerText.innerText =hourDisplay +':0'+ minDisplay+':0'+secDisplay;
                document.title = hourDisplay + ':0' + minDisplay+':0'+secDisplay;
            }
            else if (minDisplay<10){
                timerText.innerText =hourDisplay +':0'+ minDisplay+':'+secDisplay;
                document.title = hourDisplay + ':0' + minDisplay+':'+secDisplay;
            }
            else if (secDisplay<10){
                timerText.innerText =hourDisplay +':'+ minDisplay+':0'+secDisplay;
                document.title = hourDisplay + ':' + minDisplay+':0'+secDisplay;
            }
            else{
                timerText.innerText =hourDisplay +':'+ minDisplay+':'+secDisplay;
                document.title = hourDisplay + ':' + minDisplay+':'+secDisplay;
            }
        }
        else if (secDisplay <10){
            timerText.innerText = minDisplay+':0'+secDisplay;
            document.title = minDisplay+':0'+secDisplay;
        } else{
            timerText.innerText = minDisplay+':'+secDisplay;
            document.title = minDisplay+':'+secDisplay;
        } 
        sec -= 1;
        if (sec<0) {
            clearInterval(timerCountdownFunction);   
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