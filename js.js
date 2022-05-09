function getCurrentTime(){
    //time in milliseconds
    currentTime = new Date().getTime();
    
}

let currentTime;



timerText = document.querySelector('.timer');
startButton = document.querySelector('.start-25');
stopButton = document.querySelector('.stop');





startButton.addEventListener('click',()=> {
    stopButton.addEventListener('click',()=>{
        clearInterval(y);
    });
    let sec = 100;
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
})
