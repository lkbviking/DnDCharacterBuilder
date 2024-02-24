export function item(text) {
    return `<a href="http://dnd5e.wikidot.com/wondrous-items:${sanitizeText(text)}">${text}</a>`;
}

export function spell(text) {
    return `<a href="http://dnd5e.wikidot.com/spell:${sanitizeText(text)}">${text}</a>`;
}

export function sanitizeText(text) {
    if (text === undefined || text === null || text === '') {
        return '';
    }
    let index = text.indexOf('-')
    if (index !== -1) {
        text = text.substring(0, index-1);
    }

    return text.replace(/[',+*^]/g, '').replace(/ /g, '-').toLowerCase();
}

export function characterLink(character) {
    return `<a href="specificCharacter.html?buildName=${sanitizeText(character)}">${character}</a>`;
}

export function feature(text, link) {
    return `<a href="http://dnd5e.wikidot.com/${link}">${text}</a>`;
}

export function feat(text) {
    return `<a href="http://dnd5e.wikidot.com/feat:${sanitizeText(text)}">${text}</a>`;
}

export function lineage(text) {
    return `<a href="http://dnd5e.wikidot.com/lineage:${sanitizeText(text)}">${text}</a>`;
}

export function sixE(text) {
    return `<a href="https://media.dndbeyond.com/compendium-images/ua/ph-playtest6/OJVW7QLuHjEFCCVs/UA-2023-PH-Playtest6.pdf?icid_source=house-ads&icid_medium=crosspromo&icid_campaign=playtest6">${text}</a>`;
}