var oBox = document.getElementById("box");
var maxLeft = (document.documentElement.clientWidth || document.body.clientWidth) - oBox.offsetWidth;
var step = 5;
var timer = setInterval(function () {
    var curLeft =parseFloat(window.getComputedStyle(oBox,null).left) ;

    if(curLeft+step>=maxLeft){
        oBox.style.left = maxLeft;
        clearInterval(timer);
        return;
    }
    curLeft+=step;
    var val = curLeft+'px';
    oBox.style.left = val;


},10);