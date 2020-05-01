document.getElementById("generate").onclick = fillCanvas;
document.getElementById("create").onclick = create;
document.getElementById("download").onclick = downloadCanvas;
onload = iconToFAopacity;
var placeholder = document.getElementById("previewPlaceholder");
/*function createCanvas() {
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
}*/
function create() {
    var result = document.querySelector(".output");
    var infoline = document.querySelectorAll(".infoline")[1];
    var node = document.getElementById("capture");
    domtoimage.toPng(node)
        .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            result.innerHTML = "";
            result.appendChild(img);
            img.id = "canvas";
            result.appendChild(infoline);
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
}
function downloadCanvas() {
    var img = document.querySelector("#canvas");
    var nameValue = document.querySelector("#canvasName").value;
    if (nameValue === "") {
        nameValue = "generated-banner";
    }
    if (img === null) {
        alert("Изображение не сгенерировано. Нажмите \"Создать\".");
    }
    var name = nameValue + ".png";
    var file = new FileSaver(["Hello, world!"], "hello world.txt", {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(img.src);
    /*img.toBlob(function(blob) {
        saveAs(blob, name);
    });*/
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
    iconToFA();
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
        var check = document.querySelectorAll("input[type=\"file\"]")[index];
        let file = input.files[0];
        if (file === undefined) {
            continue;
        }
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            element.style.backgroundImage = "url(" + reader.result + ")";
        }
        console.log(check);
    } while (check != undefined);
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
    var checkbox = document.querySelector("#FAswitch");
    if (checkbox.checked) {
        do {
            var input = document.querySelectorAll("input.FAicon")[index],
            elementId = input.id.substr(6).toLowerCase(),
            element = document.getElementById(elementId);
            console.log(input, element);
            var check = document.querySelectorAll("input.FAicon")[index + 1];
            index++;
            
            var icon = document.createElement("i");
            icon.id = elementId;
            icon.className = "fas fa-" + input.value;
            element.replaceWith(icon);
        } while (check != undefined);
        console.log("div > svg");
    } else {
        do {
            var input = document.querySelectorAll("input.FAicon")[index];
            index++;
            var element = document.querySelector("#icon" + index),
            check = document.querySelectorAll("input.FAicon")[index];
            console.log(index, element);
            
            var div = document.createElement("div");
            div.id = element.id;
            element.replaceWith(div);
        } while  (check != undefined);
    }
}

function iconToFAopacity() {
    var index = 0;
    checkbox = document.querySelector("#FAswitch");
    do {
        var input = document.querySelectorAll("input.FAicon")[index];
        if (checkbox.checked) {
            input.style.opacity = 1;
            input.disabled = false;
        } else {
            input.style.opacity = 0.5;
            input.disabled = true;
        }
        check = document.querySelectorAll("input.FAicon")[index + 1];
        index++;
    } while (check != undefined);
}
/*function test() {
    var index = 0;
    do {
        var input = document.querySelectorAll("input.FAicon")[index];
        let id = input.id;
        var elemId = id.substr(6).toLowerCase();
        var element = document.getElementById(elemId);
        console.log(input, elemId);
        index++;
        var check = document.querySelectorAll("input.FAicon")[index];
    } while (check != undefined);
}*/