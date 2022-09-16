const histories = document.getElementById("histories");

function addHistory(questionText, timeGive, errorCount) {
  // const timeInt=parseInt(timeTaken)
  const newRow = document.createElement("div");
  newRow.classList.add("card");

  newRow.innerHTML = `
  <h3>${questionText}</h3>
  <div>
  <p>You took: <span class="bold">${timeGive}</span> seconds</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, errorCount });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  // console.log(previousTests.length)

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("card");
    const timeCount=parseInt(test.timeTaken)
    newRow.innerHTML = `
  <h3>${test.questionText}</h3>
  <p>You took: <span class="bold">${timeCount}</span> seconds</p>
    <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
  `;

    histories.appendChild(newRow);
  });
}
