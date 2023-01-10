import { useState } from 'react';
import styles from "./App.module.css";
import "./global.css";
import { Header } from './components/Header';
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';


const posts = [
  {
  id: 1,
  author: {
    avatarUrl: 'https://github.com/luaanaapereiraa.png',
    name: 'Luana Pereira',
    role: 'Software Developer'
  },
  content: [
    { type: 'paragraph', content: 'Fala galera! :)'},
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz com as aulas da Rocketseat'},
    {type:'link', content: 'Luana.Pereira/avocatfeed'},
  ],
  publishedAt: new Date('2022-11-22 20:00:20'),
},
{
  id: 2,
  author: {
    avatarUrl: 'https://images.unsplash.com/photo-1618871736709-0843f4cfc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=40',
    name: 'Jane Doe',
    role: 'Designer'
  },
  content: [
    { type: 'paragraph', content: 'Oi, pessoal! :)'},
    { type: 'paragraph', content: 'Tenho um projeto novo.'},
    {type:'link', content: 'Luana.Pereira/avocatfeed'},
  ],
  publishedAt: new Date('2022-11-23 21:20:20'),
}
]

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {posts.map(post => {
          return (
            <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
          )
         })}
        </main>
      </div>

    </>
  );
}

export default App
