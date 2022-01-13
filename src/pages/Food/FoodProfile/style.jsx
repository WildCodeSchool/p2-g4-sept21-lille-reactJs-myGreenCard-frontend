import styled from 'styled-components';

const FoodProfileList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 96%;

  .votreProfil {
    margin-top: 70px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
  button {
    width: 110px;
    height: 110px;
  }
  h2 {
    text-align: left;
    width: 90vw;
    margin-left: 20px;
    font-size: 25px;
    font-weight: bold;
  }
  .allergiePic {
    width: 100%;
    height: 100%;
  }
  .preferencePic {
    width: 100%;
    height: 100%;
  }
  p {
    font-size: 13px;
  }
  li {
    width: 100px;
    height: 120px;
  }
`;

export default FoodProfileList;
