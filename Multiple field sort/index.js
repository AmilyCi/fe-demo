var oTab = document.getElementById("tab");
var tHead = oTab.tHead;
var oThs = tHead.rows[0].cells;
var tBody = oTab.tBodies[0];
var oRows = tBody.rows;
console.log(oRows);

var data = null;
var xhr = new XMLHttpRequest;
xhr.open('get','data.txt',false);
xhr.onreadystatechange=function(){
  if(xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)){
      var val = xhr.responseText;
      console.log(val);
      data = JSON.parse(val);
  }
};
xhr.send(null);

function bind() {
    var frg = document.createDocumentFragment();
    for(var i =0;i<data.length;i++){
        var cur = data[i];
        var oTr = document.createElement("tr");
        for(var key in cur){
            var oTd = document.createElement("td");
            if(key === 'sex'){
                oTd.innerHTML = cur[key] === 0?'男':'女';
            }else{
                oTd.innerHTML = cur[key];
            }
            oTr.appendChild(oTd);
        }
    frg.appendChild(oTr);
    }
    tBody.appendChild(frg);
    frg = null;
}
bind();

function changeBg() {
    for(var i =0;i<oRows.length;i++){
        oRows[i].className = i%2===1?'bg':null;
    }
}
changeBg();

function sort(n) {
    var _this = this;
    this.flag*=-1;
    var ary = Array.prototype.slice.call(oRows);
    ary.sort(function(a,b){
        var curInn = a.cells[n].innerHTML;
        var nexInn = b.cells[n].innerHTML;
        var curInnNum = parseFloat(curInn);
        var nexInnNum = parseFloat(nexInn);
        if(isNaN(nexInnNum) || isNaN(curInnNum)){
            return (curInn.localeCompare(nexInn))*_this.flag;
        }
    return (curInnNum - nexInnNum)*_this.flag;
    });
    var frg =document.createDocumentFragment();
    for(var i = 0;i<ary.length;i++){
        frg.appendChild(ary[i]);
    }
    tBody.appendChild(frg);
    frg = null;
    changeBg();
}

for(var i = 0;i<oThs.length;i++){
    curTh = oThs[i];
    curTh.index = i;
    curTh.flag=-1;
    if(curTh.className === "cursor"){
        curTh.onclick=function(){
            sort.call(this,this.index)
        }
    }

}
