// The Great Literature Quiz

// Add an event listener for the responses
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // HTML variables
  let input1 = document.getElementById("input1").value.toLowerCase();
  let input2 = document.getElementById("input2").value.toLowerCase();
  let input3 = document.getElementById("input3").value.toLowerCase();
  let input4 = document.getElementById("input4").value.toLowerCase();

  // Correct questions var
  let correctQ = 0;
  let correctQspan = document.getElementById("percent");
  let msgSpan = document.getElementById("messageSpan");

  if (
    input1 === "edgar allan poe" ||
    input1 === "e.a.p" ||
    input1 === "edgar" ||
    input1 === "poe"
  ) {
    document.getElementById("raven").innerHTML = `<p id="raven">Correct!</p>`;
    correctQ++;
  } else {
    document.getElementById(
      "raven"
    ).innerHTML = `<p id="raven">Incorrect: The poem, The Raven, was written by Edgar Allan Poe in 1845! </p>`;
  }

  if (
    input2 === "taro hirai" ||
    input2 === "edogawa ranpo" ||
    input2 === "hirai" ||
    input2 === "taro" ||
    input2 === "edogawa" ||
    input2 === "ranpo"
  ) {
    document.getElementById(
      "detective"
    ).innerHTML = `<p id="detective">Correct!</p>`;
    correctQ++;
  } else {
    document.getElementById(
      "detective"
    ).innerHTML = `<p id="detective">Incorrect: The Boy Detectives Club was written by Taro Hirai, or (his pen name) Edogawa Ranpo.</p>`;
  }

  if (
    input3 === "a birdsong" ||
    input3 === "bird's call" ||
    input3 === "birds call" ||
    input3 === "birdsong" ||
    input3 === "a birdcall"
  ) {
    document.getElementById(
      "feathers"
    ).innerHTML = `<p id="feathers">Correct!</p>`;
    correctQ++;
  } else {
    document.getElementById(
      "feathers"
    ).innerHTML = `<p id="feathers">Incorrect: Emily Dickinson was comparing hope to a birdcall or birdsong! </p>`;
  }

  if (input4 === "march 31, 1849" || input4 === "1849") {
    document.getElementById("dream").innerHTML = `<p id="dream">Correct!</p>`;
    correctQ++;
  } else {
    document.getElementById(
      "dream"
    ).innerHTML = `<p id="dream">Incorrect: Edgar Allan Poe's poem, A Dream Within A Dream, was originally published on March 31, 1849. </p>`;
  }

  let msg = `${correctQ}/4 (${(correctQ / 4) * 100}%)`;
  correctQspan.innerHTML = msg;

  if (msg === "0/4 (0%)") {
    msgSpan.innerHTML = `<p class="score" id="messageSpan">Try Checking your answers.</p>`;
  } else if (msg === "1/4 (25%)") {
    msgSpan.innerHTML = `<p class="score" id="messageSpan">Good try!</p>`;
  } else if (msg === "2/4 (50%)") {
    msgSpan.innerHTML = `<p class="score" id="messageSpan">You can do this!</p>`;
  } else if (msg === "3/4 (75%)") {
    msgSpan.innerHTML = `<p class="score" id="messageSpan">Well done.</p>`;
  } else {
    msgSpan.innerHTML = `<p class="score" id="messageSpan">Great job!</p>`;
  }
}
