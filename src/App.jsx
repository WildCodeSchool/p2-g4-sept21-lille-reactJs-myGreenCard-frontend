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
import Room from './pages/Meeting/Room';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="home" element={<Home />} />
        <Route path="eazyCard" element={<EazyCard />} />
        <Route path="food" element={<Food />} />
        <Route path="office" element={<Office />} />
        <Route path="meetingRooms" element={<Meeting />} />
        <Route path="meetingRooms/:id" element={<Room />} />
        <Route path="Supplies" element={<Supplies />} />
        <Route path="LostCard" element={<LostCard />} />
      </Routes>
    </>
  );
}

export default App;
