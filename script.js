const passwordInput = document.getElementById("password");
const sizeInput = document.getElementById("size");
const sizeValue = document.getElementById("sizeValue");

sizeInput.addEventListener("input", () => {
  sizeValue.textContent = sizeInput.value;
});

function generatePassword() {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+";

  let chars = "";

  if (document.getElementById("upper").checked) chars += upper;
  if (document.getElementById("lower").checked) chars += lower;
  if (document.getElementById("numbers").checked) chars += numbers;
  if (document.getElementById("symbols").checked) chars += symbols;

  let password = "";
  for (let i = 0; i < sizeInput.value; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  passwordInput.value = password;
}

function copyPassword() {
  passwordInput.select();
  document.execCommand("copy");
  alert("Senha copiada!");
}
