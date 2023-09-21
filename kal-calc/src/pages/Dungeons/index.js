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
    // Limpa o estado monstersInRange
    setMonstersInRange([""]);

    event.preventDefault();


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

  // Função para determinar a classe com base na diferença de níveis
  function getMonsterBackgroundClass(levelDifference) {
    if (levelDifference >= 8) {
      return styles.monstroVermelho;
    } else if (levelDifference >= 4 && levelDifference <= 7) {
      return styles.monstroLaranja;
    } else if (levelDifference >= -3 && levelDifference <= 3) {
      return styles.monstroAmarelo;
    } else if (levelDifference >= -5 && levelDifference <= -4) {
      return styles.monstroVerde;
    } else if (levelDifference >= -9 && levelDifference <= -6) {
      return styles.monstroAzul;
    } else if (levelDifference <= -10) {
      return styles.monstroCinza;
    } else {
      return '';
    }
  }

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
              <h2>AO MATAR UM MOB "RED" 8 LEVEIS MAIOR, VOCÊ PERDE 40% DA EXP TOTAL</h2>
              <h2>AO MATAR UM MOB "RED" 7 LEVEIS MAIOR, VOCÊ PERDE 20% DA EXP TOTAL</h2>
              <h2>ALÉM DISSO, MOBS VERMELHOS SÃO DIFÍCEIS DE ACERTAR </h2>
              <h2>SEMPRE BUSQUE UPAR EM MOBS LARANJA OU AMARELO!!! </h2>

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
                  {monstersInRange.map((JsonData) => {
                    const levelDifference = parseInt(JsonData.Level) - parseInt(noobLevel);
                    const backgroundClass = getMonsterBackgroundClass(levelDifference);

                    return (
                      <tr
                        key={JsonData.Monster}
                        className={backgroundClass}
                      >
                        <td className={backgroundClass}>{JsonData.Monster}</td>
                        <td className={backgroundClass}>{JsonData.Level}</td>
                        <td className={backgroundClass}>{JsonData.Área}</td>
                        <td className={backgroundClass}>{JsonData.HP}</td>
                        <td className={backgroundClass}>{JsonData.EXP}</td>
                      </tr>
                    );
                  })}
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