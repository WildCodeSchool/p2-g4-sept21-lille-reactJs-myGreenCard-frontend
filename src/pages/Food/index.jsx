import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import UserAvatar from 'components/UserAvatar';
import FoodSlider from './FoodSlider/index';
import SFood from './style';
import 'react-tabs/style/react-tabs.css';
import BurgerMenu from './BurgerMenu';

const data = require('./food.json');

export default function Food() {
  const dataLunch = data.food[0].lunch;
  const dataDrinks = data.food[0].drinks;
  const dataDesserts = data.food[0].desserts;

  return (
    <>
      <BurgerMenu />

      <SFood>
        <div className="userAvatar">
          <Link to="/profilPage">
            <UserAvatar />
          </Link>
        </div>

        <h1 className="menuOfDay"> Le menu du jour</h1>
        <section className="choiceMenu">
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
      </SFood>
    </>
  );
}
