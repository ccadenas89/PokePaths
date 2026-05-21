import { useState, useEffect, useCallback } from 'react';

const GENS = ['I', 'II'];

const MENU_ACTIONS = [
  { id: 'continue', label: 'Continue Run', className: 'action-primary', message: 'Continuar partida' },
  { id: 'normal',   label: 'Normal Mode',  className: 'action-normal',  message: 'Modo normal' },
  { id: 'nuzlocke', label: 'Nuzlocke',     className: 'action-nuzlocke', message: 'Modo Nuzlocke' },
  { id: 'battle',   label: 'Battle Tower', className: 'action-battle',   message: 'Torre de batalla' },
];

function Toast({ message }) {
  return (
    <div className={`toast-notice${message ? ' visible' : ''}`}>
      {message}
    </div>
  );
}

export default function App() {
  const [selectedGen, setSelectedGen] = useState('I');
  const [toast, setToast] = useState('');

  const showToast = useCallback((text) => {
    setToast(text);
    const timer = setTimeout(() => setToast(''), 2400);
    return () => clearTimeout(timer);
  }, []);

  const handleAction = (message) => {
    showToast(`${message} seleccionado. Gen ${selectedGen}.`);
  };

  const handleGenSelect = (gen) => {
    setSelectedGen(gen);
    showToast(`Gen ${gen} seleccionada.`);
  };

  return (
    <div className="page-shell">
      <div className="menu-card">
        <div className="brand">
          <h1>POKELIKE</h1>
          <p>Pokemon Roguelike</p>
          <span className="build">v1.6 · patch notes</span>
        </div>

        <div className="menu-actions">
          <button
            className="action action-primary"
            onClick={() => handleAction('Continuar partida')}
          >
            CONTINUE RUN
          </button>

          <div className="gen-select">
            <span>Gen:</span>
            {GENS.map((gen) => (
              <button
                key={gen}
                className={`gen-toggle${selectedGen === gen ? ' active' : ''}`}
                onClick={() => handleGenSelect(gen)}
              >
                {gen}
              </button>
            ))}
          </div>

          <button
            className="action action-normal"
            onClick={() => handleAction('Modo normal')}
          >
            NORMAL MODE
          </button>
          <button
            className="action action-nuzlocke"
            onClick={() => handleAction('Modo Nuzlocke')}
          >
            NUZLOCKE
          </button>
          <button
            className="action action-battle"
            onClick={() => handleAction('Torre de batalla')}
          >
            BATTLE TOWER
          </button>
        </div>
      </div>

      <Toast message={toast} />
    </div>
  );
}
