const LOWERCASE_LETERS = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';
const SYMBOLS = '@#$&%*(!)<=>?+-_';

const gid = (id) => {
    return document.getElementById(id);
}

function shuffle(characters) {
    let shuffledCharacters = '';
    for (let i = 0; i < characters.length; i++) {
        shuffledCharacters += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return shuffledCharacters;
}

function getPassword(characters, password_length) {
    characters = shuffle(characters);
    let randIndex = Math.floor(Math.random() * (characters.length - password_length + 1));
    return characters.substring(randIndex, (randIndex + password_length));;
}

function generatePassword() {
    const password_length = parseInt(gid('length').value);
    let characters = '';

    if (gid('lowercase').checked) {
        characters += shuffle(LOWERCASE_LETERS);
    }
    if (gid('uppercase').checked) {
        characters += shuffle(UPPERCASE_LETTERS);
    }
    if (gid('numbers').checked) {
        characters += shuffle(NUMBERS);
    }
    if (gid('symbols').checked) {
        characters += shuffle(SYMBOLS);
    }

    if (characters) {
        gid('password-text').value = getPassword(characters, password_length);
    } else {
        alert('Select Option');
        gid('password-text').value = '';
    }
}

gid('generate-password-btn').addEventListener('click', generatePassword);
gid('copy-icon').addEventListener('click', () => {
    const text = gid('password-text').value;
    if (text) {
        gid('password-text').select();
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text)
                .then(() => {
                    console.log('copied');
                })
                .catch(error => {
                    console.error('Error copying text:', error);
                });
        } else {
            console.error('Clipboard API not supported');
        }
    }
});


