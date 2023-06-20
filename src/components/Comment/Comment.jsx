import React, { useEffect, useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment, dateTime }) {
  const [likeCount, setLikeCount] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState('');

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  const handleLikeComment = () => {
    setLikeCount(likeCount + 1);
  };

  useEffect(() => {
    const calculateTimeElapsed = () => {
      const currentDate = new Date();
      const commentDate = new Date(dateTime);
      const timeDifference = currentDate.getTime() - commentDate.getTime();
      const minutesElapsed = Math.floor(timeDifference / (1000 * 60));

      setTimeElapsed(`${minutesElapsed}m`);
    };

    calculateTimeElapsed();

    const interval = setInterval(() => {
      calculateTimeElapsed();
    }, 60000);

    return () => clearInterval(interval);
  }, [dateTime]);

  const commentDate = new Date(dateTime); 

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=40"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>John Doe</strong>
              <time title={dateTime} dateTime={dateTime}>
                Publicado em {commentDate.toLocaleTimeString()}
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Curtir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
