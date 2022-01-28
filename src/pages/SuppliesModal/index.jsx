// import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import MainButton from 'components/MainButton';
import basket from 'assets/Img/SuppliesPictures/cart.png';
import SSuppliesModal from './style';

export default function SuppliesModal({
  supplyElement,
  cart,
  modal,
  setModal,
}) {
  const toggleModal = () => {
    setModal(!modal);
  };
  const user = useSelector((state) => state.user);

  const sendData = () => {
    const myOrder = cart
      .filter((item) => item > 0)
      .map((item) => {
        return {
          itemId: supplyElement[item].id,
          qtty: item,
        };
      });
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/supplies/${user.id}/cartSupplies`,
        myOrder
      )
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      {modal && (
        <SSuppliesModal>
          <h2>Mon panier</h2>
          <img className="basketIcon" src={basket} alt="basket icon" />
          <div className="container">
            {cart.map((item, index) => {
              return (
                item !== 0 && (
                  <div className="supply">
                    <img
                      className="cartPictures"
                      src={supplyElement[index].picture}
                      alt={supplyElement[index].name}
                    />
                    <div className="description">
                      <p>{supplyElement[index].name}</p>
                      <p>{item}</p>
                    </div>
                  </div>
                )
              );
            })}
          </div>
          <MainButton
            className="order"
            content="Passer la commande"
            clickCallback={() => {
              sendData();
            }}
          />
          <MainButton
            content="Retour"
            clickCallback={() => {
              toggleModal();
            }}
          />
        </SSuppliesModal>
      )}
    </>
  );
}

SuppliesModal.propTypes = {
  supplyElement: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
    picture: PropTypes.string,
  }),
  cart: PropTypes.arrayOf(PropTypes.number),
  modal: PropTypes.bool,
  setModal: PropTypes.func,
};

SuppliesModal.defaultProps = {
  supplyElement: null,
  cart: [],
  modal: false,
  setModal: () => {},
};
