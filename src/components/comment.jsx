import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }


    function handleLikeComment() {
setLikeCount(likeCount + 1);
    }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=40" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Samuel Rocha</strong>
                            <time title='22 de novembro de 2022' dateTime='2022-11-22 00:20:42'> Publicado há 1h </time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>

                    </header>
                    <p> {content} </p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Curtir <span>{likeCount}</span>

                    </button>
                </footer>
            </div>
        </div>

    )
} 