import './css/style.css'

// Estilos con hoja de estilos externa
export function Task ({ ready }) {
  return (
    <div className='card'>
      <h1>Mi tarea</h1>
      <span className={ready ? 'ready' : 'no-ready'}>
        {ready ? 'Terminada' : 'Pendiente'}
      </span>
    </div>
  )
}

// Estilos con json
/*
export function Task() {
  const card = {
    background: "black",
    color: "white",
    padding: "10px 10px 30px 10px",
    margin: "20px 0px 20px 0px",
    width: "500px",
  };

  return (
    <div style={card}>
      <h1>Mi tarea</h1>
      <span>Terminada</span>
    </div>
  );
}
*/
