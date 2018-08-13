var oBox = document.getElementById("box");
var minLeft = 0, maxLeft = (document.documentElement.clientWidth || document.body.clientWidth) - oBox.offsetWidth;
var timer = null;
console.log(maxLeft);

function move(target){
    _move();
    function _move() {
        window.clearTimeout(timer);
        var curLeft =parseFloat(window.getComputedStyle(oBox,null).left) ;
        console.log(curLeft);
        if(curLeft<target){
            if(curLeft+5>=target){
                oBox.style.left = target + 'px';
                return;
            }
            curLeft+=5;
            oBox.style.left = curLeft + "px";
        }else if(curLeft>target){
            if(curLeft-5<=target){
                oBox.style.left = target+'px';
                return;
            }
            curLeft-=5;
            oBox.style.left = curLeft + "px";
        }else{
            return;
        }
        timer =setTimeout(_move,10);
    }
}
document.getElementById("btnLeft").onclick=function () {
    move(minLeft);
};
document.getElementById("btnRight").onclick=function () {
    move(maxLeft)
};