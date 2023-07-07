let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers.push(Math.floor(Math.random() * 100));
}

const div = document.createElement("div");
const div2 = document.createElement("div");

div.setAttribute("id", "red");
div2.setAttribute("id", "green");

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    div.innerHTML += `${numbers[i]} `;
  } else {
    div2.innerHTML += `${numbers[i]} `;
  }
}

const body = document.body;
body.append(div);
body.append(div2);
