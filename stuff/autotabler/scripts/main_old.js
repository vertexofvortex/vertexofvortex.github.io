var tested = `[Leader] TheKamikadza [Moderator] bLack_b0m [Moderator] DoktorKto [Member] Ashtenn [Member] koopass [Member] Big_Smoke [Member] scrmndemon101 [Member] Bibea [Member] xTheKokoc [Member] Apaxuc [Member] The_Punisher [Moderator] vertexofvortex [Member] wiso12 [New] Melanholy [Member] meamime [Member] yansha [Member] TheBlockMaster [Moderator] Johnyheinz [Member] mine22 [Member] ER_ElwaSiC [Moderator] avenger_one [Member] lapochka [Member] TheForgottenMan [пусик] Lorenzo [Moderator] jomado [Member] Wubbbi [Member] WithinTheSadness [Member] augustsixteenth [Member] Lelush [Member] Damage16 [Member] NeGaTiV__ [Moderator] Ven3no [Member] Alyespsn [Member] Ferst_ [Member] WISO [Member] Lightless [Leader] WISOK [Member] noattack [Member] DigitalPhantom [Member] Amelye [Moderator] Arsenirik [Moderator] RichBone [New] TheShadeStar [Member] Vooooooooooland [Member] Rofler_ [New] Ankalalala [Member] Вубби [New] Lilway [New] MolkI31 [New] labitova04 [Member] SaphireDragon [Member] FooTDi [Moderator] Rumon [Member] Kitman [Member] MirotR [Member] Luck5312 [New] dan113 [New] Grass [New] aprada [Member] Rektar [New] Fantasy [Member] TheSorcer [New] Brosko_city [New] qwerty123211 [Member] Valentine [New] hisliana [New] TheThomas [Member] samaaao [New] KRETUKCYT [New] KP_503 [New] Ryan_was_heree [New] databates [Moderator] jan02 [New] TopT_C_koJl6acou [Member] maus [Member] Waleron [Moderator] Cyanide [Member] akuji86 [New] ZiTT [New] Deikyn [Member] BKKTeam [New] busidoGOVNO [New] Sombrich [New] yura11212 [New] чики_бомбони [New] XSorcererGamerX [New] cnicxo [New] Volrus [New] XcreeperD [New] vurtney [Member] 6a6ywka [Member] dis [New] Saturn4ever [Member] Kawai_Nata [New] Alice45 [New] cr1pz_ [New] Alex_dragneel [New] mimica [Member] TheKitman [New] diana45 [New] DummerBoy [Moderator] drunkbastard [New] xenocides [Member] Roila [New] JuniorJrr [Member] disgoose [New] JustNight [Member] DezZoveR [New] Pomi [New] kusotare [New] BKK [New] indi`;

var inputString = document.getElementById('inputArea').value;
document.getElementById('start').onclick = generateTable;

function generateTable() {
    var members = inputString.match(/\[([A-zА-яё]*)\]\s([A-zА-яё0-9]*)/gm);

    var outputHTML = document.querySelector('.output-html'),
        tableContainer = document.createElement('div');
        tableContainer.classList.add('table-container');

    outputHTML.innerHTML = '';
    outputHTML.appendChild(tableContainer);

    members.forEach(function(current) {
        let currentRank = current.match(/\[([A-zА-яё]*)\]\s([A-zА-яё0-9]*)/)[1],
            currentMember = current.match(/\[([A-zА-яё]*)\]\s([A-zА-яё0-9]*)/)[2],
            currentRow = document.createElement('div'),
        currentRankBadge = document.createElement('div');
    
        currentRow.classList.add('table-row', `row-${currentMember}`);
        currentRow.innerHTML = currentMember;

        currentRankBadge.classList.add('badge', `badge-${currentMember}`,`badge-${currentRank}`);
        currentRankBadge.innerHTML = currentRank;

        tableContainer.appendChild(currentRow);
        currentRow.appendChild(currentRankBadge);
    });
}

function generateImage() {
    var outputPicture = document.querySelector('.output-picture'),
        tableContainer = document.querySelector('.table-container');

    domtoimage.toPng(tableContainer).then(function(dataUrl) {
        var img = new Image();
            img.src = dataUrl;
        outputPicture.appendChild(img);
    }).catch(function(error) {
        console.error('oops, something went wrong!', error);
    });
}