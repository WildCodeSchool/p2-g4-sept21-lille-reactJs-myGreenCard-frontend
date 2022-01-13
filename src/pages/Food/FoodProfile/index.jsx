import axios from 'axios';
import { useState, useEffect } from 'react';
import corn from 'assets/foodIcons/corn.png';
import dairy from 'assets/foodIcons/dairy.png';
import diet from 'assets/foodIcons/diet.png';
import egg from 'assets/foodIcons/egg.png';
import friday from 'assets/foodIcons/friday.png';
import gluten from 'assets/foodIcons/gluten.png';
import gmo from 'assets/foodIcons/gmo.png';
import nut from 'assets/foodIcons/nut.png';
import pork from 'assets/foodIcons/pork.png';
import shellfish from 'assets/foodIcons/shellfish.png';
import soy from 'assets/foodIcons/soy.png';
import sugar from 'assets/foodIcons/sugar.png';
import transfat from 'assets/foodIcons/transfat.png';
import vegan from 'assets/foodIcons/vegan.png';
import vegetarian from 'assets/foodIcons/vegetarian.png';
import BurgerMenu from '../BurgerMenu';
import FoodProfileList from './style';

function FoodProfile() {
  const [allData, setAllData] = useState([]);

  const [preferences, setPreferences] = useState([
    {
      name: 'Vegan',
      icon: vegan,
      isFree: false,
    },
    {
      name: 'Pas de poissons',
      icon: shellfish,
      isFree: false,
    },
    {
      name: 'Pas de porc',
      icon: pork,
      isFree: false,
    },
    {
      name: 'Végétarien',
      icon: vegetarian,
      isFree: false,
    },
    {
      name: 'Vendredi saint',
      icon: friday,
      isFree: false,
    },
    {
      name: 'Non calorique',
      icon: diet,
      isFree: false,
    },
  ]);

  const [allergies, setAllergies] = useState([
    {
      name: 'Oeuf',
      icon: egg,
      isFree: false,
    },
    {
      name: 'Gluten',
      icon: gluten,
      isFree: false,
    },
    {
      name: 'OGM',
      icon: gmo,
      isFree: false,
    },
    {
      name: 'Arachides',
      icon: nut,
      isFree: false,
    },
    {
      name: 'Sucres',
      icon: sugar,
      isFree: false,
    },
    {
      name: 'Maïs',
      icon: corn,
      isFree: false,
    },
    {
      name: 'Produits laitiers',
      icon: dairy,
      isFree: false,
    },
    {
      name: 'Soja',
      icon: soy,
      isFree: false,
    },
    {
      name: 'Graisses transformées',
      icon: transfat,
      isFree: false,
    },
  ]);

  const changeAllergiesState = () => {
    setAllergies(allergies);
  };

  const changePreferencesState = () => {
    setPreferences(preferences);
  };

  useEffect(() => {
    axios.get('http://localhost:5000/food').then(({ data }) => {
      setAllData(data);
    });
  }, []);
  console.log(allergies[0].isFree);
  console.log(allergies[1].isFree);
  console.log(allData);

  return (
    <>
      <BurgerMenu />
      <FoodProfileList>
        <div>
          <p className="votreProfil">Votre profil alimentaire</p>
          <br />
          <h2 className="foodProfileTitle">Allergies</h2>
        </div>
        <FoodProfileList>
          <br />
          {allergies.map((allergie) => (
            <button type="button" onClick={changeAllergiesState}>
              <div />
              <img
                className="allergiePic"
                src={allergie.icon}
                alt={allergie.name}
              />
            </button>
          ))}
        </FoodProfileList>

        <h2 className="foodProfileTitle">Préférences</h2>
        <FoodProfileList>
          {preferences.map((preference) => (
            <button type="button" onClick={changePreferencesState}>
              <img
                className="preferencePic"
                src={preference.icon}
                alt={preference.name}
              />
            </button>
          ))}
        </FoodProfileList>
      </FoodProfileList>
    </>
  );
}

export default FoodProfile;
