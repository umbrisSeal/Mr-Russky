/*
    This loader filters the vocabulary of all the app and presents the specific vocabulary for a particular lesson.
    Also, the result (or the filter) should be added as a cookie in the app to allow user to repeat this lesson.

    This loader will need a LOT of refactoring.
*/

import { redirect, type LoaderFunctionArgs } from "react-router";
import type { Noun } from "../../data/words/inflected/nouns/noun";
import { schoolNouns } from "../../data/words/inflected/nouns/school";
import { shuffleVocabulary } from "../../utils/functions/shuffleVocabulary";
import { useLessonVocabularyStore } from "../../hooks/lessonVocabulary";
import { useLessonResultsStore } from "../../hooks/lessonResults";


export async function lessonLoader({request} : LoaderFunctionArgs ) : Promise<Noun[]> {
    const lessonVocabularyStore = useLessonVocabularyStore.getState();
    const lessonResultsStore = useLessonResultsStore.getState();
    const url = new URL(request.url);
    
    // Temporal params:
    const studyAll = url.searchParams.get("studyAll") === '1';
    const repeatLesson = url.searchParams.get("repeat") === '1';
    const repeatOnlyErrors = url.searchParams.get("errors") === '1';

    const appVocabulary : Noun[] = schoolNouns;
    let lessonVocabulary : Noun[] = [];

    // Temporal way to filter the required vocabulary.
    if(studyAll) {
        // Study all vocabulary.
        lessonVocabulary = shuffleVocabulary(appVocabulary);
    } else {
        // Only study 10 random words.
        lessonVocabulary = shuffleVocabulary(appVocabulary.slice(0, 10));
    }

    // In case of user repeating the same lesson.
    if(repeatLesson) lessonVocabulary = shuffleVocabulary(lessonVocabularyStore.lessonVocabulary);
    if(repeatOnlyErrors) lessonVocabulary = shuffleVocabulary(lessonResultsStore.wrongAnswers);


    lessonVocabularyStore.setLessonVocabulary([...lessonVocabulary]);
    
    if(repeatLesson) {
        // Keep track of previous results. (To meassure improvement)
        lessonResultsStore.resetResults();
    } else {
        // Reset all results, start from fresh.
        lessonResultsStore.resetAllResults();
    }

    if(lessonVocabulary.length === 0) throw redirect('/error'); // Vocabulary to study was empty.

    return lessonVocabulary;
};