import { potentialCharacters } from './Metadata/potentialCharacters.js';
let params = new URLSearchParams(window.location.search);
let character = params.get('buildName');

let characterData = potentialCharacters.find((potentialCharacter) => {
    return potentialCharacter.buildName === character;
});

document.getElementById('container').innerHTML = characterData.getCharacterHTML();