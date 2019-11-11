// function to convert a character in its ASCII binary version
const convertCharToBinary = char => {
  let binary = char.charCodeAt(0).toString(2);
  for (var i = 7- binary.length; i > 0; i--) {
    binary = "0" + binary;
  }
  return binary
}

const submitButton = document.getElementById("submit");
// const submitButton = document.querySelector(".form-button");

submitButton.addEventListener('click', () => {
  // STEP 1: store message in variable

  const message = document.getElementById("love-message");

  // STEP 2 : make an array (LIST) of characters of the message and store it in a variable

  const characters = message.value.split("");
  //  ["A", "L", "!"]

  // STEP 3 : loop over each char in array and convert it to its binary code

  const result = characters.map(char => {

    if (/[A-Za-z]/.test(char)) {
      return convertCharToBinary(char);
    } else {
      return `<strong>${char}</strong>`;
    }
  }).join(" ");

  // STEP 4 :flip the card

  const flipCardInner = document.querySelector(".flip-card-inner");
  flipCardInner.classList.toggle('flipping');

  // STEP 5 : remove previous result and display the new result

  const output = document.getElementById("output");
  output.innerHTML = "";
  output.insertAdjacentHTML('afterbegin', `<p>${result}</p>`)
});

const flipButton = document.getElementById("flip-button");
console.log(flipButton);
flipButton.addEventListener('click', () => {
  const flipCardInner = document.querySelector(".flip-card-inner");
  flipCardInner.classList.toggle('flipping');
});






