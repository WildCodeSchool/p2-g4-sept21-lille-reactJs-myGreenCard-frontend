import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useEffect, useState } from 'react';
import nfcLight from 'assets/Img/nfcConnectLight.gif';
import nfcDark from 'assets/Img/nfcConnectDark.gif';
import logo from 'assets/Img/easyApp.png';
import logoDark from 'assets/Img/easyAppDark.png';
import ToggleButton from 'components/ToggleButton';
import UserAvatar from 'components/UserAvatar';
import { api, cookies } from 'conf';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import axios from 'axios';
import SLogingPage from './style';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage({ theme, setTheme }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [value, setValue] = useState('1');
  const dispatch = useDispatch();
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  };
  useEffect(() => {
    localStorage.setItem('theme', `${theme}`);
  }, [theme]);

  const HandleChangeFormData = (e) => {
    const newData = { ...form };
    newData[e.target.name] = e.target.value;
    setForm(newData);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;
    const url = `${process.env.REACT_APP_API_URL}/auth/login`;
    const formData = { email, password };
    axios
      .post(url, formData)
      .then(({ data }) => {
        const { token, user } = data;
        cookies.set('token', token);
        api.defaults.headers.authorization = `Bearer ${token}`;
        dispatch({ type: 'LOGIN', user });
        navigate('../home', { replace: true });
      })
      .catch((err) => {
        toast.error(`Une erreur est survenue!${err}`);
      });
  };

  return (
    <SLogingPage>
      <TabContext value={value}>
        <Box>
          <div
            className={
              isDarkTheme
                ? 'darkThemeBackground background'
                : 'lightThemeBakcground background'
            }
          >
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
            <div className="userCard">
              <img src={isDarkTheme ? logoDark : logo} alt="homeIcon" />
              <UserAvatar size="125px" border="none" />
            </div>
            <Tabs
              variant="fullWidth"
              onChange={handleChange}
              aria-label="ConnectionChoice"
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
          </div>
        </Box>
        <TabPanel value="1">
          <form id="letsGo" onSubmit={handleSubmit}>
            <p>Email</p>
            <input
              className={isDarkTheme ? 'darkThemeInput' : 'lightThemeInput'}
              type="email"
              name="email"
              value={form.email}
              onChange={HandleChangeFormData}
            />
            <p>Mot de passe</p>
            <input
              className={isDarkTheme ? 'darkThemeInput' : 'lightThemeInput'}
              type="password"
              name="password"
              value={form.password}
              onChange={HandleChangeFormData}
            />
          </form>
          <p>Mot de passe oublié ?</p>
          <input
            className="letsGo"
            form="letsGo"
            type="submit"
            value="Let&#39;s gooooo"
          />
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
