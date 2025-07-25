
// Initial noun words, only for example.

import type { Noun } from "./noun";

// А Б В Г Д Е Ё Ж З И Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Э Ю Я
// Non included: Ь (soft), Ъ (hard).

export const exampleNouns: Noun[] = [
    { id: "кошка", gender: "female", translation: {es: "gata", en: "cat"},
        cases: {singular: {nominative: "кошка", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "кошки", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: [], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    }
];