import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { api } from 'conf';
import { Link } from 'react-router-dom';
import UserAvatar from 'components/UserAvatar';
import FoodSlider from './FoodSlider/index';
import SFood from './style';
import 'react-tabs/style/react-tabs.css';
import BurgerMenu from './BurgerMenu';

export default function Food() {
  const [dataLunch, setDataLunch] = useState([]);
  const [dataDesserts, setDataDesserts] = useState([]);
  const [dataDrinks, setDataDrinks] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    api.get(`/food/lunch`).then(({ data }) => {
      setDataLunch(data);
      console.log(user);
    });
  }, [user]);

  useEffect(() => {
    api.get(`/food/desserts`).then(({ data }) => {
      setDataDesserts(data);
    });
  }, []);

  useEffect(() => {
    api.get(`/food/drinks`).then(({ data }) => {
      setDataDrinks(data);
    });
  }, []);

  // import user with useSelector in order to recover the :id
  // axios call of my user/:id/foodProfile page. recover the json
  // Make a filter which allows to rend my dishes if it does not contain what i dislike/can't eat
  // ex dish with eggs, if i don't want eggs i'll pass in true
  // dataOmelette = 0 cause there is egg in it. So rend me the dishes where eggFree=1
  // don't forget to put the json in the condition of the useEffect

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
