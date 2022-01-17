import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'Themes/GlobalStyle';
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

function App() {
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
      </Routes>
    </ThemeProvider>
  );
}

export default App;
