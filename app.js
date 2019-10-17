const fact = document.querySelector(".card__fact");
const factText = document.querySelector(".card__text");
const numberInput = document.querySelector(".card__input");
const select = document.querySelector(".card__select");

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
  const number = numberInput.value;
  const selectIndex = select.options[select.selectedIndex].value;

  if (selectIndex === "travia") {
    fetch(`http://numbersapi.com/${number}`)
      .then(response => response.text())
      .then(data => {
        if (number != "") {
          fact.style.display = "block";
          factText.innerText = data;
        }
      })
      .catch(err => console.log(err));
  } else if (selectIndex === "year") {
    fetch(`http://numbersapi.com/${number}/year`)
      .then(response => response.text())
      .then(data => {
        if (number != "") {
          fact.style.display = "block";
          factText.innerText = data;
        }
      })
      .catch(err => console.log(err));
  } else if (selectIndex === "math") {
    fetch(`http://numbersapi.com/${number}/math`)
      .then(response => response.text())
      .then(data => {
        if (number != "") {
          fact.style.display = "block";
          factText.innerText = data;
        }
      })
      .catch(err => console.log(err));
  }
}
