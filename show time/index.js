let oDiv = document.getElementById("tab");
oDiv.innerHTML = `北京时间:${formatTime()}`;
setInterval(function(){
    oDiv.innerHTML = `北京时间:${formatTime()}`;
},1000);

function formatTime() {
    let time = new Date();
    const year = time.getFullYear().toString();
    const month = (time.getMonth()+1).toString();
    const day = time.getDate().toString();
    const w = time.getDay(),wtr='日一二三四五六',week = wtr.charAt(w).toString();
    const hours = time.getHours().toString();
    const minutes = time.getMinutes().toString();
    const seconds = time.getSeconds().toString();
    return `${year}年${month.padStart(2,0)}月${day.padStart(2,0)}日 星期${week} ${hours.padStart(2,0)}时${minutes.padStart(2,0)}分${seconds.padStart(2,0)}秒`
}