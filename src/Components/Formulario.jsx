import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useSelectMoneda from "../Hooks/useSelectMoneda";
import { monedas } from "../Data/monedas";
import Error from "./Error";

const InputSubmit = styled.input`
  background-color: #18d26e;
  border: none !important;
  width: 80%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 15px;
  &:hover {
    background-color: #18d28a;
    cursor: pointer;
  }
`;
const Formulario = ({ setMonedas,setError, error }) => {
  const [criptoMoneda, setCriptoMoneda] = useState([]);
 

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=5&tsym=USD";
      const resp = await fetch(url);
      const resultado = await resp.json();
      const arrayCriptos = resultado.Data.map((cripto) => {
        const { Name, FullName } = cripto.CoinInfo;

        let objeto = {
          id: Name,
          nombre: FullName,
        };
        return objeto;
      });
      setCriptoMoneda(arrayCriptos);
    };

    consultarAPI();
  }, []);
  const [moneda, SelectMonedas] = useSelectMoneda(
    "Seleccione su moneda",
    monedas
  );
  const [monedaCripto, SelectMonedasCripto] = useSelectMoneda(
    "Seleccione tu criptomoneda",
    criptoMoneda
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([moneda, monedaCripto].includes("")) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }

    setMonedas({
      moneda,
      monedaCripto,
    });
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectMonedasCripto />
        <div style={{ textAlign: "center" }}>
          <InputSubmit type={"submit"} value="Cotizar" />
        </div>
      </form>
    </>
  );
};

export default Formulario;
