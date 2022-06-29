import React from "react";
import styled from "styled-components";

const Bio = styled.section`
  height: 90vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    color: ${({ theme }) => theme.colors.main};
  }

  p {
    width: 50vw;
  }
`;

function About() {
  return (
    <Bio>
      <h3>Who is Matilde?</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum maxime
        nisi optio tempore unde! Consequuntur commodi saepe tempore
        exercitationem possimus ullam! Molestiae suscipit quidem quam pariatur
        autem tenetur quas commodi.
      </p>
    </Bio>
  );
}

export default About;
