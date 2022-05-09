function getCurrentTime(){
    //time in milliseconds
    currentTime = new Date().getTime();
    
}

let currentTime;



timerText = document.querySelector('.timer');
startButton30 = document.querySelector('.start-30');
startButton25 = document.querySelector('.start-25');
startButton15 = document.querySelector('.start-15');
startButton5 = document.querySelector('.start-5');
startButtonCustom = document.querySelector('.start-custom');
stopButton = document.querySelector('.stop');



startButton30.addEventListener('click',()=> {
    stopButton.addEventListener('click',()=>{
        clearInterval(y);
    });
    let sec = 1800;
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
        if (sec<0) clearInterval(y);            
    },1000)
});

startButton25.addEventListener('click',()=> {
    stopButton.addEventListener('click',()=>{
        clearInterval(y);
    });
    let sec = 1500;
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
        if (sec<0) clearInterval(y);            
    },1000)
});

startButton15.addEventListener('click',()=> {
    stopButton.addEventListener('click',()=>{
        clearInterval(y);
    });
    let sec = 900;
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
        if (sec<0) clearInterval(y);            
    },1000)
});

startButton5.addEventListener('click',()=> {
    stopButton.addEventListener('click',()=>{
        clearInterval(y);
    });
    let sec = 300;
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
        if (sec<0) clearInterval(y);            
    },1000)
});
