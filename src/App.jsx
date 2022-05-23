import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import ImagenCripto from "./img/imagen-cripto.svg";
import Formulario from "./Components/Formulario";
import Resultado from "./Components/Resultado";
import Spiner from "./Components/Spiner";

const Heading = styled.h1`
  font-family: "Lato", sans-seferif;
  color: "#fff";
  text-align: center;
  font-weight: 700;
  margin: 10px;
  margin-bottom: 30px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #18d26e;
    display: block;
    margin: 10px auto 0 auto;
    border-radius: 5px;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 10px auto 0 auto;
  display: block;
  animation: rotation 2s infinite linear;
  @media (max-width: 600px) {
    margin: 40px auto 0 auto;
  }
`;

const Contenedor = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 80%;
  background: hsla(0, 0%, 100%, 0.08);
  border-radius: 10px;

  @media (min-width: 800px) {
    height: 80vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    colum-gap: 2rem;
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    align-items: center;
  }

  @media (max-width: 600px) {
    height: 90vh;
    padding: 10px 0 0 0;
  }
`;

function App() {
  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      setResultado({});
      const consultarAPI = async () => {
        setCargando(true);
        const { monedaCripto, moneda } = monedas;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedaCripto}&tsyms=${moneda}`;
        const resp = await fetch(url);
        const resultado = await resp.json();
        setTimeout(() => {
          setResultado(resultado.DISPLAY[monedaCripto][moneda]);
          setCargando(false);
        }, 2000);
      };

      consultarAPI();
    }
  }, [monedas]);

  useEffect(() => {
    if (error) {
      setResultado({});
    }
  }, [error]);

  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt="Imagen cripto" />
      <div style={{ padding: "0 10px" }}>
        <Heading>Cotizador de criptomonedas</Heading>
        <Formulario setMonedas={setMonedas} setError={setError} error={error} />
        {cargando && <Spiner />}
        {resultado.PRICE && <Resultado resultado={resultado} />}
      </div>
    </Contenedor>
  );
}

export default App;
