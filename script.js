var counter = 0;

function like() {
  counter = counter + 1;

  document.getElementById("votes").innerHTML = "Голосов: " + counter;
  return;
}

function disslike() {
  counter = counter - 1;

  document.getElementById("votes").innerHTML = "Голосов: " + counter;
  return;
}
