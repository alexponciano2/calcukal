import styles from "./Header.module.css"

function Header() {
    return(
        <>
        <div className={styles.div}></div>
        <h1 className={styles.h1}>EM QUAL LOCAL EU JOGO?</h1>
        <h2 className={styles.h2}>SE FOR SOLO, SEU LEVEL VAI NOS DOIS CAMPOS</h2>
        </>
    );
}

export default Header;