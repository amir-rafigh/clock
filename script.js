const second = document.getElementById('secc');
const minute =document.getElementById('minn');
const hour = document.getElementById('hourr');

setInterval(time , 10);
function time(){
    let n = new Date();
    let s = n.getSeconds()*6;
    let m = n.getMinutes()*6;
    let h = n.getHours()*30;

    second.style.transform=`rotateZ(${s}deg)`;
    minute.style.transform=`rotateZ(${m}deg)`;
    hour.style.transform=`rotateZ(${h+(m/12)}deg)`;


}
