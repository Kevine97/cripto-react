import React from 'react'
import styled from "@emotion/styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Contenedor = styled.div`
    margin: 10px 0px 0px 0px;
    height: 16vh;
    background: hsla(0, 0%, 100%, 0.08);
    border-radius: 10px;
    padding: 10px 10px 0px 20px;
`;
const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Contenedor>
        <p>Actualizado{" "} <FontAwesomeIcon icon={faArrowRight}  /> {" "} <span>{LASTUPDATE}</span></p>
        <p>Precio{" "} <FontAwesomeIcon icon={faArrowRight}  /> {" "} <span>{PRICE}</span></p>
        <p>Varición en las ultimas 24hr{" "} <FontAwesomeIcon icon={faArrowRight}  /> {" "} <span>{CHANGEPCT24HOUR}</span></p>
    </Contenedor>
  )
}

export default Resultado