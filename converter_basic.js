const submitButton = document.getElementById("submit");
// console.log(submitButton);
// NOTE: if you want to put an event listener on an <a> tag, the href attribute must be set to "#"

submitButton.addEventListener('click', () => {
  // step 0 : create your table (dictionary)

  const table = {
    A: '00001',
    B: '00010',
    C: '00011'
  };
  // console.log(table);

  // STEP 1: store message in variable

  const message = document.getElementById("love-message");
  // console.log(message.value.toUpperCase());

  // STEP 2 : make an array (LIST) of letters of the message and store it in a variable

  const letters = message.value.toUpperCase().split("");
  // console.log(letters);
  //  ["A", "L", "!"]

  // STEP 3 : loop over each letter in array and convert it to its binary code

  const result = letters.map(letter => {
    //  if the letter is in the table
    if (table[letter]) {
      //  map the letter to the binary code in the table
      return table[letter];
    } else {
      // map the letter to itself
      return letter;
    }
  }).join(" ");
  // console.log(result);

  // STEP 4 : display the result

  const output = document.getElementById("output");
  output.insertAdjacentHTML('afterbegin', `<p>${result}</p>`)
});

