/**
 * Represents a similarity score and ranking for a given answer.
 */
export interface SimilarityResult {
  /**
   * The similarity score, ranging from 0 to 1.
   */
  score: number;
  /**
   * The ranking of the answer among all submitted answers.
   */
  ranking: number;
}

/**
 * Asynchronously retrieves the similarity score and ranking for a given answer.
 *
 * @param answer The answer to evaluate for similarity.
 * @param category The category of the similarity game (e.g., 'flags', 'actors', 'words').
 * @returns A promise that resolves to a SimilarityResult object containing the score and ranking.
 */
export async function getSimilarity(answer: string, category: string): Promise<SimilarityResult> {
  // Simulate an API call with a delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Mocked data based on the category and answer
  let score = 0.7 + Math.random() * 0.3; // Score between 0.7 and 1
  let ranking = Math.floor(Math.random() * 10) + 1; // Ranking between 1 and 10

    if (category === 'flags') {
        if (answer.toLowerCase().includes('flag')) {
            score = 0.9 + Math.random() * 0.1;
            ranking = Math.floor(Math.random() * 3) + 1;
        }
    } else if (category === 'actors') {
        if (answer.toLowerCase().includes('actor')) {
            score = 0.8 + Math.random() * 0.2;
            ranking = Math.floor(Math.random() * 5) + 1;
        }
    } else if (category === 'words') {
        if (answer.length > 3) {
            score = 0.6 + Math.random() * 0.4;
            ranking = Math.floor(Math.random() * 8) + 1;
        }
    }

  return {
    score: score,
    ranking: ranking,
  };
}

export interface Answer {
    answer: string;
}

export async function getAutocomplete(answer: string, category: string): Promise<Answer[]> {
    // Simulate an API call for autocomplete suggestions
    await new Promise((resolve) => setTimeout(resolve, 300));

    const suggestions: Answer[] = [];
    if (category === 'flags') {
        suggestions.push({ answer: `flag of ${answer}` });
        suggestions.push({ answer: `national flag ${answer}` });
    } else if (category === 'actors') {
        suggestions.push({ answer: `${answer} the actor` });
        suggestions.push({ answer: `famous actor ${answer}` });
    } else if (category === 'words') {
        suggestions.push({ answer: `${answer}ly` });
        suggestions.push({ answer: `${answer}ing` });
    }

    // Add some common suggestions
    suggestions.push({ answer: `${answer} application` });
    suggestions.push({ answer: `new ${answer}` });

    // Filter suggestions to only show ones that start with the current answer
    const filteredSuggestions = suggestions.filter(suggestion =>
        suggestion.answer.toLowerCase().startsWith(answer.toLowerCase())
    );

    return filteredSuggestions.slice(0, 5); // Limit to 5 suggestions
}
