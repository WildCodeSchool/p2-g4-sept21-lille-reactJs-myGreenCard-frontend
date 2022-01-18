import styled from 'styled-components';

const FoodProfileList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 95%;

  .yourProfile {
    margin-top: 70px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-left: 60px;
  }
  h2 {
    text-align: left;
    font-size: 25px;
    font-weight: bold;
  }
  img {
    width: 100px;
  }
  p {
    font-size: 13px;
  }
  li {
    width: 100px;
    height: 120px;
  }
  .isFree {
    opacity: 0.5;
    transform: translateY(-3px);
    transition: 0.4s ease-out;
  }
`;

export default FoodProfileList;
