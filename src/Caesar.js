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

//applies the Caesar Cipher onto text with a given shift
export function caesar_cipher(text, shift) {
    var dict = return_dict();
    var cipher = "";
    var str_length = Object.keys(dict).length;
    var actual_shift = shift % str_length;
    for(let i = 0; i < text.length; i++) {
        var current_index = parseInt(getKey(dict, text.substring(i,i+1)));
        var index = (current_index + actual_shift) % str_length;
        var string_index = index + "";
        cipher += dict[string_index];
    }
    return cipher;
}

//applies Caesar Cipher decryption to obtain text from a cipher
export function caesar_decipher(cipher, shift) {
    return caesar_cipher(cipher, 26 - shift);
}

//writes the result of text input onto html
function getFinalValue() {
    var text_cipher = document.getElementById('cipher').value;
    var text_shift = document.getElementById('shift').value;
    document.getElementById("demo").innerHTML = caesar_decipher(text_cipher, text_shift);
}