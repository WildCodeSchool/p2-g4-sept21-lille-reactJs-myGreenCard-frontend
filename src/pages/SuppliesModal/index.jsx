import { useState } from 'react';
import PropTypes from 'prop-types';
import MainButton from 'components/MainButton';
import cart from 'assets/Img/SuppliesPictures/cart.png';
import SSuppliesModal from './style';

export default function SuppliesModal({ supplyElement }) {
  const [modal, setModal] = useState(true);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      {modal && (
        <SSuppliesModal>
          <h2>Mon panier</h2>
          <img className="cartIcon" src={cart} alt="cart icon" />
          <div>
            <p>{supplyElement.name}</p>
            <p>{supplyElement.quantity}</p>
            <img src={supplyElement.picture} alt="" />
          </div>
          <MainButton
            className="order"
            content="Passer la commande"
            clickCallback={() => {
              toggleModal();
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
};

SuppliesModal.defaultProps = {
  supplyElement: null,
};
