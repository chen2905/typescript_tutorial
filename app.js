let userInput;
let userName;
userInput = 5;
//userInput = 'Chen Gao'
if (typeof userInput === 'string') {
    userName = userInput;
}
else {
    userName = 'No user name passed';
}
const btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener('click', () => alert(userName));
