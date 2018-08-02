let goLink = document.getElementById("goLink");

goLink.onclick = function () {
    let duration = 500,
        interval = 10,
        target = document.documentElement.scrollTop || document.body.scrollTop;
    let step = (target/duration)*interval;

    let timer = setInterval(function(){
        curTarget = document.documentElement.scrollTop || document.body.scrollTop;
        curTarget -= step;
        if(curTarget <= 0){
            clearInterval(timer);
            return;
        }
        document.documentElement.scrollTop = curTarget;
        document.body.scrollTop = curTarget;
    },interval);

};