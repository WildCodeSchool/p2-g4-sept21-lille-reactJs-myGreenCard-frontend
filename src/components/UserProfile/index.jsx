import SUserProfile from './style';
import user from '../../assets/Img/users/e3.png';

export default function UserProfile() {
  return (
    <SUserProfile>
      <img classeName="userImg" src={user} alt="userName" />
    </SUserProfile>
  );
}
