import propTypes from 'prop-types';
import { api } from 'conf';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SGiftModal from './style';

export default function GiftModal({ toggleGiftModal }) {
  const user = useSelector((state) => state.user);
  const userAmount = Number(user.amount);

  const giftTen = () => {
    if (userAmount >= 10) {
      const amount = { ...user, amount: userAmount - 10 };
      api.put(`http://localhost:5000/user/${user.id}`, amount).catch((e) => {
        console.log(e);
      });
      toast.success(
        `Vous avez donner  10€, votre solde est de ${userAmount}€ `
      );
    } else {
      toast.error(`Don impossible crédit insufisant `);
    }
  };
  const giftFifty = () => {
    if (userAmount >= 50) {
      const amount = { ...user, amount: userAmount - 50 };
      api.put(`http://localhost:5000/user/${user.id}`, amount).catch((e) => {
        console.log(e);
      });
      toast.success(
        `Vous avez donner  50€, votre solde est de ${userAmount}€ `
      );
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
