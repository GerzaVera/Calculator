import React, { useState } from 'react';

const Sistema = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  const suma = () => {
    setResultado(parseFloat(num1) + parseFloat(num2));
  };

  const resta = () => {
    setResultado(parseFloat(num1) - parseFloat(num2));
  };

  const multiplicacion = () => {
    setResultado(parseFloat(num1) * parseFloat(num2));
  };

  const reiniciar = () => {
    setNum1('');
    setNum2('');
    setResultado('');
  };

  return (
    <>
      <div className="contenido">
        <div className="titulo">
          <h1>Mi Calculadora</h1>
        </div>
        <form id="formulario" action="">
          <input
            type="text"
            id="num1"
            placeholder="ingresa un numero"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <br />
          <input
            type="text"
            id="num2"
            placeholder="ingresa un numero"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
          <br />
          <input type="button" className="operacion" value="+" onClick={suma} />
          <input type="button" className="operacion" value="-" onClick={resta} />
          <input
            type="button"
            className="operacion"
            value="x"
            onClick={multiplicacion}
          />
          <input
            type="button"
            id="borrar"
            value="Borrar"
            onClick={reiniciar}
          />
          <br />
          <input
            type="text"
            id="resultado"
            placeholder="resultado"
            value={resultado}
            readOnly
          />
        </form>
      </div>
    </>
  );
};

export default Sistema;
