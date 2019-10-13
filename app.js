let fact = document.querySelector(".card__fact");
let factText = document.querySelector(".card__text");
let numberInput = document.querySelector(".card__input");

numberInput.addEventListener("input", getFactFetch);
/*
function getFactAjaX() {
  let number = numberInput.value;

  let xhr = new XMLHttpRequest();
  xhr.open("Get", `http://numbersapi.com/${number}`);

  xhr.onload = function() {
    if (this.status == 200 && number != "") {
      fact.style.display = "block";
      factText.innerText = this.responseText;
    }
  };

  xhr.send();
}
*/

function getFactFetch() {
  let number = numberInput.value;

  fetch(`http://numbersapi.com/${number}`)
    .then(response => response.text())
    .then(data => {
      if (number != "") {
        fact.style.display = "block";
        factText.innerText = data;
      }
    })
    .catch(err => console.log(err));
}
