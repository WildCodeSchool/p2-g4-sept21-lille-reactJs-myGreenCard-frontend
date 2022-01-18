import propTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import SRefillModal from './style';

export default function RefillModal({ toggleModal }) {
  const user = useSelector((state) => state.user);
  const Amount = Number(user.amount) + 10;
  const [newAmount, setNewAmound] = useState('');
  const amount = newAmount;
  const refillTen = () => {
    setNewAmound(amount + 10);

    axios
      .put(`${process.env.REACT_APP_API_URL}/user/${user.id}`, amount)
      .catch((e) => {
        console.log(e);
      });
    toast(`Votre compte est crédité de  ${amount}€ `);
  };

  const refillFifty = () => {
    setNewAmound(Amount + 50);
    toast(`Votre compte est crédité de  ${amount}€ `);
  };
  return (
    <SRefillModal>
      <div className="modalContent">
        <button type="button" className="close" onClick={toggleModal}>
          &#x2715;
        </button>
        <p>Veuillez selectionner un montant :</p>
        <button type="button" onClick={refillTen}>
          10€
        </button>
        <button type="button" onClick={refillFifty}>
          50€
        </button>
      </div>
      <ToastContainer />
    </SRefillModal>
  );
}
RefillModal.propTypes = {
  toggleModal: propTypes.func,
};
RefillModal.defaultProps = {
  toggleModal: () => {},
};
