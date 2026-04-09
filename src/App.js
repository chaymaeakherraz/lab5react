import { useState } from 'react';
import './App.css';

import { UtilisateurContext } from './UtilisateurContext';
import FormulaireControle from './FormulaireControle';
import FormulaireNonControle from './FormulaireNonControle';
import TemperatureConvertor from './TemperatureConvertor';
import Profil from './Profil';

function App() {
  const [utilisateur, setUtilisateur] = useState({
    nom: 'Alice',
    connecte: true
  });

  return (
    <UtilisateurContext.Provider value={{ utilisateur, setUtilisateur }}>
      <div className="App">
        <h1>TP React débutant</h1>

        <div className="card">
          <h2>Formulaire Contrôlé</h2>
          <FormulaireControle />
        </div>

        <div className="card">
          <h2>Formulaire Non-Contrôlé</h2>
          <FormulaireNonControle />
        </div>

        <div className="card">
          <h2>Lifting State Up</h2>
          <TemperatureConvertor />
        </div>

        <div className="card">
          <h2>Profil Utilisateur</h2>
          <Profil />
        </div>
      </div>
    </UtilisateurContext.Provider>
  );
}

export default App;