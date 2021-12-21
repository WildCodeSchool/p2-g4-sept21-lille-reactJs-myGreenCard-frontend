import UserAvatar from 'components/UserAvatar';
import logo from '../../assets/Img/easyApp.png';
import SLoggingPage from './style';

export default function LoginPage() {
  return (
    <SLoggingPage>
      <img src={logo} alt="homeIcon" />
      <div classeName="UserCard">
        <UserAvatar size="200px" border="none" />
      </div>
      <form>
        <p>Email</p>
        <input type="email" />
        <p>Mot de passe</p>
        <input type="password" />
      </form>
      <p>Mot de passe oublié</p>
      <button type="button">Let&#39;s gooooo</button>
    </SLoggingPage>
  );
}
