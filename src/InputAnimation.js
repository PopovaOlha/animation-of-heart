import React, { useState } from 'react';
import EmojiCopyButton from './EmojiCopyButton'; // Импортируем EmojiCopyButton из соответствующего файла

const InputAnimation = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [showEquals, setShowEquals] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const handleInput1Change = (e) => {
    setInput1(e.target.value);
    updateEqualsState(e.target.value, input2);
  };

  const handleInput2Change = (e) => {
    setInput2(e.target.value);
    updateEqualsState(input1, e.target.value);
  };

  const updateEqualsState = (value1, value2) => {
    if (value1 && value2) {
      setShowEquals(true);
    } else {
      setShowEquals(false);
    }
  };

  const handleCopyEmoji = (emoji) => {
    navigator.clipboard.writeText(emoji).then(() => {
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 1000); // Отключить сообщение через 1 секунду
    });
  };

  return (
    <div className="input-container">
      <div className="input-wrapper">
        <EmojiCopyButton emoji="🌜" handleCopyEmoji={handleCopyEmoji} />
        <input
          type="text"
          placeholder=""
          value={input1}
          onChange={handleInput1Change}
        />
      </div>
      <span>➕</span>
      <div className="input-wrapper">
        <EmojiCopyButton emoji="🌞" handleCopyEmoji={handleCopyEmoji} />
        <input
          type="text"
          placeholder=""
          value={input2}
          onChange={handleInput2Change}
        />
      </div>
      {showEquals && <span>=</span>}
      {showEquals && (
        <div className="heart-animation"></div>
      )}
      {copiedMessage && <div className="copied-message">Copy✔️</div>}
    </div>
  );
};

export default InputAnimation;

