const form = document.querySelector(".login-form");
form.addEventListener("submit", onTargetElement);

function onTargetElement(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("Please complete all forms");
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    form.reset();
  }
}
