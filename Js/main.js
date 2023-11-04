let wheel = document.querySelector(".spinner-wheel");
let spinBtn = document.querySelector(".center");
let value = Math.ceil(Math.random() * 3600);
let span = document.createElement("span");
let div = document.createElement("div");
let i = document.createElement("i");
let counter = 0;
spinBtn.onclick = function () {
  console.log(value);
  wheel.style.transform = `rotate(${value}deg)`;
  value += Math.ceil(Math.random() * 3600);
  console.log(value);
  counter++;
  if (counter % 100 == 0) {
    alert("Time For The Surprise");
    i.className = "fa-solid fa-gift";
    span.textContent = `Surprise`;
    span.appendChild(i);
    div.className = "item";
    div.style = "--i:9;";
    div.appendChild(span);
    wheel.appendChild(div);
  } else {
    wheel.removeChild(div);
  }
};
// <i class="fa-solid fa-gift"></i>
