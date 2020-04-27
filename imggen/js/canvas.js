document.getElementById("generate").onclick = fillCanvas;
document.getElementById("create").onclick = createCanvas;
document.getElementById("download").onclick = downloadCanvas;
var placeholder = document.getElementById("previewPlaceholder");
function createCanvas() {
    var scale = document.getElementById("scalePick").value;
    var result = document.querySelector(".output");
    var infoline = document.querySelectorAll(".infoline")[1];
    html2canvas(document.querySelector("#capture"), {scale: scale, useCORS: true,}).then(picOutput => {
        result.innerHTML = "";
        result.appendChild(picOutput);
        picOutput.id = "canvas";
        if (document.querySelector("#canvas[width=\"0\"]")) {
            result.innerHTML = "";
            window.placeholder.innerHTML = "<p>Ошибка. Вероятно, масштаб холста установлен в недопустимое значение.</p>";
            result.appendChild(window.placeholder);
        }
        result.appendChild(infoline);
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
    iconToFA();
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
        if (file === undefined) {
            continue;
        }
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            element.style.backgroundImage = "url(" + reader.result + ")";
        }
    } while (input != undefined);
}

function showMenu(title = "Без заголовка", width = 100, height = 200) {
    alert(title + ' ' + width + ' ' + height);
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function notify(text = "notification") {
    body = document.querySelector("body");
    bar = document.createElement("div");
    bar.innerHTML = "text";
    body.insertAdjacentElement("afterbegin", bar)
    bar.style.cssText = "height: 100px; transition: 1s ease-in-out";
    sleep(2000);
    bar.style.cssText = "display: none";
}

function iconToFA() {
    var index = 0;
    do {
        var input = document.querySelectorAll("input.FAicon")[index];
        let id = input.id;
        var elemId = id.substr(6).toLowerCase();
        var element = document.getElementById(elemId);
        console.log(input, elemId);
        index++;

        let icon = document.createElement("i");
        icon.className = "fas fa-" + input.value;
        element.replaceWith(icon);
    } while (input != undefined);
}