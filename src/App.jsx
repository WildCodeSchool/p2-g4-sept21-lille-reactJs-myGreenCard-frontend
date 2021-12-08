import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import EazyCard from './pages/EazyCard';
import Food from './pages/Food';
import Office from './pages/Office';
import Meeting from './pages/Meeting';
import Supplies from './pages/Supplies';
import LostCard from './pages/LostCard';

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="home" element={<Home />} />
          <Route path="EazyCard" element={<EazyCard />} />
          <Route path="Food" element={<Food />} />
          <Route path="Office" element={<Office />} />
          <Route path="Meeting" element={<Meeting />} />
          <Route path="Supplies" element={<Supplies />} />
          <Route path="LostCard" element={<LostCard />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
