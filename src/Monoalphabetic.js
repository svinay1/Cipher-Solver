//returns dictionary with letters assigned to an index
export function return_dict() {
    var dict = {};
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i = 0; i < alphabet.length; i++) {
        dict[i] = alphabet.substring(i, i+1);
    }
    return dict;
}

//used to access key from a value of a dictionary
export function getKey(dictionary, value) {
    return Object.keys(dictionary).find(key => dictionary[key] === value); 
}

export function shuffle_dict(dictionary) {
    var len = Object.keys(dictionary).length;
    var shuffled_dict = {};
    for(let i = 0; i < len; i++) {
        var rand = Math.floor(Math.random() * len);
        if(Object.values(shuffled_dict).includes(dictionary[rand])) {
            i--;
        }
        else {
            shuffled_dict[i] = dictionary[rand];
        }
    }    
    return shuffled_dict;
}

export function monoalphabetic_cipher(text) {
    var dict = return_dict();
    var random_key = shuffle_dict(dict);
    var cipher = "";
    for(let i = 0; i < text.length; i++) {
        var key = getKey(dict, text.substring(i, i+1));
        cipher += random_key[key];
    }
    return cipher;
}

//writes the result of text input onto html
function finalValue() {
    var text_cipher = document.getElementById('cipher').value;
    document.getElementById("demo").innerHTML = monoalphabetic_cipher(text_cipher);
}
