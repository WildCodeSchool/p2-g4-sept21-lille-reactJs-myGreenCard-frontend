import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Header from 'components/Header';
import socketIOClient from 'socket.io-client';
import logo from '../../assets/Img/easyApp.png';
import darkLogo from '../../assets/Img/easyAppDark.png';
import SChat from './style';

export default function Chat() {
  const [socket, setSocket] = useState(socketIOClient('http://localhost:8080'));
  const [messages, setMessages] = useState([]);
  const user = useSelector((state) => state.user);
  const [formMessage, setMsg] = useState('');
  const [sendToggle, setSendToggle] = useState(false);

  const themeStorage = localStorage.getItem('theme');

  useEffect(() => {
    setSocket(socket);
  }, []);

  useEffect(() => {
    socket.on('listMsg', (data) => {
      setMessages(data);
    });
  }, []);

  const sendData = (evt) => {
    evt.preventDefault();
    if (!formMessage) return;

    const newMsg = {
      userId: user.id,
      content: formMessage,
      picture: user.picture,
      firstname: user.firstname,
      lastname: user.lastname,
    };
    socket.emit('sendMsg', newMsg);
    setMsg('');
  };

  const handleSubmit = (evt) => {
    sendData(evt);
    setSendToggle(!sendToggle);
  };

  return (
    <>
      <Header logo={themeStorage === 'dark' ? darkLogo : logo} />
      <SChat>
        <form onSubmit={handleSubmit}>
          <input
            className="inputText"
            type="text"
            name="msg"
            placeholder="Message"
            value={formMessage}
            onChange={(evt) => {
              setMsg(evt.target.value);
            }}
          />
          <input className="inputButton" type="submit" value="↑" />
        </form>
        {messages && (
          <ul>
            {messages.map(
              ({ id, userId, content, time, picture, firstname, lastname }) => {
                let className = 'alienMsg';
                if (userId !== user.id) {
                  className = 'notice';
                } else {
                  className = 'ownMsg';
                }
                return (
                  <>
                    <li className={className}>
                      <p key={id} className="userName">
                        {firstname} {lastname}
                      </p>
                      <div className="userImg">
                        <img src={picture} alt="Profil photography" />
                      </div>
                      <p className="content">{content}</p>
                    </li>
                    <div className="timeContain">
                      <p className="dateTime">{time}</p>
                    </div>
                  </>
                );
              }
            )}
          </ul>
        )}
      </SChat>
    </>
  );
}
