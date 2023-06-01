import Apps from "./App.css"
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from "./components/Footer";
import Container from "./components/Container"

const monsters = [
  { name: 'Devil Shadow of Devah', level: 98 },
  { name: 'Sealed Commanders', level: 100 },
  { name: 'Sealed Commanders', level: 101 },
  { name: 'Sealed Commanders', level: 102 },
  { name: 'Wounded Conjurator Zombie', level: 115 },
  { name: 'Elder Doggebi', level: 150 },
];


function App() {
  const [noobLevel, setNoobLevel] = useState(0);
  const [strongLevel, setStrongLevel] = useState(0);
  const [monstersInRange, setMonstersInRange] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (parseInt(noobLevel) > parseInt(strongLevel)) {
      alert('O level do mais noob não pode ser maior que o do mais forte.');
      return;
    }

    let noobLevelWithBonus = parseInt(noobLevel) + 9;
    let strongLevelWithPenalty = parseInt(strongLevel) - 9;

    if (noobLevelWithBonus > strongLevelWithPenalty) {
      const temp = noobLevelWithBonus;
      noobLevelWithBonus = strongLevelWithPenalty;
      strongLevelWithPenalty = temp;

      alert(
        `Você pode matar monstros de level ${noobLevelWithBonus} a ${strongLevelWithPenalty}.`
      );
    }

    if (Math.abs(strongLevel - noobLevel) > 18) {
      alert('A diferença entre os níveis não pode ser maior que 19.');
      return;
    }

    const monstersInRange = monsters.filter((monster) => {
      return (
        monster.level >= noobLevelWithBonus &&
        monster.level <= strongLevelWithPenalty
      );
    });

    setMonstersInRange(monstersInRange);
  };

  return (
    <>
    <Header/>
    <Container>
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Level do mais noob:
          <input
            maxLength={3}
            className='levelnoob'
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
            className='levelforte'
            type="text"
            value={strongLevel}
            onChange={(event) => setStrongLevel(event.target.value)}
          />
        </label>
        <br />
        <button className="buscarMonstros" type="submit">Buscar monstros</button>
      </form>

      {monstersInRange.length > 0 && (
        <div className="fontRes">
          <h2 className="monstroNaRange">Monstros na range:</h2>
          <ul>
            {monstersInRange.map((monster) => (
              <li key={monster.name}>
                {monster.name} - Level {monster.level}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </Container>
    <Footer/>
    </>
  );
}

export default App;