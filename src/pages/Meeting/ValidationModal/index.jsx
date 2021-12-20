import propTypes from 'prop-types';
import SValidationModal from './style';

export default function ValidationModal({ renderModal, setRenderModal }) {
  const makeTheModalAppear = () => {
    setRenderModal(!renderModal);
  };
  return (
    <SValidationModal>
      <div className="modalContent">
        <h2>Confirmation</h2>
        <p>Confirmez-vous la réservation de la salle de réunion n° ?</p>
        <div>
          <button type="button"> Oui</button>
          <button type="button" onClick={makeTheModalAppear}>
            Non
          </button>
        </div>
      </div>
    </SValidationModal>
  );
}

ValidationModal.propTypes = {
  renderModal: propTypes.bool,
  setRenderModal: propTypes.func,
};

ValidationModal.defaultProps = {
  renderModal: false,
  setRenderModal: () => {},
};
