import styled from "styled-components";

const Containes = styled.div`
  position: absolute;
  height: 120vh;
  width: 100%;
  object-fit: contain;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.7);
  margin: 0;
  padding: 0;

  img {
    object-fit: cover;
    width: 100%;
    height: 120vh;
    position: relative;
    font-size: 2rem;
    opacity: 0.6;
  }
`;
const BoxText = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 2rem;

  div {
    margin-top: 1rem;
    padding: 6px;
  }

  img {
    max-width: 100%;
    position: relative;
    height: 50vh;
    border-radius: 5px;
  }
  p {
    position: relative;
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    margin-top: 2rem;
  }
  h2 {
    font-size: 1.7rem;
    position: relative;
    color: white;
    margin-top: 2rem;
    font-family: "Roboto", sans-serif;
  }
`;
const BoxDiv = styled.div`
  /* border: 2px solid white; */
  text-align: center;
  padding: 6px;
  border-radius: 5px;
  /* border: solid 2px purple; */
`;

export { Containes, BoxText, BoxDiv };
