import corn from '../../../assets/foodIcons/corn.png';
import dairy from '../../../assets/foodIcons/dairy.png';
import diet from '../../../assets/foodIcons/diet.png';
import egg from '../../../assets/foodIcons/egg.png';
import friday from '../../../assets/foodIcons/friday.png';
import gluten from '../../../assets/foodIcons/gluten.png';
import gmo from '../../../assets/foodIcons/gmo.png';
import nut from '../../../assets/foodIcons/nut.png';
import pork from '../../../assets/foodIcons/pork.png';
import shellfish from '../../../assets/foodIcons/shellfish.png';
import soy from '../../../assets/foodIcons/soy.png';
import sugar from '../../../assets/foodIcons/sugar.png';
import transfat from '../../../assets/foodIcons/transfat.png';
import vegan from '../../../assets/foodIcons/vegan.png';
import vegetarian from '../../../assets/foodIcons/vegetarian.png';
import BurgerMenu from '../BurgerMenu';
import FoodProfileList from './style';

function FoodProfile() {
  const allergies = [
    {
      name: 'Oeuf',
      icon: egg,
    },
    {
      name: 'Gluten',
      icon: gluten,
    },
    {
      name: 'OGM',
      icon: gmo,
    },
    {
      name: 'Arachides',
      icon: nut,
    },
    {
      name: 'Sucres',
      icon: sugar,
    },
    {
      name: 'Maïs',
      icon: corn,
    },
    {
      name: 'Produits laitiers',
      icon: dairy,
    },
    {
      name: 'Soja',
      icon: soy,
    },
    {
      name: 'Graisses transformées',
      icon: transfat,
    },
  ];

  const preferences = [
    {
      name: 'Vegan',
      icon: vegan,
    },
    {
      name: 'Pas de poissons',
      icon: shellfish,
    },
    {
      name: 'Pas de porc',
      icon: pork,
    },
    {
      name: 'Végétarien',
      icon: vegetarian,
    },
    {
      name: 'Vendredi saint',
      icon: friday,
    },
    {
      name: 'Non calorique',
      icon: diet,
    },
  ];

  return (
    <>
      <BurgerMenu />
      <FoodProfileList>
        <div>
          <h2>Votre profil alimentaire</h2>
          <br />
          <h3 className="foodProfileTitle">Allergies</h3>
        </div>
        <FoodProfileList>
          <br />
          {allergies.map((allergie) => (
            <li>
              <img src={allergie.icon} alt={allergie.name} />
              <p>{allergie.name}</p>
            </li>
          ))}
        </FoodProfileList>

        <h3 className="foodProfileTitle">Préférences</h3>
        <FoodProfileList>
          {preferences.map((preference) => (
            <li>
              <img src={preference.icon} alt={preference.name} />
              <p>{preference.name}</p>
            </li>
          ))}
        </FoodProfileList>
      </FoodProfileList>
    </>
  );
}

export default FoodProfile;
