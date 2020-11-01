window.onload = function() {
    centerer();
    setWrapHeight();
};

window.onresize = function() {
    centerer();
    setWrapHeight();
};


function centerer() {
    var wrap = document.getElementById('mainWrap');
    var bodyWidth = document.body.offsetWidth;
    var wrapWidth = wrap.offsetWidth;

    wrap.style.marginLeft = (bodyWidth - wrapWidth) / 2;
    wrap.style.marginRight = (bodyWidth - wrapWidth) / 2;
}

function setWrapHeight() {
    var wrap = document.getElementById('mainWrap');
    var navbar = document.getElementById('navbar');
    var footer = document.getElementById('footer');

    wrap.style.minHeight = document.body.offsetHeight - navbar.offsetHeight - footer.offsetHeight - 40;
}

function XHRLoad(page) {
    // 1. Создаём новый XMLHttpRequest-объект
let xhr = new XMLHttpRequest();

// 2. Настраиваем его: GET-запрос по URL /article/.../load
xhr.open('GET', '/article/xmlhttprequest/example/load');

// 3. Отсылаем запрос
xhr.send();

// 4. Этот код сработает после того, как мы получим ответ сервера
xhr.onload = function() {
  if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
    alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
  } else { // если всё прошло гладко, выводим результат
    alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
  }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    alert(`Получено ${event.loaded} из ${event.total} байт`);
  } else {
    alert(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
  }

};

xhr.onerror = function() {
  alert("Запрос не удался");
};
}