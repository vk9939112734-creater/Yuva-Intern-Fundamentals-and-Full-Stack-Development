const checkButton = document.getElementById("checkButton");
const message = document.getElementById("message");

checkButton.addEventListener("click", () => {
  message.textContent = "JavaScript is working correctly!";
});
