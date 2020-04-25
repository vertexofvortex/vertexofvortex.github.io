document.getElementById("generate").onclick = generateCanvas;
function generateCanvas() {
    var nickname = document.querySelector("#nicknamePick");
    document.querySelector("span#nickname").innerHTML = nickname.value;
    
    var link = document.querySelector("#bgurlPick");
    var url = link.value;
    var canvas = document.getElementById("capture");
    canvas.style.backgroundImage = "url(" + url + ")";

    var heading, selectorHead, selectorHeadPick;
    for (var i = 1; i < 5; i++) {
        selectorHead = "#heading" + i;
        selectorHeadPick = "#heading" + i + "Pick";
        heading = document.querySelector(selectorHeadPick);
        document.querySelector(selectorHead).innerHTML = heading.value;
    }

    var text, selectorText, selectorTextPick;
    for (var i = 1; i < 5; i++) {
        selectorText = "#desc" + i;
        selectorTextPick = "#desc" + i + "Pick";
        text = document.querySelector(selectorTextPick);
        document.querySelector(selectorText).innerHTML = text.value;
    }
}
