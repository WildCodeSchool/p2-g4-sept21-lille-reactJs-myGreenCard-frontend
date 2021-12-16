import MainButton from 'components/MainButton';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FoodSlider from './FoodSlider/index';
import SFood from './style';
import 'react-tabs/style/react-tabs.css';

export default function Food() {
  const plats = [
    {
      name: 'Tartiflette',
      price: '4€50',
      img: 'https://files.meilleurduchef.com/mdc/photo/recette/tartiflette/tartiflette-640.jpg',
    },
    {
      name: 'Tartiflette',
      price: '4€50',
      img: 'https://files.meilleurduchef.com/mdc/photo/recette/tartiflette/tartiflette-640.jpg',
    },
    {
      name: 'Tartiflette',
      price: '4€50',
      img: 'https://files.meilleurduchef.com/mdc/photo/recette/tartiflette/tartiflette-640.jpg',
    },
    {
      name: 'Tartiflette',
      price: '4€50',
      img: 'https://files.meilleurduchef.com/mdc/photo/recette/tartiflette/tartiflette-640.jpg',
    },
    {
      name: 'Tartiflette',
      price: '4€50',
      img: 'https://files.meilleurduchef.com/mdc/photo/recette/tartiflette/tartiflette-640.jpg',
    },
  ];

  const desserts = [
    {
      name: 'Tiramisu',
      price: '5€',
      img: 'https://media.houra.fr/images/widget/recette/gd_recette_tiramisu.jpg',
    },
    {
      name: 'Tiramisu',
      price: '5€',
      img: 'https://media.houra.fr/images/widget/recette/gd_recette_tiramisu.jpg',
    },
    {
      name: 'Tiramisu',
      price: '5€',
      img: 'https://media.houra.fr/images/widget/recette/gd_recette_tiramisu.jpg',
    },
    {
      name: 'Tiramisu',
      price: '5€',
      img: 'https://media.houra.fr/images/widget/recette/gd_recette_tiramisu.jpg',
    },
    {
      name: 'Tiramisu',
      price: '5€',
      img: 'https://media.houra.fr/images/widget/recette/gd_recette_tiramisu.jpg',
    },
  ];

  const drinks = [
    {
      name: 'Coca zero',
      price: '2€50',
      img: 'https://www.lsa-conso.fr/mediatheque/7/4/4/000189447_5.jpg',
    },
    {
      name: 'Coca zero',
      price: '2€50',
      img: 'https://www.lsa-conso.fr/mediatheque/7/4/4/000189447_5.jpg',
    },
    {
      name: 'Coca zero',
      price: '2€50',
      img: 'https://www.lsa-conso.fr/mediatheque/7/4/4/000189447_5.jpg',
    },
    {
      name: 'Coca zero',
      price: '2€50',
      img: 'https://www.lsa-conso.fr/mediatheque/7/4/4/000189447_5.jpg',
    },
    {
      name: 'Coca zero',
      price: '2€50',
      img: 'https://www.lsa-conso.fr/mediatheque/7/4/4/000189447_5.jpg',
    },
  ];

  return (
    <SFood>
      <h1 className="menuOfDay"> Le menu du jour</h1>
      <section className="choiceMenu">
        <Tabs>
          <TabList>
            <Tab>Plats</Tab>
            <Tab>Desserts</Tab>
            <Tab>Boissons</Tab>
          </TabList>

          <TabPanel>
            {' '}
            <FoodSlider typeOfFood={plats} />
          </TabPanel>
          <TabPanel>
            {' '}
            <FoodSlider typeOfFood={desserts} />
          </TabPanel>
          <TabPanel>
            {' '}
            <FoodSlider typeOfFood={drinks} />
          </TabPanel>
        </Tabs>
      </section>

      <MainButton content="Réserver" />
    </SFood>
  );
}
