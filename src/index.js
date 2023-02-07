import React from "react";
import ReactDOM from "react-dom/client";
import { Usuario, OtroUsuario } from "./Start";

const root = ReactDOM.createRoot(document.getElementById("root"));

var data = [
  {
    nombre: "Juan",
    apellido: "Martinez",
    Saldo: 1500,
    puntos: [98.5, 25, 45],
    direccion: {
      estado: "Colima",
      municipio: "Villa de Álvarez",
      Calle: "Dr. Miguel Galindo",
      noint: "75",
      colonia: "Centro",
      cp: "28000",
    },
  },
  {
    nombre: "Angel",
    apellido: "Torres",
    Saldo: 5000,
    puntos: [10.5, 105, 78.3],
    direccion: {
      estado: "Colima",
      municipio: "Villa de Álvare",
      Calle: "Fasto Macias Andrade",
      noint: "1124",
      colonia: "Senderos de bumgambilias",
      cp: "28975",
    },
  },
];

root.render(
  <>
    <OtroUsuario data={data[0]} />
    <OtroUsuario data={data[1]} />

    <br></br>
    <p>------------------------------------------------</p>
    <br></br>

    <Usuario
      nombre="Juan"
      apellido="Martinez"
      Saldo={1500}
      puntos={[98.5, 25, 45]}
      direccion={{
        estado: "Colima",
        municipio: "Villa de Álvarez",
        Calle: "Dr. Miguel Galindo",
        noint: "75",
        colonia: "Centro",
        cp: "28000",
      }}
    />
    <Usuario
      nombre="Angel"
      apellido="Torres"
      Saldo={5000}
      puntos={[10.5, 105, 78.3]}
      direccion={{
        estado: "Colima",
        municipio: "Colima",
        Calle: "Fasto Macias Andrade",
        noint: "1124",
        colonia: "Senderos de bumgambilias",
        cp: "28975",
      }}
    />
  </>
);
