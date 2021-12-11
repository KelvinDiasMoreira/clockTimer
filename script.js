const getidTimer = document.getElementById("timecont");
let clockTime = 0;
let timeClock;

function criadorTime(segundos) {
    let criador = new Date(segundos * 1000);
    return criador.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'GMT' 
    });
}

function iniciaRelogio() {
    timeClock = setInterval(function(){
        clockTime++;
        getidTimer.innerHTML = criadorTime(clockTime);
        
    }, 1000);
    
}
    
const containerOptions = document.querySelector(".container-options");
const startTime = containerOptions.querySelector(".start");
const stopTime = containerOptions.querySelector(".stop");
const resetTime = containerOptions.querySelector(".reset");



startTime.addEventListener('click', function clockStart() {
    iniciaRelogio();
    getidTimer.style.color = 'black';
    startTime.setAttribute('disabled', '');
})

stopTime.addEventListener('click', function clockStop() {
    clearInterval(timeClock)
    clockTime = clockTime;
    startTime.removeAttribute('disabled', '');
    getidTimer.style.color = 'red';
    
})

resetTime.addEventListener('click', function clockReset() {
    clearInterval(timeClock);
    clockTime = 0;
    getidTimer.innerHTML = criadorTime(clockTime);
    getidTimer.style.color = 'black';
    startTime.removeAttribute('disabled', '');
})



