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
