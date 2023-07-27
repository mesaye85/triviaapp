import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GptApi = ({ onQuestionFetched }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const getQuestion = async () => {
      try {
        // Get question and options
        const questionResponse = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
          prompt: 'Create a trivia question about science with multiple choice answers.',
          max_tokens: 100,
        }, {
          headers: {
            'Authorization': `Bearer YOUR_OPEN_AI_KEY`,
          },
        });

        const generatedText = questionResponse.data.choices[0].text.trim();
        const [questionText, ...options] = generatedText.split('\n');
        const questionData = {
          text: questionText,
          options: options.map(option => option.slice(3)),  // remove the initial "A. " part
        };

        onQuestionFetched(questionData);

      } catch (err) {
        console.error(err);
        setError('Failed to fetch question from GPT-3 API.');
      }
    };

    getQuestion();
  }, [onQuestionFetched]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>Loading question...</div>;
};

export default GptApi;
