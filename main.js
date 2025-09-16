const formLink = document.getElementsByClassName("form-link");
const mybutton = document.getElementById("btn-back-to-top");
const alert = document.getElementsByClassName("alert");
const alertSuccess = document.getElementById("successAlert");
const alertDanger = document.getElementById("dangerAlert");
const modal = document.getElementsByClassName("modal");
const submitForm = document.getElementById("submitBtn");
const checkBox = document.getElementById("checkbox");
const form = document.getElementById("myForm");

// fungsi utk validasi input form
if (form) {
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
      alertSuccess.style.display = "none";
      alertDanger.style.display = "block";
      setTimeout(() => {
        alertDanger.style.display = "none";
      }, 3000);

    } else {
      event.preventDefault();
      alertSuccess.style.display = "block";
      form.reset();
      alertDanger.style.display = "none";

      //modal
      const modal = new bootstrap.Modal(
        document.getElementById("successModal")
      );
      modal.show();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

//fungsi untuk btn-back-to-top
if (mybutton) {
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

  //scroll ke atas
  mybutton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
