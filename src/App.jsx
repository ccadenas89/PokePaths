import { useState, useCallback } from 'react';

function Toast({ message }) {
  return (
    <div className={`toast-notice${message ? ' visible' : ''}`}>
      {message}
    </div>
  );
}

export default function App() {
  const [toast, setToast] = useState('');

  const showToast = useCallback((text) => {
    setToast(text);
    setTimeout(() => setToast(''), 2400);
  }, []);

  return (
    <div className="page-shell">
      <div className="menu-card">
        <div className="brand">
          <h1>POKELIKE</h1>
          <p>Pokemon Roguelike</p>
        </div>

        <div className="menu-actions">
          <button
            className="action action-normal"
            onClick={() => showToast('Modo normal seleccionado.')}
          >
            NORMAL MODE
          </button>
        </div>
      </div>

      <Toast message={toast} />
    </div>
  );
}
