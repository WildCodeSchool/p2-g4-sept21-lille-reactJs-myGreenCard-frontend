import styled from 'styled-components';

const FoodProfileList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
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
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
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
  .validate {
    display: flex;
    justify-content: center;
    width: 100vw;
    button {
      margin-bottom: 20px;
    }
  }
`;

export default FoodProfileList;
