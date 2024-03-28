let secondsUnitsDigit=0;
let secondsTensDigit=0;
let minutesUnitsDigit=0;
let minutesTensDigit=0;
let timer;

function startStopWatch(){
    document.getElementById('start').disabled=true;
    document.getElementById('stop').disabled=false;
    document.getElementById('reset').disabled=false;
    timer=setInterval(incrementTimer,1000);
}

function incrementTimer(){
    secondsUnitsDigit++;
    if(secondsUnitsDigit==10){
        secondsUnitsDigit=0;
        secondsTensDigit++;
        if(secondsTensDigit==6){
            secondsTensDigit=0;
            minutesUnitsDigit++;
            if(minutesUnitsDigit==10){
                minutesUnitsDigit=0;
                minutesTensDigit++;
                if(minutesTensDigit==10){
                    document.getElementById('timer').innerHTML="99:59";
                    clearInterval(timer);
                    timer=null;
                }
            }
        }
    }
    document.getElementById('timer').innerHTML=minutesTensDigit+""+minutesUnitsDigit+":"+secondsTensDigit+secondsUnitsDigit;
}

function stopStopWatch(){
    document.getElementById('start').disabled=false;
    document.getElementById('stop').disabled=true;
    document.getElementById('reset').disabled=false;
    if(timer){
        clearInterval(timer);
        timer=null;
    }
}

function resetStopWatch(){
    stopStopWatch();
    document.getElementById('start').disabled=false;
    document.getElementById('stop').disabled=false;
    document.getElementById('reset').disabled=true;
    secondsUnitsDigit=0;
    secondsTensDigit=0;
    minutesUnitsDigit=0;
    minutesTensDigit=0;
    document.getElementById('timer').innerHTML=minutesTensDigit+""+minutesUnitsDigit+":"+secondsTensDigit+secondsUnitsDigit;
}

document.getElementById('start').addEventListener('click',startStopWatch);
document.getElementById('stop').addEventListener('click',stopStopWatch);
document.getElementById('reset').addEventListener('click',resetStopWatch);