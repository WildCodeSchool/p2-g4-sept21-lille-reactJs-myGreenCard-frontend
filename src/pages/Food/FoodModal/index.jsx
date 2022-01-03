import { useState } from 'react';
import PropTypes from 'prop-types';
import MainButton from 'components/MainButton';
import SFoodModal from './style';

function FoodModal({ menuElement }) {
  const [renderModal, setRenderModal] = useState(true);

  const hideTheModal = () => {
    setRenderModal(!renderModal);
  };
  return (
    <>
      {renderModal && (
        <SFoodModal>
          <section>
            <h2>Votre choix </h2>
            <article>
              <div className="imgContain">
                <img src={menuElement.picture} alt={`${menuElement.name}`} />
              </div>
              <p className="foodTitle">{menuElement.name}</p>
              <span>{menuElement.price}</span>
            </article>
          </section>
          <span>{menuElement.calories}</span>
          <p> Contient:</p>
          <section className="foodContent">
            {menuElement.content.map((oneContent) => (
              <p className="FoodContent">{oneContent},&#160; </p>
            ))}
          </section>
          <div className="buttonWrapper">
            <MainButton
              clickCallback={() => {
                hideTheModal();
              }}
              content="Changer"
            />
            <MainButton content="Valider" />
          </div>
        </SFoodModal>
      )}
    </>
  );
}

FoodModal.propTypes = {
  menuElement: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    calories: PropTypes.string,
    picture: PropTypes.string,
    content: PropTypes.arrayOf(PropTypes.string),
    allergies: PropTypes.arrayOf(PropTypes.string),
  }),
};

FoodModal.defaultProps = {
  menuElement: null,
};

export default FoodModal;
