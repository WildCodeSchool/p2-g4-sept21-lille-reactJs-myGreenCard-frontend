import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { api, cookies } from 'conf';
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
import MainButton from 'components/MainButton';
import BurgerMenu from '../BurgerMenu';
import FoodProfileList from './style';

function FoodProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { id } = user;
  const [preferences, setPreferences] = useState([
    {
      name: 'Vegan',
      icon: vegan,
      isFree: false,
      bdName: 'vegan',
    },
    {
      name: 'Pas de poissons',
      icon: shellfish,
      isFree: false,
      bdName: 'shellfishFree',
    },
    {
      name: 'Pas de porc',
      icon: pork,
      isFree: false,
      bdName: 'porkFree',
    },
    {
      name: 'Végétarien',
      icon: vegetarian,
      isFree: false,
      bdName: 'vegetarian',
    },
    {
      name: 'Vendredi saint',
      icon: friday,
      isFree: false,
      bdName: 'fridayFish',
    },
    {
      name: 'Non calorique',
      icon: diet,
      isFree: false,
      bdName: 'onDiet',
    },
  ]);

  const [allergies, setAllergies] = useState([
    {
      name: 'Oeuf',
      icon: egg,
      isFree: false,
      bdName: 'eggFree',
    },
    {
      name: 'Gluten',
      icon: gluten,
      isFree: false,
      bdName: 'glutenFree',
    },
    {
      name: 'OGM',
      icon: gmo,
      isFree: false,
      bdName: 'gmoFree',
    },
    {
      name: 'Arachides',
      icon: nut,
      isFree: false,
      bdName: 'nutFree',
    },
    {
      name: 'Sucres',
      icon: sugar,
      isFree: false,
      bdName: 'sugarFree',
    },
    {
      name: 'Maïs',
      icon: corn,
      isFree: false,
      bdName: 'cornFree',
    },
    {
      name: 'Produits laitiers',
      icon: dairy,
      isFree: false,
      bdName: 'dairyFree',
    },
    {
      name: 'Soja',
      icon: soy,
      isFree: false,
      bdName: 'soyFree',
    },
    {
      name: 'Graisses transformées',
      icon: transfat,
      isFree: false,
      bdName: 'transFatsFree',
    },
  ]);

  useEffect(() => {}, []);

  const changeAllergiesState = (name) => {
    let newData = JSON.parse(JSON.stringify(allergies));
    newData = newData.map((item) => {
      if (item.name !== name) {
        return item;
      }
      return {
        ...item,
        isFree: !item.isFree,
      };
    });
    setAllergies(newData);
  };

  const changePreferencesState = (name) => {
    let newData = JSON.parse(JSON.stringify(preferences));
    newData = newData.map((item) => {
      if (item.name !== name) {
        return item;
      }
      return {
        ...item,
        isFree: !item.isFree,
      };
    });
    setPreferences(newData);
  };

  const isFreePreferences = preferences.reduce((accu, item) => {
    return {
      ...accu,
      [item.bdName]: item.isFree,
    };
  }, {});

  const isFreeAllergies = allergies.reduce((accu, item) => {
    return {
      ...accu,
      [item.bdName]: item.isFree,
    };
  }, {});

  const isFreeProfile = { ...isFreeAllergies, ...isFreePreferences };

  const storeFoodProfile = () => {
    api
      .put(
        `${process.env.REACT_APP_API_URL}/user/${id}/foodProfile`,
        isFreeProfile
      )
      .then(({ data }) => {
        const { token, user: userdata } = data;
        cookies.set('token', token);
        api.defaults.headers.authorization = `Bearer ${token}`;
        dispatch({ type: 'LOGIN', userdata });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <BurgerMenu />
      <FoodProfileList>
        <div>
          <h3 className="yourProfile">Votre profil alimentaire</h3>
          <br />
          <h2 className="foodProfileTitle">Allergies</h2>
        </div>
        <FoodProfileList>
          <br />
          {allergies.map((allergie) => (
            <button
              key={allergie.name}
              type="button"
              onClick={() => {
                changeAllergiesState(allergie.name);
              }}
            >
              <img
                className={allergie.isFree ? 'isFree' : 'isNotFree'}
                src={allergie.icon}
                alt={allergie.name}
              />
            </button>
          ))}
        </FoodProfileList>

        <h2 className="foodProfileTitle">Préférences</h2>
        <FoodProfileList>
          {preferences.map((preference) => (
            <button
              key={preference.name}
              type="button"
              onClick={() => {
                changePreferencesState(preference.name);
              }}
            >
              <img
                className={preference.isFree ? 'isFree' : 'isNotFree'}
                src={preference.icon}
                alt={preference.name}
              />
            </button>
          ))}
        </FoodProfileList>
      </FoodProfileList>
      <MainButton
        content="Mettre à jour mes informations"
        clickCallback={() => {
          storeFoodProfile();
        }}
      />
    </>
  );
}

export default FoodProfile;
