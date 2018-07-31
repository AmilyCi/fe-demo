var oList = document.getElementById("list"),
    oLis = oList.getElementsByTagName("li");
for(var i = 0; i < oLis.length; i++){
    var oLi = oLis[i];
    i % 2 === 0? (oLi.className = "c1", oLi.index = "c1"):(oLi.className = "c2",oLi.index = "c2");

    oLi.onmouseover = function () {
        this.className = "c3";
    };

    oLi.onmouseout = function () {
        var val = this.index;
        this.className = val;
    };
}