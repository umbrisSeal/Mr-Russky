/*
    This loader filters the vocabulary of all the app and presents the specific vocabulary for a particular lesson.
    Also, the result (or the filter) should be added as a cookie in the app to allow user to repeat this lesson.
*/

import { useNavigate, type LoaderFunctionArgs } from "react-router";
import type { Noun } from "../../data/words/inflected/nouns/noun";
import { exampleNouns } from "../../data/words/inflected/nouns/initialNouns";
import { shuffleVocabulary } from "../../utils/functions/shuffleVocabulary";


export async function lessonLoader({request} : LoaderFunctionArgs ) : Promise<Noun[]> {
    const navigateTo = useNavigate();
    const url = new URL(request.url);
    
    // Temporal params:
    const studyAll = url.searchParams.get("studyAll");

    if(!studyAll) navigateTo('/error'); // Wrong params recieved.

    const appVocabulary : Noun[] = exampleNouns;
    let vocabularyToStudy = [];

    if(studyAll === '1') {
        // Study all vocabulary.
        vocabularyToStudy = shuffleVocabulary(appVocabulary);
    } else {
        // Only study 10 random words.
        vocabularyToStudy = shuffleVocabulary(appVocabulary.slice(0, 10));
    }

    return vocabularyToStudy;
};