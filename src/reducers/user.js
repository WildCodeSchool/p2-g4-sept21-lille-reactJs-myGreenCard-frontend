const initialState = {
  id: '',
  email: '',
  firstname: '',
  lastname: '',
  picture: '',
  job: '',
  isLogged: 0,
  cardNumber: '',
  amount: 0,
  isInvited: '',
  eggFree: 0,
  glutenFree: 0,
  gmoFree: 0,
  nutFree: 0,
  sugarFree: 0,
  cornFree: 0,
  dairyFree: 0,
  soyFree: 0,
  transFatsFree: 0,
  vegan: 0,
  shellfishFree: 0,
  porkFree: 0,
  vegetarian: 0,
  fridayFish: 0,
  onDiet: 0,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, ...action.user };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export default user;
