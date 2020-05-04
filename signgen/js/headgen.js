onload = submit();
onload = document.querySelector("#extendedMode").checked = false;

function submit() {
    bgByUrl();
    bgUpload();
    contentHeading();
    fontWeight();
    imgCheck();
}
function bgByUrl() {
    document.querySelector(".background").src = document.querySelector("#bgByUrl").value;
    console.log("bgByUrl completed");
    imgCheck();
}
function bgUpload() {
    if (document.querySelector("#bgUpload").value != "") {
        let reader = new FileReader();
        reader.readAsDataURL(document.querySelector("#bgUpload").files[0]);
        reader.onload = function() {
            document.querySelector(".background").src = reader.result;
            imgCheck();
        }
    }
    console.log("bgUpload completed");
}
function contentHeading() {
    document.querySelector(".wrapper .heading").innerHTML = document.querySelector("#contentHeading").value;
    console.log("contentHeading completed");
}
function extendedMode() {
    if (document.querySelector("#extendedMode").checked) {
        document.querySelector(".extended").style.display = "unset";
    } else {
        document.querySelector(".extended").style.display = "none";
    }
    console.log("extendedMode");
}
function fontWeight() {
    if (document.querySelector("#extendedMode").checked) {
        document.querySelector(".wrapper .heading").style.fontWeight = document.querySelector("#fontWeight").value;
    }
    console.log("fontWeight completed");
}
function imgCheck() {
    var img = document.querySelector("img");
    if (img.height < 220 || img.width < 870) {
        document.querySelector("#imgSizeAlert").style.display = "block";
        console.log("imgCheck: pic is shit", img.height, img.width);
    } else {
        document.querySelector("#imgSizeAlert").style.display = "none";
        console.log("imgCheck: pic is normal", img.height, img.width);
    }
    console.log("imgCheck completed");
}