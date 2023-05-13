export function Usuario (params) {
  return (
    <>
      <h1>
        {params.nombre} {params.apellido}
      </h1>
      <p>Saldo: ${params.Saldo}</p>
      <p>Dirección:</p>
      <ul>
        <li>Estado: {params.direccion.estado}</li>
        <li>Municipio: {params.direccion.municipio}</li>
        <li>Calle: {params.direccion.Calle}</li>
        <li>Numero interior: {params.direccion.noint}</li>
        <li>Colonia: {params.direccion.colonia}</li>
        <li>Código Postal: {params.direccion.cp}</li>
      </ul>
      <p>Suma de puntos: {Sumar(params.puntos)}</p>
    </>
  )
}

export function OtroUsuario ({ data }) {
  return (
    <>
      <h1>
        {data.nombre} {data.apellido}
      </h1>
      <p>Saldo: ${data.Saldo}</p>
      <p>Dirección:</p>
      <ul>
        <li>Estado: {data.direccion.estado}</li>
        <li>Municipio: {data.direccion.municipio}</li>
        <li>Calle: {data.direccion.Calle}</li>
        <li>Numero interior: {data.direccion.noint}</li>
        <li>Colonia: {data.direccion.colonia}</li>
        <li>Código Postal: {data.direccion.cp}</li>
      </ul>
      <p>Suma de puntos: {Sumar(data.puntos)}</p>
    </>
  )
}

export function Sumar (params) {
  var suma = 0
  for (let i = 0; i < params.length; i++) {
    suma += params[i]
  }
  return suma
}
