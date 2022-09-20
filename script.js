const year = document.getElementById("input");
const calculate = document.getElementById("button");
const final = document.querySelector(".input");
calculate.addEventListener("click", () => {
  const age = new Date().getFullYear() - year.value;
  final.innerHTML = `you are  ${age} years old`;
});

year.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    calculate.click();
  }
});
