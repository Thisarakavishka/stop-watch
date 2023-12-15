let isStop =  true;
let sec = 0;
let min = 0;
let hr = 0;
let mili = 0;

function start(){
    if(isStop === true){
        isStop = false;
        timer();
    }
}

function timer(){
    if( isStop === false){
        sec =parseInt(sec);
        min =parseInt(min);
        hr =parseInt(hr);
        mili =parseInt(mili);

        mili++;

        if(mili === 60){
            mili = 0;
            sec++;
        }
        if(sec === 60){
            sec = 0;
            min++;
        }
        if(min === 60){
            min = 0;
            hr++;
        }


        if(mili<10){
            mili = "0" + mili;
        }
        if(sec<10){
            sec = "0" + sec;
        }
        if(min<10){
            min = "0" + min;
        }
        if(hr<10){
            hr = "0" + hr;
        }

        stopWatch.innerHTML = hr + " : " + min + " : " + sec + " : " + mili;
        setTimeout("timer()",15);
    }
}

function stop(){
    isStop = true;
}

function reset(){
    isStop = true;
    mili= 0;
    sec = 0;
    min = 0;
    hr= 0;

    stopWatch.innerHTML = "00 : 00 :00 :00";
}