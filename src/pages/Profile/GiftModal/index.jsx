import propTypes from 'prop-types';
import { api, cookies } from 'conf';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SGiftModal from './style';

export default function GiftModal({ toggleGiftModal }) {
  const user = useSelector((state) => state.user);
  const userAmount = Number(user.amount);
  const dispatch = useDispatch();
  const giftTen = () => {
    if (userAmount >= 10) {
      const amount = { ...user, amount: userAmount - 10 };
      api
        .put(`${process.env.REACT_APP_API_URL}/user/${user.id}`, amount)
        .then(({ data }) => {
          const { token, user: userData } = data;
          cookies.set('token', token);
          api.defaults.headers.authorization = `Bearer ${token}`;
          dispatch({ type: 'UPDATE', userData });
        })
        .catch((e) => {
          console.log(e);
        });
      toast.success(
        `Vous avez donné 10€, votre solde est de ${userAmount - 10}€ `
      );
    } else {
      toast.error(`Don impossible crédit insuffisant `);
    }
  };
  const giftFifty = () => {
    if (userAmount >= 50) {
      const amount = { ...user, amount: userAmount - 50 };
      api
        .put(`${process.env.REACT_APP_API_URL}/user/${user.id}`, amount)
        .then(({ data }) => {
          const { token, user: userData } = data;
          cookies.set('token', token);
          api.defaults.headers.authorization = `Bearer ${token}`;
          dispatch({ type: 'UPDATE', userData });
        })
        .catch((e) => {
          console.log(e);
        });
      toast.success(
        `Vous avez donné 50€, votre solde est de ${userAmount - 50}€ `
      );
    } else {
      toast.error(`Don impossible, solde insuffisant`);
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
    </SGiftModal>
  );
}
GiftModal.propTypes = {
  toggleGiftModal: propTypes.func,
};
GiftModal.defaultProps = {
  toggleGiftModal: () => {},
};
