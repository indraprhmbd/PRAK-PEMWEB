const body = document.body;
const formLink = document.getElementsByClassName('form-link')
const mybutton = document.getElementById("btn-back-to-top");

btn = document.getElementById('btn');

// get the button


window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// when clicked, scroll to top
mybutton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
