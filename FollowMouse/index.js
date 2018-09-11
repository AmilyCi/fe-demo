var box = document.getElementById("box");
box.onmouseenter = function (e) {
    e = e || window.event;
    var mark = document.createElement("div");
    mark.id = "mark";
    this.appendChild(mark);
    mark.style.left = e.clientX - this.offsetLeft+5+"px";
    mark.style.top = e.clientY - this.offsetTop+5+"px";
};

box.onmousemove = function (e) {
    e = e || window.event;
    var mark = document.getElementById("mark");
    if(mark){
        mark.style.left = e.clientX - this.offsetLeft+5+"px";
        mark.style.top = e.clientY - this.offsetTop+5+"px";
    }
};
box.onmouseleave = function (e) {
    e = e || window.event;
    if(mark){
        this.removeChild(mark);
    }
};
