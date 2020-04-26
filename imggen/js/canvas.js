document.getElementById("generate").onclick = fillCanvas;
document.getElementById("create").onclick = createCanvas;
document.getElementById("download").onclick = downloadCanvas;

function createCanvas() {
    var result = document.querySelector(".output");
    var infoline = document.querySelectorAll(".infoline")[1];
    html2canvas(document.querySelector("#capture"), {scale: 1, useCORS: true,}).then(picOutput => {
        result.innerHTML = "";
        result.appendChild(infoline);
        result.appendChild(picOutput);
        picOutput.id = "canvas";
    });
}
function downloadCanvas() {
    var canvas = document.querySelector("#canvas");
    var nameValue = document.querySelector("#canvasName").value;
    if (nameValue === "") {
        nameValue = "generated-banner";
    }
    if (canvas === null) {
        alert("Изображение не сгенерировано. Нажмите \"Создать\",.");
    }
    var name = nameValue + ".png";
    canvas.toBlob(function(blob) {
    saveAs(blob, name);
});
}

function fillCanvas() {
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
    imgUpload();
}
function imgUpload() {
    var index = 0;
    do {
        var input = document.querySelectorAll("input[type=\"file\"]")[index];
        let id = input.id;
        let elemId = id.substr(7).toLowerCase();
        let element = document.getElementById(elemId);
        index++;

        let file = input.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            element.style.backgroundImage = "url(" + reader.result + ")";
        }
    } while (input != undefined);
}

function readURL(e) {
    if (this.files && this.files[0]) {
        var reader = new FileReader();
        reader.load(function(e) { 
            elemId.style.backgroundImage = e.target.result; 
        });
        reader.readAsDataURL(this.files[0]);
    }
}

function notify(text = "text is not added") {
    var bar = document.querySelector(".notification");
    bar.innerHTML = text;
}