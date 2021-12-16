import styled from 'styled-components';

const SEazyCard = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  img {
    border-radius: 15px;
    width:90vw;
  }
  .anime {
    margin-top: 100px;
    width: 65px;
    height: 65px;
    border: 2px solid black;
    border-radius: 50%;
    overflow: hidden;
    
  }
  .nfc {
    bottom: -12px;
    position: relative;
    width: 65px;
    height: 70px;
    animation: phoneNfc 5s infinite;
    perspective: 1000px;
    
  }
  p {
    margin-top: 20px;
  }
  @keyframes phoneNfc {
    0% {
      
      transform: rotateX(0deg)rotateY(0deg);
      -webkit-transform: rotateX(0deg)rotateY(0deg);
     -moz-transform: rotateX(0deg)rotateY(0deg);
     -ms-transform: rotateX(0deg)rotateY(0deg);
     -o-transform: rotate(0deg)rotateY(0deg);

     
      
    }

    40% {
      
      transform: rotateX(40deg)rotateY(0deg);
      -webkit-transform: rotateX(40deg)rotateY(0deg);
     -moz-transform: rotateX(40deg)rotateY(0deg);
     -ms-transform: rotateX(40deg)rotateY(0deg);
     -o-transform: rotate(40deg)rotateY(0deg);

     
      
    }
    100% {
      
      transform: rotateX(0deg)rotateY(0deg);
      -webkit-transform: rotateX(0deg)rotateY(0deg);
     -moz-transform: rotateX(0deg)rotateY(0deg);
     -ms-transform: rotateX(0deg)rotateY(0deg);
     -o-transform: rotate(0deg)rotateY(0deg);

     
      
    }
    
  
    
`;

export default SEazyCard;
