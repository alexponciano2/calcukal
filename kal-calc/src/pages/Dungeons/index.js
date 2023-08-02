import Container from "../../components/Container";
import Header from "../../components/Header";
import React, { useState } from "react";
import JsonData from '../../json/data.json'
import Footer from "../../components/Footer";
import styles from './Dungeons.module.css';
import { Link } from "react-router-dom";


function Dungeons() {
  const [noobLevel, setNoobLevel] = useState("");
  const [strongLevel, setStrongLevel] = useState("");
  const [monstersInRange, setMonstersInRange] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Limpa o estado monstersInRange
    setMonstersInRange([""]);

    // CONFERE SE O LVL DO NOOB É MENOR QUE O LVL DO FORTE
    if (parseInt(noobLevel) > parseInt(strongLevel)) {
      alert('O level do mais noob não pode ser maior que o do mais forte.');
      return;
    }

    //CALCULA SOMANDO 9 AO LVL DO NOOB E SUBTRAINDO 9 DO FORTE
    let noobLevelWithBonus = parseInt(noobLevel) + 9;
    let strongLevelWithPenalty = parseInt(strongLevel) - 9;

    //CALCULA QUAIS MONSTROS PODEM SER MORTOS
    if (noobLevelWithBonus > strongLevelWithPenalty) {
      const temp = noobLevelWithBonus;
      noobLevelWithBonus = strongLevelWithPenalty;
      strongLevelWithPenalty = temp;

      // alert(
      //   `VOCÊ PODE MATAR MONSTRO DE LEVEL ${noobLevelWithBonus} A ${strongLevelWithPenalty}.`
      // );
    }

    //CONFERE SE A DIFERENÇA DE LEVEIS É MAIOR QUE 18
    if (Math.abs(strongLevel - noobLevel) > 18) {
      alert('A diferença entre os níveis não pode ser maior que 18.');
      return;
    }

    //FILTRA OS MONSTROS DE ACORDO COM O RANGE DE LEVEL DOS PLAYERS
    const monstersInRange = JsonData.filter((JsonData) => {
      return (
        JsonData.Level >= noobLevelWithBonus &&
        JsonData.Level <= strongLevelWithPenalty
      );
    });

    setMonstersInRange(monstersInRange);
  };

  //RENDERIZA EM TELA
  return (
    <>
      <Header />
      <Container>
        <div>
          <form className={styles.formulario} onSubmit={handleSubmit}>
            <label>
              Level do mais noob:
              <input
                maxLength={3}
                className={styles.levelnoob}
                type="text"
                value={noobLevel}
                onChange={(event) => setNoobLevel(event.target.value)}
              />
            </label>
            <br />
            <label>
              Level do mais forte:
              <input
                maxLength={3}
                className={styles.levelforte}
                type="text"
                value={strongLevel}
                onChange={(event) => setStrongLevel(event.target.value)}
              />
            </label>
            <br />
            <button className={styles.buscarMonstros} type="submit">Buscar monstros</button>

            <Link to={`/`} className={styles.link}>Home</Link>
          </form>

          {monstersInRange.length > 0 && (
            <div className={styles.fontRes}>
              <h2 className={styles.monstroNaRange}>VOCÊ PODE MATAR OS MONSTROS ABAIXO:</h2>
              <table className={styles.totaltable}>
                <thead>
                  <tr>
                    <th>Monster</th>
                    <th>Lvl</th>
                    <th>Área</th>
                    <th>HP</th>
                    <th>XP</th>
                  </tr>
                </thead>
                <tbody>
                  {monstersInRange.map((JsonData) => (
                    <tr key={JsonData.Monster}>
                      <td>{JsonData.Monster}</td>
                      <td>{JsonData.Level}</td>
                      <td>{JsonData.Área}</td>
                      <td>{JsonData.HP}</td>
                      <td>{JsonData.EXP}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Dungeons;