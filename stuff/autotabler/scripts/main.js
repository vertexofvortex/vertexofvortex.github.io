'use strict';

const userlistInput = document.getElementById('userlistInput');
const textInput = userlistInput.querySelector('textInput');
const orderInput = document.getElementById('orderInput');
const colorInput = document.getElementById('colorInput');
const submit = document.getElementById('submit');
const generate = submit.querySelector('generate');
const refresh = submit.querySelector('refresh');

var membersList = userlistInput.textInput.value.match(/\[([A-zА-яё]*)\]\s([A-zА-яё0-9]*)/gm);
var ranksList = [];
var membersListSorted = [];

submit.refresh.onclick = parser;

function parser() {
    console.clear();
    membersList.forEach(function(current) {
        let currentRank = current.match(/\[([A-zА-яё]*)\]\s([A-zА-яё0-9]*)/)[1];
        let currentMember = current.match(/\[([A-zА-яё]*)\]\s([A-zА-яё0-9]*)/)[2];
        if (!ranksList.includes(currentRank)) {
            ranksList.push(currentRank);
        }
        console.log(`(${currentRank}) ${currentMember}`);
    });
}

function sortMembers() {
    console.clear();
    ranksList.forEach(function(currentRank) {
        membersList.forEach(function(currentMember) {
            if (currentMember.includes(`[${currentRank}]`)) {
                membersListSorted.push(currentMember);
            }
        });
    });
    console.log(membersListSorted)
}

function updateInputs() {
    orderInput.removeChild()
    for (var current = 0; current < ranksList.length; current++) {
        
    }
}

