/*
    Simple Fisher-Yates Shuffle.
    Reorder elements in a vocabulary array.
*/

export function shuffleVocabulary<T>(originalVocabularyArray: T[]): T[] {
    const shuffledArray = [...originalVocabularyArray]; // Copy of original. DO NOT change original array, return a new one.

    for(let i = shuffledArray.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i +1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    };

    return shuffledArray;
};