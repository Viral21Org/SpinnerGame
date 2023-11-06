let wheel = document.querySelector(".spinner-wheel");
let spinBtn = document.querySelector(".center");
let value = Math.ceil(Math.random() * 3600);
let span = document.createElement("span");
let div = document.createElement("div");
let i = document.createElement("i");
let counter = 99;
let hundreds = 100;
spinBtn.onclick = function () {
  wheel.style.transform = `rotate(${value}deg)`;
  value += Math.ceil(Math.random() * 3600);
  counter++;
  let confe = document.getElementById("my-canvas");

  if (counter % 100 == 0) {
    alert("A hundred spin Gift is coming up right now");
    confe.style.visibility = "visible";
    setInterval(() => {
      confe.style.visibility = "hidden";
    }, 4000);
    i.className = "fa-solid fa-gift";
    span.textContent = `Surprise`;
    span.appendChild(i);
    div.className = "item";
    div.style = "--i:9;--clr:#ec9700;--color:#fff;";
    div.appendChild(span);
    wheel.appendChild(div);
  } else {
    wheel.removeChild(div);
  }
};
// <i class="fa-solid fa-gift"></i>
var confettiSettings = { target: "my-canvas" };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
