function getCurrentTime(){
    //time in milliseconds
    currentTime = new Date().getTime();
    
}

let currentTime;



timerText = document.querySelector('.timer');
startButton = document.querySelector('.start');
stopButton = document.querySelector('.stop');
startButton.addEventListener('click',() =>{
    stopButton.addEventListener('click',()=>{
        clearInterval(x);
    })
    let timerLength = 25*60*1000+1000; //+1000 so it displays XX:59 first instead of XX:58
    timerText.innerText = '25:00';
    getCurrentTime();    
    let timerEnd = currentTime + timerLength;
    let x = setInterval(function() {
        getCurrentTime();

        let timerDistance = timerEnd - currentTime;
        console.log(timerDistance)
        let minutes = Math.floor((timerDistance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timerDistance % (1000 * 60)) / 1000);
        if (seconds<10) seconds = '0'+seconds;
        if (minutes<10) minutes = '0'+minutes;
        timerText.innerText = minutes + ':' + seconds;
        if (timerDistance<0){
            clearInterval(x);
            timerText.innerText = '00:00';
        }
    },1000);
    
    
});
