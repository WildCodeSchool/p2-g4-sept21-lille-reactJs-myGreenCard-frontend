import styled from 'styled-components';

const FoodProfileList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  text-align: center;
  margin-bottom: 70px;
  h2 {
    margin-bottom: 20px;
  }
  h3 {
    text-align: left;
    width: 90vw;
    margin-left: 20px;
  }
  img {
    width: 100px;
    height: 100px;
  }
  p {
    font-size: 13px;
  }
  li {
    width: 100px;
    height: 120px;
  }
  div {
    margin-top: 50px;
  }
`;

export default FoodProfileList;
