function detectCharacter() {
    const character_input_element = document.getElementById('character_input');
    const result_element = document.getElementById('result');

    if (isASCII(character_input_element.value.trim())) {
        result_element.innerText = `The entered character is an ASCII character`;
    } else {
        result_element.innerText = `The entered character is a Unicode character`;
    }
}

function isASCII(ch) {
    return ch.charCodeAt(0) <= 127;
}