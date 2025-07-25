
// Initial noun words, only for example.
// These nouns will be moved in the future to their correct category.

import type { Noun } from "./noun";

// А Б В Г Д Е Ё Ж З И Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Э Ю Я
// Non included: Ь (soft), Ъ (hard).

export const exampleNouns: Noun[] = [
    { id: "кошка", gender: "female", translation: {es: "gata", en: "cat"},
        cases: {singular: {nominative: "кошка", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "кошки", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "https://believe.earth/wp-content/uploads/2018/10/economia-agua-pixabay-believe-earth-1024x683.jpg", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: [], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    { id: "человек", gender: "male", translation: {es: "persona", en: "person"},
        cases: {singular: {nominative: "человек", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "люди", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Bonfire_in_Kladow_17.04.2011_20-41-54.JPG", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: [], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    { id: "год", gender: "male", translation: {es: "año", en: "year"},
        cases: {singular: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "годы", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "https://cdn.prod.website-files.com/6643a82fc46ca462b5ef9921/6643a82fc46ca462b5efa2f9_56-Las-X-casas-mas-iconicas-de-la-CDMX-que-puedes-visitar-en-estas-vacaciones-de-semana-santa.webp", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: [], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    { id: "время", gender: "neutral", translation: {es: "tiempo", en: "time"},
        cases: {singular: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "времена", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Labrador_Retriever_%281210559%29.jpg/960px-Labrador_Retriever_%281210559%29.jpg", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: [], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    { id: "рука", gender: "female", translation: {es: "mano/brazo", en: "hand/arm"},
        cases: {singular: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "руки", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "https://www.recetasnestle.co.mx/sites/default/files/inline-images/tipos-de-manzana-royal-gala.jpg", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: [], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
];
