
//runs the genPassword function when the Generate button is clicked
document.getElementById("submit").onclick = function() {genPassword()};

//password generation function
function genPassword() {
    var pass_length = document.getElementById("pass_length").value;
    var number_char = document.getElementById("use_numbers");
    var special_char = document.getElementById("use_specials");
    var upper_char = document.getElementById("use_uppers");
    var lower_char = document.getElementById("use_lowers");


    //sets char variables depending on the users response
    if(pass_length < 8 || pass_length > 128){
            prompt("Please enter a valid length!");
    }  else {

        if(number_char.checked){
            var chars1 = "1234567890";
            console.log('if_else ran!');
        }

        if(special_char.checked){
            var chars2 = "!@#$%^&*";
            console.log('if_else ran!');
        }

        if(upper_char.checked){
            var chars3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            console.log('if_else ran!');
        }

        if(lower_char.checked){
            var chars4 = "abcdefghijklmnopqrstuvwxyz";
            console.log('if_else ran!');
        }

        if(!number_char.checked){
            var chars1 = "";
            console.log('if_else ran!');
        }

        if(!special_char.checked){
            var chars2 = "";
        }

        if(!upper_char.checked){
            chars3 = "";
        }

        if(!lower_char.checked){
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
