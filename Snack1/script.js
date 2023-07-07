let sum = 0;
const numbers = [];

while (sum < 50) {
  const userNumber = parseInt(prompt("Inserisci un numero"));
  numbers.push(userNumber);
  console.log(userNumber);
  console.log(numbers);
  sum += userNumber;
}
