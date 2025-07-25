
// Initial noun words, only for example.
// These nouns will be moved in the future to their correct category.

import type { Noun } from "./noun";

// А Б В Г Д Е Ё Ж З И Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Э Ю Я
// Non included: Ь (soft), Ъ (hard).

export const exampleNouns: Noun[] = [
    { id: "кошка", gender: "female", translation: {es: "gata", en: "cat"},
        cases: {singular: {nominative: "кошка", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "кошки", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: [], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    { id: "человек", gender: "male", translation: {es: "persona", en: "person"},
        cases: {singular: {nominative: "человек", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "люди", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: [], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    { id: "год", gender: "male", translation: {es: "año", en: "year"},
        cases: {singular: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "годы", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: [], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    { id: "время", gender: "neutral", translation: {es: "tiempo", en: "time"},
        cases: {singular: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "времена", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: [], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    { id: "рука", gender: "female", translation: {es: "mano/brazo", en: "hand/arm"},
        cases: {singular: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "руки", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: [], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
];