// Generates Random Password
function generatePassword() {

    // Prompts user for password length and checks if the input was a number
    var userInput = window.prompt("Password Length?");
    var passwordLength = parseInt(userInput, 10);
    if (isNaN(passwordLength)) {
      window.alert("Please enter a number");
      return;
    }

    // Sets acceptable password length range
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password length must be between 8 and 128 characters");
      return;
    }
    // Asks user for password parameters
    var userWantsNumbers = window.confirm("Would you like to include numbers?");
    var userWantsSymbols = window.confirm("Would you like to include symbols?");
    var userWantsLowercase = window.confirm("Would you like to include lowercase letters?");
    var userWantsUppercase = window.confirm("Would you like to include uppercase letters?");

    // Arrays of possible characters
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
    const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const symbols = [".",",",":","?","=","-","(",")","/","%","@","!","&","$","#","*",];


    // Assigns chosen arrays to single characterOptions arrays
    var characterOptions = [];

    if (userWantsNumbers) {
      characterOptions.push(numbers);
    }

    if (userWantsLowercase) {
      characterOptions.push(lowerCase);
    }

    if (userWantsUppercase) {
      characterOptions.push(upperCase);
    }

    if (userWantsSymbols) {
      characterOptions.push(symbols);
    }

    if (characterOptions.length === 0) {
      window.alert("at least one parameter must be chosen")
    }

    // Merges nested arrays into single array
    var mergedArrays = [].concat.apply([], characterOptions);

    // Generates random password from mergedArrays
    var password = "";

    for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * mergedArrays.length);
      password = password + mergedArrays[randomNumber];
    }

    return password;
  }

  // Get references to the #generate and #copy element
  var generateBtn = document.querySelector("#generate");
  var copyBtn = document.querySelector("#copy");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  // Add event listener to copy button
  copyBtn.addEventListener("click", copyToClipboard);

  // Copy password to clipboard
  function copyToClipboard() {
    var copyText = document.getElementById("password").value;
    navigator.clipboard.writeText(copyText).then(() => {
    alert("Copied to clipboard");
    });
  }
