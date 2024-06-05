import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('type markdown here');

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <textarea 
        value={markdown} 
        onChange={handleInputChange} 
      />
      <ReactMarkdown children={markdown} />
    </div>
  );
}
function reverseSentence(sentence) {
  let words = sentence.split(' ');
  let reversedWords = words.reverse();
  let reversedSentence = reversedWords.join(' ');
  let capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
  return capitalizedSentence;
}
const data = [
    [
        { name: 'John', age: 25 },
        function extractNames(data) {
            let names = data.map(innerArray => 
                innerArray.map(item => item.name)
            );
            names = [].concat(...names);
            return names;
        },
        { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ]; 