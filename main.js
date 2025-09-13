const body = document.body;
const formLink = document.getElementsByClassName("form-link");
const mybutton = document.getElementById("btn-back-to-top");
const alert = document.getElementsByClassName("alert");
const alertSuccess = document.getElementById("successAlert");
const alertDanger = document.getElementById("dangerAlert");
const submitForm = document.getElementById("submitBtn");
const checkBox = document.getElementById("checkbox");
const form = document.getElementById("myForm");
btn = document.getElementById("btn");

form.addEventListener("submit", function (event) {
  const inputs = form.querySelectorAll("input");
  let allFilled = true;

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      allFilled = false;
    }
  });

  if (!(allFilled && checkBox.checked)) {
    event.preventDefault();
    alertDanger.style.display = "block";
  } else {
    event.preventDefault();
    alertSuccess.style.display = "block";
    form.reset();
    alertDanger.style.display = "none";
  }
  
  window.scrollTo({ top: 0, behavior: "smooth" });

  setTimeout(() => {
    alertSuccess.style.display = "none";
  }, 5000);
});

window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// when clicked, scroll to top
mybutton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
