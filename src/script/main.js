const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const calcBtn = document.querySelector("button");

calcBtn.addEventListener("click", () => {
  let hasError = false;

  const inputFields = [
    { input: dayInput, field: "day", min: 1, max: 31 },
    { input: monthInput, field: "month", min: 1, max: 31 },
    { input: yearInput, field: "year", min: 1, max: new Date().getFullYear() },
  ];

  const values = {};

  //Check for empty fields and valid numeric ranges

  inputFields.forEach(({ input, field, min, max }) => {
    const value = input.value.trim();
    const num = +value;

    values[field] = num;

    if (!value) {
      errorMsg(input, "This field is required");
      hasError = true;
    } else if (num < min || num > max) {
      if (field === "year" && num > max) {
        errorMsg(input, "Must be in the past");
      } else {
        errorMsg(input, `Must be a valid ${field}`);
      }
      hasError = true;
    }
  });

  if (hasError) return;

  //Check if date actually exists

  const birthDate = new Date(values.year, values.month - 1, values.day);
  const today = new Date();

  if (
    birthDate.getFullYear() !== values.year ||
    birthDate.getMonth() !== values.month - 1 ||
    birthDate.getDate() !== values.day
  ) {
    inputFields.forEach(({ input }) => {
      errorMsg(input, "Must be a valid date");
      hasError = true;
    });
  }

  if (!hasError && birthDate > today) {
    inputFields.forEach(({ input }) => {
      errorMsg(input, "Cannot be a futur birthdate");
    });
  }

  if (hasError) return;

  //Calculate birthday

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  //Adjust if birthday has not happened yet this year

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  //Output Age

  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
});

dayInput.addEventListener("input", () => clearError(dayInput));
monthInput.addEventListener("input", () => clearError(monthInput));
yearInput.addEventListener("input", () => clearError(yearInput));

function getInputFields(e) {
  const div = e.parentElement;
  return {
    small: div.querySelector(".error-msg"),
    label: div.querySelector(".label"),
    input: div.querySelector(".input"),
  };
}

const errorMsg = (e, message) => {
  const { small, label, input } = getInputFields(e);
  small.textContent = message;
  label.classList.add("text-red-400");
  input.classList.add("border-red-400");
};

const clearError = (e) => {
  const { small, label, input } = getInputFields(e);

  small.textContent = "";
  label.classList.remove("text-red-400");
  input.classList.remove("border-red-400");
};
