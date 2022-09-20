const year = document.getElementById("input");
const calculate = document.getElementById("button");
const final = document.querySelector(".input");
calculate.addEventListener("click", () => {
  const age = new Date().getFullYear() - year.value;
  console.log(age);
  // input.classList.add("hidden");
  // button.classList.add("hidden");
  // document.querySelector(".input").innerHTML = `you are  ${age} years old`;
  final.innerHTML = `you are  ${age} years old`;
});
