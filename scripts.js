//Function for project section button clicks

var allButtons = document.querySelectorAll('button[class^=project-button]');
var allLinks = document.querySelectorAll('div[class^=link-items]');

for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function() {
        linkNum = this.getAttribute('name');
        document.querySelector('.code-pic').setAttribute('src', `images/code${linkNum}.jpg`)
        document.querySelector('.site-pic').setAttribute('src', `images/site${linkNum}.jpg`)
        document.querySelector(`.link${linkNum}`).classList.toggle('show');
    })

}

//Close drop downs when clicks are made outside of dropdown menu

window.onclick = function(event) {
  if (!event.target.matches('.project-button')) {
    var dropLinks = document.querySelectorAll('.link-items');
    var i;
    for (i = 0; i < dropLinks.length; i++) {
      var openLinks = dropLinks[i];
      if (openLinks.classList.contains("show")) {
        openLinks.classList.remove("show");
      }
    }
  }
};

//Function for smooth scrolling through page

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//JQuery Dropdown function for nav

$('.bars-button').click(function() {
  $('.slide-container').slideToggle();
  $('.slide-container').toggleClass('dropdown');
});
