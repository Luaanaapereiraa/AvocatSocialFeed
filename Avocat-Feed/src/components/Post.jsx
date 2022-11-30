import styles from './Post.module.css';
export function Post(props) {
    return (
        <>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <img className={styles.avatar} src="https://github.com/luaanaapereiraa.png" />
                        <div className={styles.authorInfo}>
                            <strong> Luana Pereira </strong>
                            <span> Software Developer </span>
                        </div>
                    </div>
                    <time title='22 de novembro de 2022' dateTime='2022-11-22 00:20:42'> Publicado há 1h </time>
                </header>
                <div className={styles.content}>
                    <p> Fala galera! :) </p>
                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz com as aulas da Rocketseat</p>
                    <p><a href='#'>Luana.Pereira/avocatfeed</a></p>

                </div>


                <form className={styles.commentForm}>
                    <strong> Deixe seu feedback </strong>
                    <textarea
                        placeholder='Deixe seu comentário'
                    />
                    <button type='submit'>Comentar</button>
                </form>
            </article>

        </>
    )
}
