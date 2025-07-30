
type Translations = {
    es: string;
    en: string;
}

export type AnswerStatusContainerProps = {
    userAnswer: string;
    correctAnswer: string;
    showResult: boolean;
    translations: Translations;
};