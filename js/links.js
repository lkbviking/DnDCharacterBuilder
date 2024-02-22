function item(text) {
    return `<a href="http://dnd5e.wikidot.com/wondrous-items:${sanitizeText(text)}">${text}</a>`;
}

function spell(text) {
    return `<a href="http://dnd5e.wikidot.com/spell:${sanitizeText(text)}">${text}</a>`;
}

function sanitizeText(text) {
    return text.replace(/[',+]/g, '').replace(/ /g, '-').toLowerCase();
}