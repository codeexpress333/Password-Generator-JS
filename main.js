//Get Button
var btn = document.querySelector('.btn');
var copyPassword = document.querySelector('.copypassword');

//Create Function 
function generate() {
    // console.log('test');

    //Get Value
    var range = document.getElementById("length").value;
    var display = document.getElementById("display");
    var password = '';
    var charaters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    var charlenght = charaters.length;

    //Loop Through
    for (i = 0; i < range; i++) {
        password += charaters.charAt(Math.floor(Math.random() * charlenght));
    }

    //Show Value
    display.value = password;

}

//Work For Copy Password Text
function copyPass() {
    // console.log('test');

    var result = document.getElementById('display');
    result.select(); //Method To Select Text
    result.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Your Password: " + ' \" ' + result.value + '\"');

}



//Add Event Listener
btn.addEventListener('click', generate);
copyPassword.addEventListener('click', copyPass);