import { useEffect, useState } from "react";

const API_CAT_FACT = "https://catfact.ninja/fact";
const IMG_PREFIX = 'http://cataas.com';

export function Gatos() {
  const [fact, setFact] = useState("Hola gato");
  const [img, setImg] = useState("");

  useEffect(() => {
    fetch(API_CAT_FACT) // llamo a la api
      .then((res) => res.json()) // recibo en la variable res la respuesta y luego se convierte a json con json()
      .catch((err) => console.error(err)) // Si da un error lo controla y lo manda a la consola
      .then((data) => {// Recibo la información en la variable data
        const { fact } = data; // desestructuración de la variable data y se asigna data.fac a la constante fact
        setFact(fact); // Se establece la vartiable fact global con el valor de la variable fact local
        const words = fact.split(" ").slice(0,1).join(" "); //obtenfo las primeras 3 palabras
        console.log(words);

        // fetch(`http://cataas.com/cat/says/${words}?size=:size&color=:color`)
        //   .then((result) => {result.json()})
        //   .catch()
        //   .then((datos) =>{
        //     const {img} = datos;
        //     setImg(img);console.log(img);
        //     console.log(img)  
        // })

      })
      .catch((err) => console.error(err));
  }, []);
  

  return (
    <>
      <h1>HOLA GATOS</h1>
      {fact && <p>{fact}</p>}
      {img && <img src={`${IMG_PREFIX}${img}`} alt={`alt for --> ${fact}`} />}
    </>
  );
}
