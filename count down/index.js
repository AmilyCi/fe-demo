var oBox =document.getElementById("box");
oBox.innerHTML = "距离目标时间:" + getSpanTime();
var timer = window.setInterval(function () {
    oBox.innerHTML = "距离目标时间:" + getSpanTime();
},1000);
function getSpanTime(){
    var tarTime = new Date("2018/12/20 18:00:00"),
        nowTime = new Date(),
        tarSpan = tarTime.getTime(),
        nowSpan = nowTime.getTime(),
        diffSpan = tarSpan - nowSpan,
        hour = Math.floor(diffSpan/(1000*60*60)),
        hourMs = hour*60*60*1000,
        spanMs = diffSpan-hourMs,
        minute = Math.floor(spanMs/(1000*60)),
        minuteMs = minute*60*1000,
        spanMs = spanMs - minuteMs,
        second = Math.floor(spanMs/1000);
        return zero(hour) + ":" + zero(minute) + ":" + zero(second);
}
function zero(value){
   return value < 10? "0" + value : value;
}