import { useState } from 'react';
import PropTypes from 'prop-types';
import MainButton from 'components/MainButton';
import SFoodModal from './style';

function FoodModal({ menuElement }) {
  const [renderModal, setRenderModal] = useState(true);

  const toggleModal = () => {
    setRenderModal(!renderModal);
  };

  const menuElementSplit = menuElement.content.split(',');

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
              <span>{menuElement.price}€</span>
            </article>
          </section>
          <span>{menuElement.calories} kcal</span>
          <p> Contient:</p>
          <section className="foodContent">
            {menuElementSplit.map((oneContent, index) => {
              return index === menuElementSplit.length - 1 ? (
                <p className="ingredients">{oneContent} </p>
              ) : (
                <p className="ingredients">{oneContent},&nbsp; </p>
              );
            })}
          </section>
          <div className="buttonWrapper">
            <MainButton
              clickCallback={() => {
                toggleModal();
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
