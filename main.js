
//runs the genPassword function when the Generate button is clicked
document.getElementById("submit").onclick = function() {genPassword()};

//password generation function
function genPassword() {
    var pass_length = prompt("Enter a password length below between 8 and 128.");
    var number_char = prompt("Use Numbers? Y or N?");
    var special_char = prompt("Special Characters? Y or N?");
    var upper_char = prompt("Use uppercase Characters? Y or N?");
    var lower_char = prompt("Lowercase Characters? Y or N?");


    //sets char variables depending on the users response
    if(pass_length < 8 || pass_length > 128){
            prompt("Please enter a valid length!");
    }  else {

        if(number_char == "y" || number_char == "Y"){
            var chars1 = "1234567890";
        }

        if(special_char == "y" || special_char == "Y"){
            var chars2 = "!@#$%^&*";
        }

        if(upper_char == "y" || upper_char == "Y"){
            var chars3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }

        if(lower_char == "y" || lower_char == "Y"){
            var chars4 = "abcdefghijklmnopqrstuvwxyz";
        }

        if(number_char == "n" || number_char == "N"){
            var chars1 = "";
        }

        if(special_char == "n" || special_char == "N"){
            var chars2 = "";
        }

        if(upper_char == "n" || upper_char == "N"){
            chars3 = "";
        }

        if(lower_char == "n" || lower_char == "N"){
            chars4 = "";
        }

    }

    //combines chars to generates character list
    var result = '';
    var characters = ''.concat(chars1, chars2, chars3, chars4);

    //counts how many characters are in the characters array
    var charactersLength = characters.length;

    //adds one character at a time to results until desired length is reached
    for ( var i = 0; i < pass_length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    //sets resultbox to the generators result
    document.getElementById("myresult").value = result;

}
