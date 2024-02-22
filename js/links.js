export function item(text) {
    return `<a href="http://dnd5e.wikidot.com/wondrous-items:${sanitizeText(text)}">${text}</a>`;
}

export function spell(text) {
    return `<a href="http://dnd5e.wikidot.com/spell:${sanitizeText(text)}">${text}</a>`;
}

export function sanitizeText(text) {
    return text.replace(/[',+]/g, '').replace(/ /g, '-').toLowerCase();
}

export function characterLink(character) {
    return `<a href="specificCharacter.html?buildName=${sanitizeText(character)}">${character}</a>`;
}