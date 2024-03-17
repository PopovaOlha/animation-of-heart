import React, { useState } from 'react';
import './styles.css';

const EmojiCopyButton = ({ emoji, handleCopyEmoji }) => {
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  const copyEmojiToClipboard = () => {
    navigator.clipboard.writeText(emoji).then(
      () => {
        setShowCopiedMessage(true);
        setTimeout(() => setShowCopiedMessage(false), 2000); // Скрыть сообщение через 2 секунды
        handleCopyEmoji(emoji); // Вызываем функцию родительского компонента для обновления состояния копирования
      },
      (error) => {
        console.error('Ошибка при копировании эмодзи:', error);
      }
    );
  };

  return (
    <div className="copy-text" onClick={copyEmojiToClipboard}>
      <span>Copy me {emoji}</span>
      {showCopiedMessage && <div className="copied-message">Copy✔️</div>}
    </div>
  );
};

export default EmojiCopyButton;
