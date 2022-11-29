import { useState } from 'react';
import { Header } from './components/Header';
import styles from "./App.module.css";
import "./global.css";
import { Post } from './Post'
import { Sidebar } from './components/Sidebar';

function App() {


  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Luana Pereira"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde obcaecati dicta sapiente voluptas mollitia possimus nobis, veritatis laborum! Repellendus inventore error architecto accusantium blanditiis quia aliquid temporibus, excepturi non. Temporibus.
      "/>
          <Post
            author="Samuel Rocha"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde obcaecati dicta sapiente voluptas mollitia possimus nobis, veritatis laborum! Repellendus inventore error architecto accusantium blanditiis quia aliquid temporibus, excepturi non. Temporibus.
      "/>
        </main>
      </div>

    </>
  );
}

export default App
