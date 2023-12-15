const specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function getPasswordOptions() {
  let passwordLength = parseInt(prompt("Enter password length (between 8 and 128 characters):"));

  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Invalid input. Enter a number between 8 and 128:"));
  }

  const includeLower = confirm("Include lowercase characters?");
  const includeUpper = confirm("Include uppercase characters?");
  const includeNumeric = confirm("Include numeric characters?");
  const includeSpecial = confirm("Include special characters?");

  if (!includeLower && !includeUpper && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected.");
    return getPasswordOptions();
  }

  const charOptions = [];
  if (includeLower) charOptions.push(lowerCasedCharacters);
  if (includeUpper) charOptions.push(upperCasedCharacters);
  if (includeNumeric) charOptions.push(numericCharacters);
  if (includeSpecial) charOptions.push(specialCharacters);

  return { passwordLength, charOptions };
}

function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generatePassword() {
  const { passwordLength, charOptions } = getPasswordOptions();
  let generatedPassword = '';

  for (let i = 0; i < passwordLength; i++) {
    const selectedCharSet = getRandom(charOptions);
    generatedPassword += getRandom(selectedCharSet);
  }

  return generatedPassword;
}

const generateBtn = document.querySelector('#generate');

function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);