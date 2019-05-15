/*function displayLinks() {
    document.querySelector('.link-items').classList.toggle('show');
} */

var allButtons = document.querySelectorAll('button[class^=project-button]');
var allLinks = document.querySelectorAll('div[class^=link-items]');

for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function() {
        linkNum = this.getAttribute('name');
        document.querySelector(`.link${linkNum}`).classList.toggle('show');
    })

}