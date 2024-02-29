let playerCounters = [
  {
    name: "Player 1",
    life: 40,
  },
];

function lifeUp(button) {
  let counter = button.parentElement;
  let index = Array.from(counter.parentElement.children).indexOf(counter);
  playerCounters[index].life++;
  counter.querySelector(".result-num").textContent = playerCounters[index].life;
}

function lifeDown(button) {
  let counter = button.parentElement;
  let index = Array.from(counter.parentElement.children).indexOf(counter);
  playerCounters[index].life--;
  counter.querySelector(".result-num").textContent = playerCounters[index].life;
}

function reset() {
  const confirmed = confirm("Are you sure you want to reset?");
  if (confirmed) {
    for (let i = 0; i < playerCounters.length; i++) {
      playerCounters[i].life = 40;
      document.querySelectorAll(".result-num")[i].textContent = "40";
    }
  }
}

function addPlayers() {
  let count = prompt("How many players would you like to add?");
  if (count && !isNaN(count) && count > 0) {
    for (let i = 0; i < count; i++) {
      let counters = document.getElementById("counters");
      let newCounter = document.createElement("div");
      newCounter.classList.add("counter");
      newCounter.innerHTML = `
          <div class="player-name">
            <label for="p${playerCounters.length + 1}-name">Name: </label>
            <input type="text" class="player-name-input" name="p${
              playerCounters.length + 1
            }-name" placeholder="Enter Name"/>
          </div>
          <button class="up-button" id="up" onclick="lifeUp(this)">▲</button>
          <div class="life">
            <span class="result-num">40</span>
          </div>
          
          <button class="down-button" id="down" onclick="lifeDown(this)">▼</button>
          <select class="background-color-select" onchange="changeBackgroundColor(this)">
          <option disabled selected>Select Background Color</option>
          
          <option value="gradient1" class="gradient-option">Azorius</option>
            <option value="gradient2" class="gradient-option">Boros</option>
            <option value="gradient3" class="gradient-option">Dimir</option>
            <option value="gradient4" class="gradient-option">Golgari</option>
            <option value="gradient5" class="gradient-option">Gruul</option>
            <option value="gradient6" class="gradient-option">Izzet</option>
            <option value="gradient7" class="gradient-option">Orzhov</option>
            <option value="gradient8" class="gradient-option">Rakdos</option>
            <option value="gradient9" class="gradient-option">Selesnya</option>
            <option value="gradient10" class="gradient-option">Simic</option>
            <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="lightYellow">White</option>
          <option value="#444444">Black</option>
          <option value="purple">Purple</option>
          <option value="yellow">Yellow</option>
          <option value="orange">Orange</option>
          </select>
          <button class="remove-player" onclick="removePlayer(this)">Remove Player</button>`;

      counters.appendChild(newCounter);
      playerCounters.push({
        name: `Player ${playerCounters.length + 1}`,
        life: 40,
      });
    }
  } else {
    alert("Please enter a number greater than 0");
  }
}

function removePlayer(button) {
  const confirmed = confirm("Are you sure you want to remove player?");
  if (confirmed) {
    let counter = button.parentElement;
    let index = Array.from(counter.parentElement.children).indexOf(counter);
    counter.remove();
    playerCounters.splice(index, 1);


    //this would revert the width of the parent div after removing a counter
    /*if (document.querySelectorAll(".counters").length === 0) {
   document.getElementById("counters").style.width = "auto";
 }
 */

    
  }
}

function changeBackgroundColor(selectElement) {
  let counter = selectElement.closest(".counter");
  let selectedColor = selectElement.value;

  if (selectedColor.startsWith("gradient")) {
    applyGradient(counter, selectedColor);
  } else {
    counter.style.backgroundColor = selectedColor;

    counter.style.backgroundImage = "none";
  }
}

function applyGradient(element, gradientClass) {
  let gradientValue;
  switch (gradientClass) {
    case "gradient1":
      gradientValue = "linear-gradient(to bottom, lightYellow 20%, blue 80%)";
      break;
    case "gradient2":
      gradientValue = "linear-gradient(to bottom, red 20%, lightYellow 80%)";
      break;
    case "gradient3":
      gradientValue = "linear-gradient(to bottom, blue 20%, #1F1F1F 80%)";
      break;
    case "gradient4":
      gradientValue = "linear-gradient(to bottom, green 20%, #1F1F1F 80%)";
      break;
    case "gradient5":
      gradientValue = "linear-gradient(to bottom, red 20%, green 80%)";
      break;
    case "gradient6":
      gradientValue = "linear-gradient(to bottom, red 20%, blue 80%)";
      break;
    case "gradient7":
      gradientValue =
        "linear-gradient(to bottom, lightYellow 20%, #1F1F1F 80%)";
      break;
    case "gradient8":
      gradientValue = "linear-gradient(to bottom, red 20%, #1F1F1F 80%)";
      break;
    case "gradient9":
      gradientValue = "linear-gradient(to bottom, lightYellow 20%, green 80%)";
      break;
    case "gradient10":
      gradientValue = "linear-gradient(to bottom, blue 20%, green 80%)";
      break;
    default:
      gradientValue = "";
      break;
  }

  element.style.backgroundImage = gradientValue;
}
