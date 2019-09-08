
window.onscroll = function() {scrollNavbar()};

function scrollNavbar () {
  if (window.scrollY > 10) {
    let element = document.getElementById("mainNav");
    element.classList.add("navbar-scroll");
  } else {
    let element = document.getElementById("mainNav");
    element.classList.remove("navbar-scroll");
  }
}
