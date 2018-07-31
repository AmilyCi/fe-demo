var oTab = document.getElementById("tab"),
    oLis = oTab.getElementsByTagName("li"),
    oDivs = oTab.getElementsByTagName("div");
for(var i=0;i<oLis.length;i++){
    var oLi = oLis[i];
    oLi.index = i;
    oLi.onmouseover=function () {
        for(var j =0;j<oLis.length;j++){
            oLis[j].className = "";
            oDivs[j].className = "";
        }
        this.className="select";
        oDivs[this.index].className = "select";
    }
}