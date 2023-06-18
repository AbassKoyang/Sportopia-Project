const glide = new Glide('.glide', {
  type: 'carousel', // Set the type to 'carousel' for a basic slider
  autoplay: 5000, // Set autoplay duration in milliseconds (or false to disable)
  hoverpause: true, // Pause autoplay when hovering over the slider
  perView: 1, // Number of slides visible per view
  breakpoints: {
    768: {
      perView: 1 // Adjust the number of slides visible at different screen sizes
    },
    480: {
      perView: 1
    }
  }
});

glide.mount(); // Mount the slider





// navbar


let menu = document.querySelector('#menu__icon')
let nav__list = document.querySelector('.nav__list') 

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    nav__list.classList.toggle('open')
    document.getElementById("nav__items1").style.opacity="1";
    document.getElementById("nav__items2").style.opacity="1";
    document.getElementById("nav__items3").style.opacity="1";
    document.getElementById("nav__items4").style.opacity="1";
    document.getElementById("nav__items5").style.opacity="1";
}

  