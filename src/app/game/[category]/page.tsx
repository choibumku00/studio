'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getSimilarity, getAutocomplete, Answer } from '@/services/similarity';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { List } from '@/components/ui/list';
import { ListItem } from '@/components/ui/list';

export default function GamePage() {
  const { category } = useParams<{ category: string }>();
  const [answer, setAnswer] = useState('');
  const [similarityResult, setSimilarityResult] = useState<{ score: number; ranking: number } | null>(null);
  const [answerHistory, setAnswerHistory] = useState<
    { answer: string; score: number; ranking: number }[]
  >([]);
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState<Answer[]>([]);

  const handleSubmit = async () => {
    const result = await getSimilarity(answer, category);
    setSimilarityResult(result);
    setAnswerHistory([...answerHistory, { answer, ...result }]);
    setAnswer(''); // Clear the input after submission
  };

  useEffect(() => {
    const fetchAutocompleteSuggestions = async () => {
      if (answer.length > 0) {
        const suggestions = await getAutocomplete(answer, category);
        setAutocompleteSuggestions(suggestions);
      } else {
        setAutocompleteSuggestions([]);
      }
    };

    fetchAutocompleteSuggestions();
  }, [answer, category]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission if inside a form
      handleSubmit();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Similarity Game - {category}</h1>

      {/* Answer Input */}
      <div className="mb-4">
        <Label htmlFor="answer">Your Answer:</Label>
        <div className="relative flex items-center">
          <Input
            type="text"
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full"
            autoComplete="off"
          />
          <Button onClick={handleSubmit} className="ml-2 bg-accent text-primary-foreground">
            Submit Answer
          </Button>
          {autocompleteSuggestions.length > 0 && (
            <ul className="absolute left-0 z-10 mt-1 w-full rounded-md border bg-popover shadow-md">
              {autocompleteSuggestions.map((suggestion) => (
                <li
                  key={suggestion.answer}
                  className="px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  onClick={() => {
                    setAnswer(suggestion.answer);
                    setAutocompleteSuggestions([]);
                  }}
                >
                  {suggestion.answer}
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>

      {/* Similarity Display */}
      {similarityResult && (
        <Card className="mb-4">
          <CardHeader>
            <h3 className="text-lg font-semibold">Similarity Result</h3>
          </CardHeader>
          <CardContent>
            <p>
              Similarity Score: <Badge>{similarityResult.score}</Badge>
            </p>
            <p>
              Ranking: <Badge>{similarityResult.ranking}</Badge>
            </p>
          </CardContent>
        </Card>
      )}

      {/* Answer History */}
      {answerHistory.length > 0 && (
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Answer History</h3>
          </CardHeader>
          <CardContent>
            <List>
              {answerHistory.map((item, index) => (
                <ListItem key={index}>
                  {item.answer} - Score: {item.score}, Ranking: {item.ranking}
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
