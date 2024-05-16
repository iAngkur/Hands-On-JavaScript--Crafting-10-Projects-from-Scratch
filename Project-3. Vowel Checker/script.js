function countVowels() {
    let text = document.getElementById('input-text').value;
    let vowels = 0;

    if (!text) {
        alert('Enter text');
        document.getElementById('input-text').focus();
    }

    for (let i = 0; i < text.length; i++) {
        let ch = text[i];
        if (isVowel(ch)) {
            vowels++;
        }
    }
    document.getElementById('result').innerText = `Total Vowels: ${vowels}`;
}

const VOWELS = 'aeiouAEIOU';
function isVowel(char) {
    return VOWELS.includes(char);
}