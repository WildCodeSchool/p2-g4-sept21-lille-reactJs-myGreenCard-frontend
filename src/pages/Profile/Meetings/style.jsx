import styled from 'styled-components';

const SMeetings = styled.article`
  button {
    background-image: url(${(props) => props.arrow});
    background-size: 20px 20px;
    background-position: right 14px center;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.secondBackground};
    margin: 10px 0px;
    h3 {
      text-align: left;
    }
  }
  ul {
    margin-top: 20px;
  }
  li {
    margin: 10px 0;
    list-style-type: disc;
    width: 90%;
    margin-left: 10px;
    div.promoter {
      display: flex;
      p {
        margin: 15px 0px;
      }
      .participant {
        margin-left: 10px;
      }
    }
  }
  .participants {
    justify-content: center;
    margin: 45px 0px;
    height: 30px;
    .participant {
      margin: 0 2px;
      img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        z-index: 2;
      }
    }
    .status {
      position: absolute;
      left: 330px;
      width: 100%;
      div.status.mode {
        top: -130px;
      }
      img {
      }
    }
    .badge {
      .mode {
        left: -10px;
        width: 25px;
        height: 25px;
        img {
          width: 15px;
          height: 15px;
          padding: 10px;
          object-fit: cover;
          background-color: #92b878;
        }
        &.dist {
          img {
            background-color: #df9f9f;
          }
        }
      }
    }
  }
`;
export default SMeetings;
