import { useState } from 'react';
import PropTypes from 'prop-types';
import MainButton from 'components/MainButton';
import SFoodModal from './style';

function FoodModal({ menuElement, theme }) {
  const isDarkTheme = theme === 'dark';
  const [renderModal, setRenderModal] = useState(true);

  const toggleModal = () => {
    setRenderModal(!renderModal);
  };

  return (
    <>
      {renderModal && (
        <SFoodModal
          className={isDarkTheme ? 'darkThemeBackground' : 'yourChoice'}
        >
          <section>
            <h2>Votre choix </h2>
            <article className={isDarkTheme ? 'blackBackground' : 'foodChoice'}>
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
            {menuElement.content.map((oneContent, index) => {
              return index === menuElement.content.length - 1 ? (
                <p>{oneContent}</p>
              ) : (
                <p>{oneContent},&nbsp;</p>
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
  theme: PropTypes.string,
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
  theme: '',
  menuElement: null,
};

export default FoodModal;
