import styled from 'styled-components';

const SMeetingCard = styled.article`
  width: 90vw;
  height: 20vh;
  margin: 15px;
  position: relative;
  border-radius: 10px;
  -webkit-box-shadow: 0px 7px 12px -3px #000000;
  box-shadow: 0px 7px 12px -3px #000000;
  background-color: ${(props) => props.theme.secondBackground};

  h2 {
    margin-bottom: 15px;
    text-align: center;
    font-weight: bold;
    padding: 5px;
    font-size: 1.2rem;
  }
  p {
    width: 60%;
    padding: 10px 5px;
  }

  img {
    object-fit: cover;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border: 4px #0da00d solid;
    position: absolute;
    top: 50px;
    right: 20px;
  }
`;
export default SMeetingCard;
