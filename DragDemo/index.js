var box = document.getElementById("box");
box.style.left = ((document.documentElement.clientWidth||document.body.clientWidth)-box.offsetWidth)/2+"px";
box.style.top = ((document.documentElement.clientHeight||document.body.clientHeight)-box.offsetHeight)/2+"px";
box.onmousedown = down;
function down(e) {
    e = e || window.event;
    this["strX"] = e.clientX;
    this["strY"] = e.clientY;
    this["strL"] = parseFloat(this.style.left);
    this["strT"] = parseFloat(this.style.top);
    if(this.setCapture){
        this.onmousemove = move;
        this.onmouseup = up;
        this.setCaptur();
    }else{
        var _this=this;
        document.onmousemove = function (e) {
            move.call(_this,e);
        };
        document.onmouseup = function (e) {
            up.call(_this,e);
        }
    }
}
function move(e) {
    e = e || window.event;
    var curL = (e.clientX-this["strX"])+this["strL"];
    var curT = (e.clientY-this["strY"])+this["strT"];
    var minL = 0,
        minT = 0,
        maxL = (document.documentElement.clientWidth||document.body.clientWidth)-this.offsetWidth,
        maxT = (document.documentElement.clientHeight||document.body.clientHeight)-this.offsetHeight;
    curL = curL < minL ? minL : (curL > maxL ? maxL : curL);
    curT = curT < minT ? minT : (curT > maxT ? maxT : curT);
    this.style.left = curL + "px";
    this.style.top = curT + "px";

};
function up(e) {
    e = e || window.event;
    if(this.releaseCapture){
        this.releaseCapture();
        this.onmousemove = null;
        this.onmouseup = null;
    }else{
        document.onmousemove = null;
        document.onmouseup = null;
    }

}