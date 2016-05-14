var form = document.querySelector(".form-contacts");
var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-overlay");

var close = popup.querySelector(".modal-content-close");
var login = popup.querySelector("[name=login]");

form.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overlay.classList.add("modal-overlay-show");
  login.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-overlay-show");
});
