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

  h2 {
    text-align: left;
    width: 90vw;
    margin-left: 20px;
    font-size: 25px;
    font-weight: bold;
  }
  img {
    width: 120px;
    height: 120px;
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
