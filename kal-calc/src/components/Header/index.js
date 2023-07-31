import styles from "./Header.module.css"

function Header() {
    return(
        <>
        <h1 className={styles.header}>EM QUAL DUNGEON EU JOGO?</h1>
        <h2 className={styles.h2}>CASO ESTEJA SOZINHO, COLOQUE SEU LEVEL NOS DOIS CAMPOS</h2>
        </>
    );
}

export default Header;