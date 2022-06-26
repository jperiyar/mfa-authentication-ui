import "./styles.css";

const mfaForm = document.querySelector(".mfa-form");
const inputFields = [...document.querySelectorAll(".mfa-input")];

mfaForm.addEventListener("keypress", (e) => {
  if (e.target.matches(".mfa-input")) {
    if (/\D/.test(e.key) || e.target.value) {
      e.preventDefault();
    }
  }
});

// move to the next field

mfaForm.addEventListener("input", (e) => {
  if (e.target.matches(".mfa-input")) {
    const currentIdx = inputFields.indexOf(e.target);
    const nextInputField = inputFields[currentIdx + 1];

    if (nextInputField) {
      nextInputField.focus();
    }
  }
});

mfaForm.addEventListener("keydown", (e) => {
  if (e.target.matches(".mfa-input") && e.keyCode === 8) {
    const currentIdx = inputFields.indexOf(e.target);
    const prevInputField = inputFields[currentIdx - 1];

    if (prevInputField) {
      prevInputField.focus();
      prevInputField.value = "";
    }
  }
});

mfaForm.addEventListener("submit", (e) => {
  const codeEntered = inputFields.map((inputCtrl) => inputCtrl.value).join("");
  alert(codeEntered);
});
