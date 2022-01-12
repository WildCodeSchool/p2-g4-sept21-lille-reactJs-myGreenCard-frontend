import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState } from 'react';
import axios from 'axios';
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

  useEffect(() => {
    axios.get('http://localhost:5000/food/lunch').then(({ data }) => {
      setDataLunch(data);
    });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/food/desserts').then(({ data }) => {
      setDataDesserts(data);
    });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/food/drinks').then(({ data }) => {
      setDataDrinks(data);
    });
  }, []);

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
