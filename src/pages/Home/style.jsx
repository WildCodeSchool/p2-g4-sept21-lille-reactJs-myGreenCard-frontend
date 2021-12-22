import styled from 'styled-components';

const SHome = styled.section`

margin: 1.75rem;

article {
    height: 200px;
    width: 80vw;
    margin: 20px 0 10px 0px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 7px 12px -3px #000000;
    box-shadow: 0px 7px 12px -3px #000000;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .menu {
    height: 180px;
    font-weight: bold;
  }
  .meal {
    height: 30px;
    width: 80vw;
  }
  .mealList {
    font-weight: normal;
    display: flex;
    flex-flow: raw;
    height: 100px;
  }
  .description {
    list-style: none;
    width: 60vw;
    text-align: left;
  }
 
  .dishes {
    display: flex;
    flex-flow: row wrap;
    align-items: right;
    height: 80px;
    width: 50px;
    justify-content: space-between;
    img {
      border-radius: 45px;
      object-fit: cover;
      height: 35px;
      width: 20px;
    }
  
  }
    .dinnersReady{
    height: 30px;
    text-decoration: underline;
  }



  //

  .office {  
    display: flex;
    flex-wrap: wrap;
    font-weight: bold;
    height:150px;
  }
  .reservation {
    height: 50px;
    width: 40vw;
  }
  /*.officeReservation {
    font-weight: normal;
    display: flex;
    flex-flow: raw;
    height: 170px;
  }*/
  }
  .chooseYourOffice {
    font-weight: normal;
    height: 100px;
    width:30vw;

  }

  .officePicture {
    height: 150px;
    width: 45vw;

    img {
      height: 150px;
      width: 40vw;
      border-radius: 15px;
     
    }
  }

//
.meeting {
  display: flex;
    flex-wrap: wrap;
    font-weight: bold;
    height:150px;
}
.roomReservation {
  height: 50px;
    width: 40vw;
}
.meetingReservation {
  font-weight: normal;
    height: 100px;
    width:30vw;

}
  .meetingRoomPicture {
   
    height: 150px;
    width:40vw;
    
    img {
      height: 150px;
      width: 40vw;
      
    }
  }
//
.furnitures {
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
  height: 150px;
}
.commande {
  height: 50px;
  width: 40vw;
}
.shop {
  font-weight: normal;
    height: 100px;
    width:30vw;
}
  .furniture 
    height: 140px;
    width: 40vw;
    img {
      height: 140px;
      width: 40vw;
    }
  }
//
.lostcard {
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
  height: 150px;

}
.card {
  height: 40px;
  width: 40vw;
}
.unactivCard { 
   font-weight: normal;
    height: 110px;
    width:30vw;}

.pictureCard  {
    
    height: 80px;
    width: 40px;
    img {
      object-fit: contain;
     
    }


`;

export default SHome;
