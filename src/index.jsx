import React from 'react'
import ReactDOM from 'react-dom/client'
import { Usuario, OtroUsuario } from './Start'
import { Button } from './Button'
import { Task } from './TaskCard'
import { Saludar } from './Saludar'
// import { func } from 'prop-types'
import { Gatos } from './Gatos'

const root = ReactDOM.createRoot(document.getElementById('root'))

const data = [
  {
    nombre: 'Juan 1',
    apellido: 'Martinez',
    Saldo: 1500,
    puntos: [98.5, 25, 45],
    direccion: {
      estado: 'Colima',
      municipio: 'Villa de Álvarez',
      Calle: 'Dr. Miguel Galindo',
      noint: '75',
      colonia: 'Centro',
      cp: '28000'
    }
  },
  {
    nombre: 'Angel 1',
    apellido: 'Torres',
    Saldo: 5000,
    puntos: [10.5, 105, 78.3],
    direccion: {
      estado: 'Colima',
      municipio: 'Villa de Álvare',
      Calle: 'Fasto Macias Andrade',
      noint: '1124',
      colonia: 'Senderos de bumgambilias',
      cp: '28975'
    }
  }
]

const handlerevent = function (e) {
  e.preventDefault()
  console.log(e.target.value)
}

root.render(
  <>
    <Gatos />

    <hr />

    <input
      placeholder='input con evento directo en la etiqueta'
      onClick={function (e) {
        console.log(e.target)
      }}
    />

    <input placeholder='input con evento en función externa' onChange={handlerevent} />

    <Saludar />
    <Task ready={false} />

    <Button text='Hola' name='Juan' />
    <Button text='Hola' name='Pedro' />
    <Button text='Hola' />

    <OtroUsuario data={data[0]} />
    <OtroUsuario data={data[1]} />

    <hr />

    <Usuario
      nombre='Juan'
      apellido='Martinez'
      Saldo={1500}
      puntos={[98.5, 25, 45]}
      direccion={{
        estado: 'Colima',
        municipio: 'Villa de Álvarez',
        Calle: 'Dr. Miguel Galindo',
        noint: '75',
        colonia: 'Centro',
        cp: '28000'
      }}
    />
    <Usuario
      nombre='Angel'
      apellido='Torres'
      Saldo={5000}
      puntos={[10.5, 105, 78.3]}
      direccion={{
        estado: 'Colima',
        municipio: 'Colima',
        Calle: 'Fasto Macias Andrade',
        noint: '1124',
        colonia: 'Senderos de bumgambilias',
        cp: '28975'
      }}
    />
  </>
)
