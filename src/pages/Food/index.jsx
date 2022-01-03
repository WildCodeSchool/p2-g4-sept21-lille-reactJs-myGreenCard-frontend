import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FoodSlider from './FoodSlider/index';
import FoodModal from './FoodModal';
import SFood from './style';
import 'react-tabs/style/react-tabs.css';
import MainButton from '../../components/MainButton';

const data = require('./food.json');

export default function Food() {
  const [renderModal, setRenderModal] = useState(false);

  const dataLunch = data.food[0].lunch;
  const dataDrinks = data.food[0].drinks;
  const dataDesserts = data.food[0].desserts;

  const makeTheModalAppear = () => {
    setRenderModal(!renderModal);
  };

  return (
    <SFood>
      <h1 className="menuOfDay"> Le menu du jour</h1>
      <section className="choiceMenu">
        {renderModal && <FoodModal />}
        <Tabs>
          <TabList>
            <Tab>Plats</Tab>
            <Tab>Desserts</Tab>
            <Tab>Boissons</Tab>
          </TabList>

          <TabPanel>
            <FoodSlider typeOfFood={dataLunch} />
          </TabPanel>
          <TabPanel>
            <FoodSlider typeOfFood={dataDesserts} />
          </TabPanel>
          <TabPanel>
            <FoodSlider typeOfFood={dataDrinks} />
          </TabPanel>
        </Tabs>
      </section>

      <MainButton
        content="Réserver"
        clickCallback={() => {
          makeTheModalAppear();
        }}
      />
    </SFood>
  );
}
