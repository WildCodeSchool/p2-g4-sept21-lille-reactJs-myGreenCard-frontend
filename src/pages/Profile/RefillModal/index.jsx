import propTypes from 'prop-types';
import { api } from 'conf';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SRefillModal from './style';

export default function RefillModal({ toggleModal }) {
  const user = useSelector((state) => state.user);
  const userAmount = Number(user.amount);
  const refillTen = () => {
    const amount = { ...user, amount: userAmount + 10 };
    api.put(`http://localhost:5000/user/${user.id}`, amount).catch((e) => {
      console.log(e);
    });
    toast.success(`Votre compte est crédité de  ${userAmount}€ `);
  };
  const refillFifty = () => {
    const amount = { ...user, amount: userAmount + 50 };
    api.put(`http://localhost:5000/user/${user.id}`, amount).catch((e) => {
      console.log(e);
    });
    toast.success(`Votre compte est crédité de  ${userAmount}€ `);
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
