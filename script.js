var names = document.querySelector('#name');
var input = document.querySelector('#input');
var btn = document.querySelector('#btn');

let cartoons = ['doraemon', 'pokemon', 'barbie', 'dora', 'spongebob', 'dexter', 'robinhood', 'popeye', 'simpsons', 'smurf', 'aladin'];

function shuffleWord(word) {
    let letters = word.split('');
    for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters.join('');
}

let randomIndex = Math.floor(Math.random() * cartoons.length);
names.textContent = shuffleWord(cartoons[randomIndex]);

btn.addEventListener('click', function() {
    let guessedName = input.value.toLowerCase();
    if (cartoons.includes(guessedName)) {
        window.location.reload();
        alert("Your guess is correct!");
    } else {
        document.querySelector('#message').style.display = 'block';
    }
});
