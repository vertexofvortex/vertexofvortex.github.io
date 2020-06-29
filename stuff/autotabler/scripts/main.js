function getPage() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://minecorp.ru/clan/BKKTeam', false);
    request.send();
    var text = request.responseText;
    alert(text);
}