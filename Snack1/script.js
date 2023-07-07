let sum = 0;

while (sum < 50) {
  userNumber = parseInt(prompt("Inserisci un numero"));
  const numbers = [userNumber];
  console.log(userNumber);
  console.log(numbers);
  sum += userNumber;
}
