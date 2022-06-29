import React from "react";
import styled from "styled-components";

const Welcome = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  gap: 50px;

  h3 {
    color: ${({ theme }) => theme.colors.darkMain};
  }
`;

function Home() {
  return (
    <Welcome>
      <h1>Matilde Costa</h1>
      <h3>
        Junior <span>Full-Stack</span> Developer
      </h3>
    </Welcome>
  );
}

export default Home;
