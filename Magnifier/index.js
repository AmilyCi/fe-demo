var box = document.getElementById("box");
var mark = document.getElementById("mark");
var boxBig = document.getElementById("boxBig");

function setPosition(e){
    var tempL = 0, tempT=0;
    var left = e.clientX - box.offsetLeft - (mark.offsetWidth/2);
    var top = e.clientY - box.offsetTop - (mark.offsetHeight/2);
    var minL = 0, minT = 0, maxL = box.offsetWidth-mark.offsetWidth, maxT = box.offsetHeight-mark.offsetHeight;
    if(left<minL){
        mark.style.left=minL+"px";
        tempL = minL;
    }else if(left>maxL){
        mark.style.left=maxL+"px";
        tempL = maxL;
    }else{
        mark.style.left=left+"px";
        tempL = left;
    }
    if(top<minT){
        mark.style.top=minT+"px";
        tempT = minT;
    }else if(top>maxT){
        mark.style.top=maxT+"px";
        tempT = maxT;
    }else{
        mark.style.top=top+"px";
        tempT = top;
    }
    var oImg = boxBig.getElementsByTagName("img")[0];
    oImg.style.left = -tempL*2 + "px";
    oImg.style.top = -tempT*2 + "px";

}

box.onmouseenter = function (e) {
    e = e || window.event;
    mark.style.display = "block";
    setPosition(e);
    boxBig.style.display="block";
};
box.onmousemove = function (e) {
    e = e || window.event;
    mark.style.display = "block";
    setPosition(e);
    boxBig.style.display="block";
};
box.onmouseleave = function (e) {
    e = e || window.event;
    mark.style.display = "none";
    boxBig.style.display="none";
};