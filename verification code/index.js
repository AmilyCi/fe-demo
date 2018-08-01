const codeStr="abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ0123456789";
let oDiv = document.getElementById("code");
function getRandom(n,m){
    n = Number(n);
    m = Number(m);
    if(isNaN(n) || isNaN(m)){
        return Math.random();
    }
    if(n<m){
        let temp = n;
        n=m;
        m=temp;
    }
    return Math.round(Math.random()*(m-n)+n);
}

function getCode() {
    let str = '';
    for(let i = 0;i<4;i++){
        let ran = getRandom(0,61);
        str += codeStr.charAt(ran);
    }
    oDiv.innerHTML = str;
}
getCode();
oDiv.onclick = function () {
    getCode();
};