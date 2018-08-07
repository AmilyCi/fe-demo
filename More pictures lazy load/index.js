var news = document.getElementById("news");
var imgList = news.getElementsByTagName("img");
var jsonData = null;
~function () {
  var xhr = new XMLHttpRequest;
  xhr.open("get","newsList.txt?_="+Math.random(),false);
  xhr.onreadystatechange=function () {
      if(xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)){
          var val = xhr.responseText;
          jsonData = JSON.parse(val);
      }
  };
  xhr.send(null);
}();

~function () {
    var str = '';
    if(jsonData){
        for(var i=0;i<jsonData.length;i++){
            var curData = jsonData[i];
            str+='<li>';
            str+='<div><img src="" trueImg="'+curData["img"]+'"></div>';
            str+='<div>';
            str+='<h2>'+curData["title"]+'</h2>';
            str+='<p>'+curData["desc"]+'</p>';
            str+='</div>';
            str+='</li>';
        }
    }
    news.innerHTML = str;
}();

function lazyImg(curImg){
    var oImg = new Image;
    oImg.src = curImg.getAttribute("trueImg");
    oImg.onload = function () {
        curImg.src = this.src;
        curImg.style.display = 'block';
        fadeIn(curImg);
        oImg = null;
    };
    curImg.isLoad = true;
}



function fadeIn(curImg) {
var duration = 500,interval = 10,target = 1;
var step = (target/duration)*interval;
var timer = window.setInterval(function () {
    var val = window.getComputedStyle(curImg,null)["opacity"];
    var curOp = parseFloat(val);
    if(curOp>=1){
        curImg.style.opacity = 1;
        clearInterval(timer);
        return;
    }
    curOp+=step;
    curImg.style.opacity=curOp;

},interval)
}


function handleAllImg() {
    for(var i = 0;i<imgList.length;i++){
        var curImg = imgList[i];
        if(curImg.isLoad){
            continue;
        }
        var curImgPar = curImg.parentNode;
        var totalTop = null;
        totalTop += curImgPar.offsetTop;
        var A = totalTop + curImgPar.offsetHeight;
        var B = (document.documentElement.clientHeight || document.body.clientHeight)+(document.documentElement.scrollTop || document.body.scrollTop);
        if(A<B){
            lazyImg(curImg);
        }
    }
}

window.setTimeout(handleAllImg,500);
window.onscroll = handleAllImg;