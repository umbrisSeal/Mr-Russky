
// Initial noun words, only for example.
// These nouns will be moved in the future to their correct category.

import type { Noun } from "./noun";

// А Б В Г Д Е Ё Ж З И Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Э Ю Я
// Non included: Ь (soft), Ъ (hard), Ы.

export const school: Noun[] = [

    /*
    ----------------------------------------------------------
                                А а
    ----------------------------------------------------------
    */
    /*
    ----------------------------------------------------------
                                Б б
    ----------------------------------------------------------
    */
    { id: "бумага", gender: "female", translation: {es: "palel", en: ""},
        cases: {singular: {nominative: "бумага", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Paperball_2.jpeg", imageAttributon: "Nikhilesh Haval", imageSource: ""},
        difficulty: 1, group: 'A', categories: ['school'], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    /*
    ----------------------------------------------------------
                                В в
    ----------------------------------------------------------
    */
    /*
    ----------------------------------------------------------
                                Г г
    ----------------------------------------------------------
    */
    /*
    ----------------------------------------------------------
                                Д д
    ----------------------------------------------------------
    */
    { id: "доска", gender: "female", translation: {es: "pizarra", en: ""},
        cases: {singular: {nominative: "доска", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/Pizarra_ies_parador_2.jpg", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: ['school'], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    
    { id: "дверь", gender: "female", translation: {es: "puerta", en: ""},
        cases: {singular: {nominative: "дверь", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Drywall_WITH_A_DOOR_%21.jpg", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: ['school'], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    { id: "домашнее задание", gender: "neutral", translation: {es: "tarea", en: ""},
        cases: {singular: {nominative: "домашнее задание", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a3/SAKURAKO_-_Homework_for_summer_vacation._%2820028533861%29.jpg", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: ['school'], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    /*
    ----------------------------------------------------------
                                Е е
    ----------------------------------------------------------
    */
    /*
    ----------------------------------------------------------
                                Ё ё
    ----------------------------------------------------------
    */
    /*
    ----------------------------------------------------------
                                Ж ж
    ----------------------------------------------------------
    */
    /*
    ----------------------------------------------------------
                                З з
    ----------------------------------------------------------
    */
    /*
    ----------------------------------------------------------
                                И и
    ----------------------------------------------------------
    */
    /*
    ----------------------------------------------------------
                                Й й
    ----------------------------------------------------------
    */
    /*
    ----------------------------------------------------------
                                К к
    ----------------------------------------------------------
    */
    { id: "книга", gender: "female", translation: {es: "libro", en: ""},
        cases: {singular: {nominative: "книга", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Latin_dictionary.jpg", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: ['school'], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    { id: "карандаш", gender: "male", translation: {es: "lapiz", en: ""},
        cases: {singular: {nominative: "карандаш", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Pencil_on_a_table.jpg", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: ['school'], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    { id: "класс", gender: "male", translation: {es: "clase (el grupo)", en: ""},
        cases: {singular: {nominative: "класс", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/82/Lagere_School_te_Putten._Klassefoto%2C_Bestanddeelnr_903-1035.jpg", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: ['school'], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    /*
    ----------------------------------------------------------
                                Л л
    ----------------------------------------------------------
    */
    /*
    ----------------------------------------------------------
                                М м
    ----------------------------------------------------------
    */
    /*
    ----------------------------------------------------------
                                Н н
    ----------------------------------------------------------
    */
    /*
    ----------------------------------------------------------
                                О о
    ----------------------------------------------------------
    */
    { id: "окно", gender: "neutral", translation: {es: "ventana", en: ""},
        cases: {singular: {nominative: "окно", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ef/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B5_%D0%9B%D1%83%D0%BA%D0%B8%2C_%D0%93%D0%B0%D0%B3%D0%B0%D1%80%D0%B8%D0%BD%D0%B0_86%2C_%D0%BE%D0%BA%D0%BD%D0%BE_%D0%B7%D0%B8%D0%BC%D0%BE%D0%B9.jpg", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: ['school'], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    /*
    ----------------------------------------------------------
                                П п
    ----------------------------------------------------------
    */
    { id: "перо", gender: "neutral", translation: {es: "pluma (estilografica)", en: ""},
        cases: {singular: {nominative: "перо", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Inoxcrom_Wall_Street._Nib._M.jpg", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: ['school'], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    /*
    ----------------------------------------------------------
                                Р р
    ----------------------------------------------------------
    */
    { id: "рюкзак", gender: "male", translation: {es: "mochila", en: ""},
        cases: {singular: {nominative: "рюкзак", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/Zaino_rosa.jpg", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: ['school'], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    { id: "ручка", gender: "female", translation: {es: "boligrafo", en: ""},
        cases: {singular: {nominative: "ручка", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e1/03-BICcristal2008-03-26.jpg", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: ['school'], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    /*
    ----------------------------------------------------------
                                С с
    ----------------------------------------------------------
    */
    { id: "стул", gender: "male", translation: {es: "silla", en: ""},
        cases: {singular: {nominative: "стул", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/86/Fauteuil_Riviera_Chaise_Bleue_Neptune_SBR.jpg", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: ['school'], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    { id: "стол", gender: "male", translation: {es: "mesa", en: ""},
        cases: {singular: {nominative: "стол", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Dinner_table_side_pine_wood_large_table.png", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: ['school'], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    /*
    ----------------------------------------------------------
                                Т т
    ----------------------------------------------------------
    */
    { id: "тетрадь", gender: "female", translation: {es: "cuaderno", en: ""},
        cases: {singular: {nominative: "тетрадь", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Spiralbinder%C3%BCcken_--_2022_--_9722.jpg", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: ['school'], notes: "Image might be too big.", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    /*
    ----------------------------------------------------------
                                У у
    ----------------------------------------------------------
    */
    { id: "учитель", gender: "male", translation: {es: "maestro", en: ""},
        cases: {singular: {nominative: "учитель", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "https://commons.wikimedia.org/wiki/File:Glen_Caruso,_A_Man_Who_Enjoys_Teaching.jpg", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: ['school'], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    { id: "учительница", gender: "female", translation: {es: "maestra", en: ""},
        cases: {singular: {nominative: "учительница", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e6/A_college_professor_teaching_in_a_university_classroom_full_of_students_in_Tennessee%2C_United_States_06.jpg", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: ['school'], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    { id: "ученик", gender: "male", translation: {es: "el estudiante", en: ""},
        cases: {singular: {nominative: "ученик", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Schoolboy_by_Edward_Simmons.jpg", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: ['school'], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    { id: "ученица", gender: "female", translation: {es: "la estudiante", en: ""},
        cases: {singular: {nominative: "ученица", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/28/Taiwanese_female_student_during_the_Japanese_colonial_era_01.jpg", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: ['school'], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    { id: "урок", gender: "male", translation: {es: "leccion", en: ""},
        cases: {singular: {nominative: "урок", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: ['school'], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    /*
    ----------------------------------------------------------
                                Ф ф
    ----------------------------------------------------------
    */
    /*
    ----------------------------------------------------------
                                Х х
    ----------------------------------------------------------
    */
    /*
    ----------------------------------------------------------
                                Ц ц
    ----------------------------------------------------------
    */
    /*
    ----------------------------------------------------------
                                Ч ч
    ----------------------------------------------------------
    */
    { id: "часы", gender: "neutral", translation: {es: "reloj", en: ""},
        cases: {singular: {nominative: "часы", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "часы", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "https://commons.wikimedia.org/wiki/File:2017-11-20_(126)_Clock_at_08-36_at_Bahnhof_Pottenbrunn,_Austria.jpg", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: ['school'], notes: "I understand that this word has no gender because its always in plural.", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    /*
    ----------------------------------------------------------
                            Ш ш
    ----------------------------------------------------------
    */
    /*
    ----------------------------------------------------------
                            Щ щ
    ----------------------------------------------------------
    */
    /*
    ----------------------------------------------------------
                            Э э
    ----------------------------------------------------------
    */
    /*
    ----------------------------------------------------------
                            Ю ю
    ----------------------------------------------------------
    */
    /*
    ----------------------------------------------------------
                            Я я
    ----------------------------------------------------------
    */
    
    

    /*
    { id: "", gender: "", translation: {es: "", en: ""},
        cases: {singular: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""},
            plural: {nominative: "", genitive: "", dative: "", accusative: "", instrumental: "", prepositional: ""}},
        image: {imageUrl: "", imageAttributon: "", imageSource: ""},
        difficulty: 1, group: 'A', categories: ['school'], notes: "", example: {ru: "", es: "", en: ""}, verified: false, completed: false,
    },
    */
];




// Previous vocabulary, only for development testing.
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
