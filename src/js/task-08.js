const form = document.querySelector(".login-form");
form.addEventListener("submit", onTargetElement);
function onTargetElement(event) {
  event.preventDefault();
  const eventTarget = event.currentTarget.elements;
  const mail = eventTarget.email;
  const password = eventTarget.password;
  if (mail.value === "" || password.value === "") {
    alert("Please complete all forms");
  } else {
    const formData = {
      mail,
      password,
    };
    console.log(form);
    form.reset();
  }
}
