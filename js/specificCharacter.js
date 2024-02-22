import { potentialCharacters } from './Metadata/potentialCharacters.js';
import { sanitizeText } from './links.js';
let params = new URLSearchParams(window.location.search);
let character = params.get('buildName');

let characterData = potentialCharacters.find((potentialCharacter) => {
    return sanitizeText(potentialCharacter.buildName) === character;
});

document.getElementById('container').innerHTML = characterData.getCharacterHTML();