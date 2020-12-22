if (window.location.toString().includes(`forum.minecorp.ru`)) {    
    var card = document.querySelectorAll('.main-item');
    var cardSubjectLinks = document.querySelectorAll('.main-item .item-subject .hn a');
    
    var replaceElementTag = function(element, replacementTag) {
        let newElement = document.createElement(replacementTag);
  
        for (let attr of element.attributes) {
            newElement.setAttribute(attr.name, attr.value);
        }
  
        newElement.innerHTML = element.innerHTML;
  
        element.replaceWith(newElement);
    }
  
    document.querySelectorAll('.main-item .item-subject .hn a').forEach(function(element) {
        let url = element.href;
        let elementCard = element.parentElement.parentElement.parentElement;
  
  
        elementCard.setAttribute('href', url);
        element.removeAttribute('href');
  
        replaceElementTag(elementCard, 'a');
    });
}