var rotation = 20;
window.addEventListener("load", function(){
    var btn = document.querySelector(".engine");
    btn.addEventListener("click", function(){
        this.className = this.className.match("active") ? "engine" : "engine active";
    });

});
window.addEventListener("keydown", function(e){
    var wrap = document.getElementById("wrapper");
    if(e.keyCode === 38){
        rotation += 5;
        wrap.style.transform="rotateX("+rotation+"deg) translateY(-110px)";
    }else if(e.keyCode === 40){
        rotation -= 5;
        wrap.style.transform="rotateX("+rotation+"deg) translateY(-110px)";
    }
});