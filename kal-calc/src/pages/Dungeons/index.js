import React, { useState } from "react";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import JsonData from '../../json/data.json';
import styles from './Dungeons.module.css';
import { Link } from "react-router-dom";

// Centraliza constantes para facilitar a manutenção
const LEVEL_DIFFERENCE_LIMIT = 18;
const LEVEL_BONUS = 9;

// Função para determinar a classe com base na diferença de níveis
// Usando um objeto para mapear as classes, o que é mais limpo e escalável
const getMonsterBackgroundClass = (levelDifference, style) => {
  if (levelDifference >= 7) return style.monstroVermelho;
  if (levelDifference >= 4) return style.monstroLaranja;
  if (levelDifference >= -3) return style.monstroAmarelo;
  if (levelDifference >= -5) return style.monstroVerde;
  if (levelDifference >= -9) return style.monstroAzul;
  if (levelDifference <= -10) return style.monstroCinza;
  return '';
};

// Componente principal
function Dungeons() {
  const [noobLevel, setNoobLevel] = useState("");
  const [strongLevel, setStrongLevel] = useState("");
  const [monstersInRange, setMonstersInRange] = useState([]);

  // Adiciona estado para exibir mensagens de erro
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Limpa erros e a lista de monstros a cada submissão
    setError(null);
    setMonstersInRange([]);

    const noob = parseInt(noobLevel, 10);
    const strong = parseInt(strongLevel, 10);

    // Validação de entrada
    if (isNaN(noob) || isNaN(strong) || noob <= 0 || strong <= 0) {
      setError("Por favor, insira níveis válidos (números positivos).");
      return;
    }

    if (noob > strong) {
      setError("O nível do mais noob não pode ser maior que o do mais forte.");
      return;
    }

    if (strong - noob > LEVEL_DIFFERENCE_LIMIT) {
      setError(`A diferença entre os níveis não pode ser maior que ${LEVEL_DIFFERENCE_LIMIT}.`);
      return;
    }

    const minMonsterLevel = noob + LEVEL_BONUS;
    const maxMonsterLevel = strong - LEVEL_BONUS;

    // Garante que o nível mínimo não seja maior que o máximo
    const adjustedMinLevel = Math.min(minMonsterLevel, maxMonsterLevel);
    const adjustedMaxLevel = Math.max(minMonsterLevel, maxMonsterLevel);

    // Filtra os monstros uma única vez
    const filteredMonsters = JsonData.filter((monster) => {
      const monsterLevel = monster.Level;
      return monsterLevel >= adjustedMinLevel && monsterLevel <= adjustedMaxLevel;
    });

    setMonstersInRange(filteredMonsters);
  };

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
                type="number"
                min="1"
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
                type="number"
                min="1"
                value={strongLevel}
                onChange={(event) => setStrongLevel(event.target.value)}
              />
            </label>
            <br />
            <button className={styles.buscarMonstros} type="submit">Buscar monstros</button>
            <Link to="/" className={styles.link}>Home</Link>
          </form>

          {/* Exibe mensagem de erro se houver */}
          {error && <p className={styles.error}>{error}</p>}

          {/* Exibe os resultados apenas se houver monstros na lista */}
          {monstersInRange.length > 0 && (
            <div className={styles.fontRes}>
              <h2>AO MATAR UM MOB "VERMELHO" 8 LEVEIS MAIOR, VOCÊ PERDE 40% DA EXP TOTAL</h2>
              <h2>AO MATAR UM MOB "VERMELHO" 7 LEVEIS MAIOR, VOCÊ PERDE 20% DA EXP TOTAL</h2>
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
                  {monstersInRange.map((monster) => {
                    const levelDifference = parseInt(monster.Level, 10) - parseInt(noobLevel, 10);
                    const backgroundClass = getMonsterBackgroundClass(levelDifference, styles);

                    return (
                      <tr
                        key={monster.Monster}
                        // Aplica a classe de cor apenas se ela existir
                        className={backgroundClass}
                      >
                        {/* Você pode remover as classes dos <td>, já que a cor de fundo deve ser herdada da <tr> */}
                        <td>{monster.Monster}</td>
                        <td>{monster.Level}</td>
                        <td>{monster.Área}</td>
                        <td>{monster.HP}</td>
                        <td>{monster.EXP}</td>
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