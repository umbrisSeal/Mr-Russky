
// Base type for all words (inflected and invariable).

export type Translation = {
    es: string;     // Translation in spanish.
    en: string;     // Translation in english.
};

export type Example = {
    ru: string;     // Sentence in russian using the id word.
    es: string;     // Sentence in spanish using the spanish translation.
    en: string;     // Sentence in english using the english translation.
};

export type Image = {
    imageUrl: string;           // URL of the image shown. For now, only from Wiki Commons.
    imageAttributon: string;    // URL or information about author's attribution.
    imageSource: string;        // Name of the source of the image. (Author, website, url, etc.)
};

export type Groups = 'A' | 'B' | 'C';


export type BaseWord = {
    id: string;                 // Unique ID word. Word in russian.
    translation: Translation;   // Translations in spanish and english.
    image: Image;               // URL of the image shown. For now, only from Wiki Commons.
    group: Groups;              // A string value indicating its group.
    categories: string[];       // An array of strings including the name of the ways to categorize a word.
    difficulty: number;         // Int number from 1 to 10. Used in future for difficulty level.
    example: Example;           // Example list using the word in russian, spanish and english sentences.
    verified: boolean;          // Indicates if translations are verified. Words not verified will not be shown in app lessons.
    notes: string;              // Optional notes, in english for this word.
    // transliteration          // For future phonetic sound.
};
