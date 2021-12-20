import { useState } from 'react';
import MainButton from 'components/MainButton';
import SFoodModal from './style';

function FoodModal() {
  const [renderModal, setRenderModal] = useState(true);

  const hideTheModal = () => {
    setRenderModal(!renderModal);
  };

  return (
    <>
      {renderModal ? (
        <SFoodModal>
          <MainButton
            clickCallback={() => {
              hideTheModal();
            }}
            content="X"
          />
          <div>
            <h2>Choisir ce plat </h2>
          </div>
          <MainButton content="Valider" />
          <MainButton content="Changer" />
        </SFoodModal>
      ) : (
        ''
      )}
    </>
  );
}

export default FoodModal;
