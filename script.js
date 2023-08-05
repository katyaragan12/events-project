// Get references to the color buttons and color display div
const aquaButton = document.getElementById("aqua");
const tealButton = document.getElementById("teal");
const pinkButton = document.getElementById("pink");
const purpleButton = document.getElementById("purple");
const colorlessButton = document.getElementById("colorless");
const colorDisplay = document.getElementById("color-display");
const toggleButton = document.getElementById("toggleButton");

// Function to update the color display div
function updateColor(color, textColor) {
  colorDisplay.style.backgroundColor = color;
  colorDisplay.textContent = textColor;
}

// Function to toggle the visibility of the color display div
function toggleColorDisplay() {
  colorDisplay.style.display = colorDisplay.style.display === "none" ? "block" : "none";
}

// Add click event listeners to each button
aquaButton.addEventListener("click", function () {
  updateColor("aqua", "aqua");
});

tealButton.addEventListener("click", function () {
  updateColor("teal", "teal");
});

pinkButton.addEventListener("click", function () {
  updateColor("pink", "pink");
});

purpleButton.addEventListener("click", function () {
  updateColor("purple", "purple");
});

colorlessButton.addEventListener("click", function () {
  updateColor("white", "colorless");
});

// Add click event listener to the toggle button
toggleButton.addEventListener("click", function () {
  toggleColorDisplay();
});
