import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import SChat from './style';

export default function Chat() {
  const [socket, setSocket] = useState(socketIOClient('http://localhost:8080'));
  const [messages, setMessages] = useState([]);
  const user = useSelector((state) => state.user);
  const [formMessage, setMsg] = useState('');
  const [sendToggle, setSendToggle] = useState(false);

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
      author: user.id,
      content: formMessage,
    };
    socket.emit('sendMsg', newMsg);
    setMsg('');
  };

  const handleSubmit = (evt) => {
    sendData(evt);
    setSendToggle(!sendToggle);
  };

  return (
    <SChat>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="msg"
          placeholder="Message"
          value={formMessage}
          onChange={(evt) => {
            setMsg(evt.target.value);
          }}
        />
        <input type="submit" value="Envoyer" />
      </form>
      {messages && (
        <ul>
          {messages.map(({ id, author, content, time }) => {
            let className = 'alienMsg';
            if (author !== user.firstname) {
              className = 'notice';
            }
            if (author === user.firstname) {
              className = 'ownMsg';
            }
            return (
              <li key={id} className={className}>
                <address>{author}</address>
                <p>{content}</p>
                <time>{time}</time>
              </li>
            );
          })}
        </ul>
      )}
    </SChat>
  );
}
