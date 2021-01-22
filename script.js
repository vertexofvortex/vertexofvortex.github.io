const output = document.querySelector('.output');
const enter = document.querySelector('.button-enter');
const cmd = document.querySelector('.input-cmd');
const prompt = document.querySelectorAll('.button-prompt');

const greeting = `[<span style="font-weight: 900"><span style="color: #e6371e">user</span>@<span style="color: #e6371e">vertexofvortex</span> ~]</span><span style="color: #e6371e">$</span> `;
const br = `<br>`;
const help = `${greeting}help ${br}
Ну, привет. Для вывода информации можешь вводить нужные команды вручную или нажимать на кнопки ниже.
    
clear           очистка консоли
help            вывод этого сообщения
about           кто я?
skills          что я умею?
activities      чем я занимаюсь?
projects        мои работы

`;
const about = `${greeting}about

Если честно, я задаюсь этим вопросом ежедневно, но до сих пор не имею ни малейшего представления, кто же я на самом деле, поэтому предпочитаю называть себя разносторонне развитым человеком.

`;
const skills = `${greeting}skills
<span style="white-space: pre">
┌─────────────────────────────┐  ┌─────────────────────────────┐  ┌─────────────────────────────┐
│ <span style="color: #e6371e">Веб-разработка</span>              │  │ <span style="color: #e6371e">Графический дизайн</span>          │  │ <span style="color: #e6371e">Разработчик-программист</span>     │
│ --------------------------- │  │ --------------------------- │  │ --------------------------- │
│ HTML/CSS/JS                 │  │ Photoshop/Illustrator       │  │ NodeJS/C++/C#               │
│ Уровень: средний            │  │ Уровень: средний            │  │ Уровень: начинающий         │
└─────────────────────────────┘  └─────────────────────────────┘  └─────────────────────────────┘
┌─────────────────────────────┐  ┌─────────────────────────────┐  ┌─────────────────────────────┐ 
│ <span style="color: #e6371e">Linux/Windows admin</span>         │  │ <span style="color: #e6371e">Cisco admin</span>                 │  │ <span style="color: #e6371e">Обеспечение ИБ в АС</span>         │ 
│ --------------------------- │  │ --------------------------- │  │ --------------------------- │ 
│ Уровень: средний            │  │ Уровень: средний            │  │ Уровень: профессиональный   │ 
└─────────────────────────────┘  └─────────────────────────────┘  └─────────────────────────────┘ 
</span>
`;

const commandNotFound = `<span style="color: red">Введённой команды не существует.</span>${br}`;
const fetch = `${greeting}neofetch

<span style="color: #e6371e; white-space: pre"> __  __   __   __            </span>root@vertexofvortex
<span style="color: #e6371e; white-space: pre">/\\ \\/\\ \\ /\\ \\ /\\ \\           </span>-----------
<span style="color: #e6371e; white-space: pre">\\ \\ \\ \\ \\\\ \`\\\`\\/'/'          </span>First Name: Nikolay
<span style="color: #e6371e; white-space: pre"> \\ \\ \\ \\ \\\`\\/ > <            </span>Last Name: Myagkov
<span style="color: #e6371e; white-space: pre">  \\ \\ \\_/ \\  \\/'/\\\`\\         </span>Uptime: 18 years
<span style="color: #e6371e; white-space: pre">   \\ \`\\___/  /\\_\\\\ \\_\\       </span>Shell: bash 5.0.3
<span style="color: #e6371e; white-space: pre">    \`\\/__/   \\/_/ \\/_/       </span>Terminal: /dev/tty1
                             CPU: Human brain

`;

`┌ └ ┘ ┐ │ ─`

const validationList = [
    'clear',
    'help',
    'about',
    'skills',
    'activities',
    'projects',
    'ls',
    'neofetch',
    'ping'
];

function write(string) {
    output.innerHTML += `<span>${string}</span>`;
    localStorage.setItem('log', output.innerHTML);
}
function clear() {
    output.innerHTML = '';
}

document.addEventListener("DOMContentLoaded", function() {
    var log = localStorage.getItem('log');
    
    if (log == null) {
        clear();
        write(`${help}`);
    } else {
        clear();
        if (!log.includes(help)) {
            write(`${log}${help}`);
        } else {
            write(`${log}`);
        }
        
    }
});

prompt.forEach(function(element) {
    element.addEventListener("click", function() {
        promptEnter(element.id);
    }, false);
});

enter.addEventListener("click", function() {
    promptEnter(cmd.value);
}, false);

cmd.oninput = function() {
    validateInput(cmd.value);
}

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        promptEnter(cmd.value);
    }
});

function promptEnter(command) {
    document.title = `[VRTX ~] ${cmd.value}`;

    switch (command) {
        case 'clear':
            clear();
            write(`${greeting}${br}`);
            break;

        case 'help':
            write(`${help}`);
            break;

        case 'about':
            write(`${about}`);
            break;

        case 'neofetch':
            write(`${fetch}`);
            break;

        case 'ping':
            write(`Pong!${br}`);
            break;

        case 'skills':
            write(`${skills}`);
            break;

        default:
            write(`${greeting}${cmd.value}\n${commandNotFound}`);
            break;
    }

    cmd.value = '';
}

function validateInput(value) {
    if (validationList.includes(value)) {
        cmd.style.color = '#fff';
    } else if (value == '') {
        cmd.style.color = '#fff';
    } else {
        cmd.style.color = 'red';
    }

    document.title = `[VRTX ~] ${value}`;
}