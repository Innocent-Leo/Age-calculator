const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const calcBtn = document.querySelector("button");

calcBtn.addEventListener("click", () => {
  let hasError = false;

  const d = +dayInput.value;
  const m = +monthInput.value;
  const y = +yearInput.value;

  //Check for empty fields and valid numeric ranges

  if (dayInput.value.trim() === "") {
    errorMsg(dayInput, "This field is required");
    hasError = true;
  } else if (d < 1 || d > 31) {
    errorMsg(dayInput, "Must be a valid day");
    hasError = true;
  }
  if (monthInput.value.trim() === "") {
    errorMsg(monthInput, "This field is required");
    hasError = true;
  } else if (m < 1 || m > 12) {
    errorMsg(monthInput, "Must be a valid month");
    hasError = true;
  }
  if (yearInput.value.trim() === "") {
    errorMsg(yearInput, "This field is required");
    hasError = true;
  } else if (y < 1) {
    errorMsg(yearInput, "Must be a valid year");
    hasError = true;
  } else if (y > new Date().getFullYear()) {
    errorMsg(yearInput, "Must be in the past");
    hasError = true;
  }

  //Check if date actually exists

  const birthDate = new Date(y, m - 1, d);
  const today = new Date();

  if (!hasError) {
    if (
      birthDate.getFullYear() !== y ||
      birthDate.getMonth() !== m - 1 ||
      birthDate.getDate() !== d
    ) {
      errorMsg(dayInput, "Must be a valid date");
      errorMsg(monthInput);
      errorMsg(yearInput);
      hasError = true;
    }

    //Check if birthdate is not in the future

    if (birthDate > today) {
      errorMsg(dayInput, "Cannot be a future birthdate");
      errorMsg(monthInput);
      errorMsg(yearInput);
      hasError = true;
    }
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

const errorMsg = (e, message) => {
  const div = e.parentElement;
  const small = div.querySelector(".error-msg");
  const label = div.querySelector(".label");
  const input = div.querySelector(".input");

  small.textContent = message;
  label.classList.add("text-red-400");
  input.classList.add("border-red-400");
};

const clearError = (e) => {
  const div = e.parentElement;
  const small = div.querySelector(".error-msg");
  const label = div.querySelector(".label");
  const input = div.querySelector(".input");

  small.textContent = "";
  label.classList.remove("text-red-400");
  input.classList.remove("border-red-400");
};
