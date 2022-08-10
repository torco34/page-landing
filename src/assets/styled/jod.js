import styled from "styled-components";
const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  object-fit: contain;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.9);
  margin: 0;
  padding: 0;
  video {
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: relative;
    font-size: 2rem;
    opacity: 0.6;
  }
`;
export { Container };
