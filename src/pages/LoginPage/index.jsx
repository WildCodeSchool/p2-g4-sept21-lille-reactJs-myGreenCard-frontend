import { Link } from 'react-router-dom';
import UserAvatar from 'components/UserAvatar';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import logo from '../../assets/Img/easyApp.png';
import logoDark from '../../assets/Img/easyAppDark.png';
import SLogingPage from './style';
import ToggleButton from '../../components/ToggleButton';
import MainButton from '../../components/MainButton';
import nfcLight from '../../assets/Img/nfcConnectLight.gif';
import nfcDark from '../../assets/Img/nfcConnectDark.gif';

export default function LoginPage({ theme, setTheme }) {
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => {
    return setTheme(isDarkTheme ? 'light' : 'dark');
  };
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const HandleChangeFormData = (e) => {
    const newData = { ...formData };
    newData[e.target.name] = e.target.value;
    setFormData(newData);
  };

  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <SLogingPage>
      <TabContext value={value}>
        <Box>
          <div className="theme">
            <p>Light</p>
            <ToggleButton
              label="Dark/light mode"
              handleClick={toggleTheme}
              className={isDarkTheme ? 'dark' : null}
              size={0.5}
            />
            <p>Dark</p>
          </div>
          <img src={isDarkTheme ? logoDark : logo} alt="homeIcon" />
          <div className="UserCard">
            <UserAvatar size="125px" border="none" />
          </div>
          <Tabs
            variant="fullWidth"
            onChange={handleChange}
            aria-label="Connection choice"
            textColor="black"
            centered
            TabIndicatorProps={{
              style: {
                height: '3px',
                backgroundColor: isDarkTheme ? 'white' : 'black',
                width: '27vw',
              },
            }}
          >
            <Tab label="Se connecter" value="1" />
            <Tab label="Sans contact" value="2" />
          </Tabs>
        </Box>
        <TabPanel value="1">
          <form>
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={HandleChangeFormData}
            />
            <p>Mot de passe</p>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={HandleChangeFormData}
            />
          </form>

          <p>Mot de passe oublié</p>

          <Link to="/home">
            <MainButton content="Let&#39;s gooooo" />
          </Link>
        </TabPanel>
        <TabPanel value="2">
          <img src={isDarkTheme ? nfcDark : nfcLight} alt="nfc" />
        </TabPanel>
      </TabContext>
    </SLogingPage>
  );
}

LoginPage.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func,
};

LoginPage.defaultProps = {
  theme: '',
  setTheme: () => {},
};
