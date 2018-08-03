function getCss(curEle,attr) {
    let val = window.getComputedStyle(curEle,null)[attr],
        reg = /^(-?\d+(\.\d+)?)(px|pt|em|rem)$/i;
        return reg.test(val)?parseFloat(val):val;
}
let box = document.getElementById("box"),
    wrap = document.getElementById("wrap"),
    conBegin = document.getElementById("conBegin"),
    conBegin_width = getCss(conBegin,"width");

function move() {
  wrap.scrollLeft++;
  let curLeft = wrap.scrollLeft;
  if(curLeft>=conBegin_width){
      wrap.scrollLeft = 0;
  }
}
let timer = setInterval(move,10);
box.onmouseover=function () {
    clearInterval(timer);
};
box.onmouseout=function () {
    timer = setInterval(move,10);
};