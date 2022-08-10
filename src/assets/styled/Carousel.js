import styled from "styled-components";

const BoxFather = styled.div`
  font-family: "Open Sans", sans-serif;
  position: relative;
  width: 100%;
  top: 45rem;
`;
const BoxCarousel = styled.div`
  position: relative;
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 2px 4px 4px 4px #5b5656;

  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    border-radius: 5px;
    box-sizing: border-box;
  }
`;

const CarouselText = styled.div`
  position: relative;
  width: 100%;
  top: 52px;
  padding: 1rem;
  background-color: white;
  border-radius: 5px;
  box-shadow: 2px 4px 4px 4px #5b5656;
  font-family: "Open Sans", sans-serif;
`;
const Boxh5 = styled.div`
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.8);
  width: 100%;
  border-radius: 5px;
`;
export { BoxCarousel, BoxFather, CarouselText, Boxh5 };
