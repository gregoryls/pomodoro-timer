function getCurrentTime(){
    //time in milliseconds
    currentTime = new Date().getTime();
    
}

let currentTime;


timerText = document.querySelector('.timer');
startButton = document.querySelector('.start');
startButton.addEventListener('click',() =>{
    let timerLength = 50*1000;
    getCurrentTime();    
    let timerEnd = currentTime + timerLength;
    let x = setInterval(function() {
        getCurrentTime();
        //25 minutes converted to milliseconds
        
        let timerDistance = timerEnd - currentTime;
        console.log(timerDistance)
        let minutes = Math.floor((timerDistance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timerDistance % (1000 * 60)) / 1000);
        timerText.innerText = minutes + ':' + seconds;
        if (timerDistance<0){
            clearInterval(x);
            timerText.innerText = '00:00';
        }
    },1000);
    
    
});