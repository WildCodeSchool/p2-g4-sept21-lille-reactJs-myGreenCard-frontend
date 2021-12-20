import PropTypes from 'prop-types';
import SUserAvatar from './style';
import user from '../../assets/Img/users/e3.png';

export default function UserAvatar({ size, border }) {
  return (
    <SUserAvatar width={size} height={size} border={border}>
      <img src={user} alt="userName" />
    </SUserAvatar>
  );
}

UserAvatar.propTypes = {
  size: PropTypes.string,
  border: PropTypes.string,
};

UserAvatar.defaultProps = {
  size: '45px',
  border: '1px solid black',
};
