import propTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SGiftModal from './style';

export default function GiftModal({ toggleGiftModal }) {
  const user = useSelector((state) => state.user);
  const Amount = Number(user.amount);
  const [newAmount, setNewAmound] = useState();

  const giftTen = () => {
    if (Amount >= 10) {
      setNewAmound(Amount - 10);
      toast.success(`Vous avez donner  10€, votre solde est de ${Amount} `);
    } else {
      toast.error(`Don impossible crédit insufisant `);
    }
  };
  const giftFifty = () => {
    if (Amount >= 50) {
      setNewAmound(Amount - 50);
      toast.success(`Vous avez donner  50€, votre solde est de ${newAmount}`);
    } else {
      toast.error(`Don impossible crédit insufisant `);
    }
  };
  return (
    <SGiftModal>
      <div className="modalContent">
        <button type="button" className="close" onClick={toggleGiftModal}>
          &#x2715;
        </button>
        <p>Veuillez selectionner un montant :</p>
        <button type="button" onClick={giftTen}>
          10€
        </button>
        <button type="button" onClick={giftFifty}>
          50€
        </button>
      </div>
      <ToastContainer />
    </SGiftModal>
  );
}
GiftModal.propTypes = {
  toggleGiftModal: propTypes.func,
};
GiftModal.defaultProps = {
  toggleGiftModal: () => {},
};
