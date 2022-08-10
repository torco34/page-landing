import styled from "styled-components";

const Containes = styled.div`
  position: absolute;
  height: 140vh;
  width: 100%;
  object-fit: contain;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.8);
  margin: 0;
  padding: 0;

  img {
    object-fit: cover;
    width: 100%;
    height: 140vh;
    position: relative;
    font-size: 2rem;
    opacity: 0.6;
  }
`;
const BoxText = styled.div`
  position: absolute;
  width: 100%;
  top: 2rem;
  font-size: 1.7rem;
  align-items: center;
  font-family: "Roboto", sans-serif;
  div {
    align-items: center;
  }

  img {
    max-width: 100%;
    position: relative;
    height: 50vh;
    top: 50px;
    border-radius: 5px;
  }
`;
const BoxDiv = styled.div`
  text-align: center;
  color: white;
  padding: 6px;
  border-radius: 5px;
  p {
    font-size: 1.3rem;
    font-family: "Open Sans", sans-serif;
  }
`;

export { Containes, BoxText, BoxDiv };
