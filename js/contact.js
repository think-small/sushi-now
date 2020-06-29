//  CACHE DOM NODES
const form = document.querySelector("form");

//  DISABLE NATIVE VALIDATION AND
//  IMPLEMENT CUSTOM FORM VALIDATION
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

document.addEventListener(
  "blur",
  (e) => {
    const error = hasError(e.target);
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
