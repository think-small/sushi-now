//  =============================  //
//  =====  CACHE DOM NODES  =====  //
//  =============================  //
const form = document.querySelector("form");
const phoneInput = document.querySelector("#phone-number");

//  ================================  //
//  DISABLE NATIVE VALIDATION AND
//  IMPLEMENT CUSTOM FORM VALIDATION
//  ================================  //
form.setAttribute("novalidate", true);

const errorMessages = {
  valueMissing: "Please fill out this field",
  typeMismatch: "Please use the correct input type",
  tooShort: "Please lengthen this text",
  tooLong: "Please shorten this text",
  badInput: "Please enter a number",
  stepMismatch: "Please select a valid value",
  rangeOverflow: "Please return a smaller value",
  rangeUnderflow: "Please return a larger value",
  patternMismatch: "Please match the requested format",
  generic: "The value you entered for this field is invalid",
};

//  =============================  //
//  =====  EVENT LISTENERS  =====  //
//  =============================  //
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.reportValidity()) {
    alert(
      "Thanks for the submission - we'll contact you withint 2 - 5 business days"
    );
    form.reset();
  }
});

phoneInput.addEventListener("keyup", (e) => {
  const inputLength = e.target.value.length;
  const deleteKeys = [8, 127];
  const keyCode = e.keyCode;

  if (
    (inputLength === 3 && !deleteKeys.includes(keyCode)) ||
    (inputLength === 7 && !deleteKeys.includes(keyCode))
  )
    e.target.value = `${e.target.value}-`;
});

document.addEventListener(
  "blur",
  (e) => {
    const error = hasError(e.target);

    if (
      e.target.nextElementSibling &&
      error === e.target.nextElementSibling.innerText
    )
      return;
    else if (error && !e.target.nextElementSibling) {
      const errorDiv = document.createElement("div");
      errorDiv.classList.add("error-feedback");
      errorDiv.innerText = error;
      e.target.after(errorDiv);

      e.target.classList.add("error-input");
    } else {
      e.target.nextElementSibling.remove();
      e.target.classList.remove("error-input");
    }
  },
  true
);

//  ==============================  //
//  =====  HELPER FUNCTIONS  =====  //
//  ==============================  //
const hasError = (field) => {
  if (
    field.disabled ||
    field.type === "file" ||
    field.type === "reset" ||
    field.type === "submit" ||
    field.type === "button"
  )
    return;

  const validity = field.validity;
  let foundErrors = [];
  for (const key in validity) {
    if (validity[key]) foundErrors.push(key);
  }

  return errorMessages[foundErrors[0]] ? errorMessages[foundErrors[0]] : "";
};
