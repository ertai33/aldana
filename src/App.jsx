
import React, { useState } from 'react';

function App() {
  const [cliente, setCliente] = useState('');
  const modelos = [
    'iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16 Plus', 'iPhone 16e', 'iPhone 16',
    'iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15 Plus', 'iPhone 15',
    'iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14 Plus', 'iPhone 14',
    'iPhone 13 Pro Max', 'iPhone 13 Pro', 'iPhone 13', 'iPhone 13 Mini',
    'iPhone 12 Pro Max', 'iPhone 12 Pro', 'iPhone 12', 'iPhone 12 Mini',
    'iPhone SE', 'iPhone 11 Pro Max', 'iPhone 11 Pro', 'iPhone 11',
    'iPhone XS Max', 'iPhone XS', 'iPhone XR', 'iPhone X',
    'iPhone 8 Plus', 'iPhone 8', 'iPhone 7 Plus', 'iPhone 7',
    'iPhone 6s Plus', 'iPhone 6s', 'iPhone 6 Plus', 'iPhone 6'
  ];
  const [filtro, setFiltro] = useState('');

  const modelosFiltrados = modelos.filter(m =>
    m.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>ACCESORIOS LA PLATA</h1>
      <h2>Gestión de pedidos</h2>
      <input
        type="text"
        placeholder="Nombre del cliente"
        value={cliente}
        onChange={e => setCliente(e.target.value)}
        style={{ padding: '10px', width: '100%', margin: '10px 0' }}
      />
      <input
        type="text"
        placeholder="Buscar modelo"
        value={filtro}
        onChange={e => setFiltro(e.target.value)}
        style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
      />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: '10px'
      }}>
        {modelosFiltrados.map(modelo => (
          <div key={modelo} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '10px',
            textAlign: 'center',
            background: '#f9f9f9',
            cursor: 'pointer'
          }}>
            {modelo}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
