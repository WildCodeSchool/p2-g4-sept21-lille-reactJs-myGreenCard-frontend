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

function App() {
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <main>
        <Routes>
          <Route
            path="/"
            element={<LoginPage setTheme={setTheme} theme={theme} />}
          />
          <Route
            path="home"
            element={<Home setTheme={setTheme} theme={theme} />}
          />
          <Route path="EazyCard" element={<EazyCard />} />
          <Route path="Food" element={<Food />} />
          <Route path="Office" element={<Office />} />
          <Route path="Meeting" element={<Meeting />} />
          <Route path="Supplies" element={<Supplies />} />
          <Route path="LostCard" element={<LostCard />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
