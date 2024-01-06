let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");








    
setInterval(timer,1000);

function timer(){

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

if(h>12){
    h = 24-h;
}


if(h<10 ){
    h = "0" + h;
   
   
}
if(m<10){
    m = "0" + m;
}

if(s<10){
    s = "0" + s;
}

    hour.innerHTML = h + " : " ;
    minute.innerHTML = m + " :";
    second.innerHTML = s ;


   

}


