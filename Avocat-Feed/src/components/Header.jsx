import styles from "./Header.module.css";
import avocatLogo from "../assets/Avocat-logo-sem-fundo.png"
export function Header() {
    return (
        <>
        <header className={styles.header}>
            <p>Avocat</p>
            <img src={avocatLogo}/>
            <p>Feed</p>
        </header>
        </>
    );
}