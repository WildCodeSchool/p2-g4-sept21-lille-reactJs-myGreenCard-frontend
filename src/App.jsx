import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'Themes/GlobalStyle';
import { ToastContainer } from 'react-toastify';
import { cookies, api } from 'conf';
import axios from 'axios';
import { lightTheme, darkTheme } from './Themes/Themes';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import EazyCard from './pages/EazyCard';
import Food from './pages/Food';
import Office from './pages/Office';
import Meeting from './pages/Meeting';
import Supplies from './pages/Supplies';
import LostCard from './pages/LostCard';
import Room from './pages/Meeting/Room';
import ProfilPage from './pages/Profile';
import FoodProfile from './pages/Food/FoodProfile';
import RandomLunch from './pages/Food/RandomLunch';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    api.defaults.headers.authorization = `Bearer ${cookies.get('token')}`;
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login/token`, {})
      .then(({ data }) => {
        const { user } = data;
        dispatch({ type: 'LOGIN', user });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  }, []);

  const themeStorage = localStorage.getItem('theme');
  const [theme, setTheme] = useState(themeStorage || 'light');
  const isDarkTheme = theme === 'dark';
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Routes>
        <Route
          path="/"
          element={<LoginPage setTheme={setTheme} theme={theme} />}
        />
        <Route
          path="home"
          element={<Home setTheme={setTheme} theme={theme} />}
        />
        <Route path="eazyCard" element={<EazyCard />} />
        <Route
          path="food"
          element={<Food setTheme={setTheme} theme={theme} />}
        />
        <Route path="food/profile" element={<FoodProfile />} />
        <Route path="office" element={<Office />} />
        <Route path="meetingRooms" element={<Meeting />} />
        <Route path="meetingRooms/:id" element={<Room />} />
        <Route path="supplies" element={<Supplies />} />
        <Route path="lostCard" element={<LostCard />} />
        <Route path="profilPage" element={<ProfilPage />} />
        <Route path="randomLunch" element={<RandomLunch />} />
      </Routes>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
