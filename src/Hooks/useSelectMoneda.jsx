import { useState } from "react";
import styled from "@emotion/styled";

const Labels = styled.label`
  color: "#fff";
  display: block;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 5px;
  outline: none;
  box-shadow: none;
  background: transparent;
  color: #fff;
`;

const useSelectMoneda = (Label, monedas) => {
  const [monedasState, setMonedasState] = useState("");
  const selectMonedas = () => (
    <>
      <Labels>{Label}</Labels>
      <div className="sel sel--superman">
        <Select
          value={monedasState}
          onChange={(e) => setMonedasState(e.target.value)}
        >
          <option value="">{Label}</option>
          {monedas.map((e) => (
            <option key={e.id} value={e.id}>
              {e.nombre}
            </option>
          ))}
        </Select>
      </div>
    </>
  );
  return [monedasState, selectMonedas];
};

export default useSelectMoneda;
