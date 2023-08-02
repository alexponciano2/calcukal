import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from './/Home.module.css'
import foto from '../../pages/Home/dungeon-redondo.png'
import world from '../../pages/Home/world-redondo.png'


function Home() {
  return (
    <>
      <Header />
      <Container>
        <span className={styles.container}>
          <Link to={`/dungeons`} ><img src={foto} className={styles.dungeon}></img></Link>
          <Link to={`/worldmap`}><img src={world} className={styles.world}></img></Link>
        </span>

      </Container>
      <Footer />
    </>
  );
}

export default Home;