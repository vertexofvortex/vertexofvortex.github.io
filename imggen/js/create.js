document.getElementById("create").onclick = createCanvas;
document.getElementById("download").onclick = downloadCanvas;

function createCanvas() {
    generateCanvas();
    html2canvas(document.querySelector("#capture"), {scale: 1, useCORS: true,}).then(picOutput => {
            var result = document.querySelector(".output");
            result.innerHTML = "";
            result.appendChild(picOutput);
    });
}
function downloadCanvas() {
    picture = picOutput.toDataURL("image/png");
    window.open(picture, "_blank");
}