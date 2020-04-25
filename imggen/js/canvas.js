document.getElementById("generate").onclick = generateCanvas;
function generateCanvas() {
    var nickname = document.querySelector("#nicknamePick");
    document.querySelector("span#nickname").innerHTML = nickname.value;
    
    var link = document.querySelector("#bgurlPick");
    var url = link.value;
    var canvas = document.getElementById("capture");
    canvas.style.backgroundImage = "url(" + url + ")";
}
