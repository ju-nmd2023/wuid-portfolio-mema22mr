const msgElement = document.getElementById("msg");

const inputElement = document.getElementById("msginput");

const bottonElement = document.getElementById("enter-button");

bottonElement.addEventListener("click", function (event) {
  msgElement.innerText = "Thank you for your message!";
});
