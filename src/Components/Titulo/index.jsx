// import React from "react";

/*a biblioteca styled components permite a utilização de elementos CSS dentro do JS, evitando a necessidade de 
de ter um arquivo css de controle para os componentes, evitando confusão de className e outras propriedades css
durante o desenvolvimento do código.*/
import styled from "styled-components";

const Titulo = styled.h1`
  color: ${({ theme }) => theme.text};
  padding: 25px 0;
`;

// const Titulo = ({ children }) => {
//   return <h1 className="titulo">{children}</h1>;
// };
export default Titulo;
