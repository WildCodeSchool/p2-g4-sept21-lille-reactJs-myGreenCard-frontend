import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import logo from 'assets/Img/Harfang.png';
import SUserAvatar from './style';

export default function UserAvatar({ size, border }) {
  const user = useSelector((state) => state.user);
  return (
    <SUserAvatar width={size} height={size} border={border}>
      <img
        src={user.id ? user.picture : logo}
        alt={user.id ? user.name : 'EazyApp'}
      />
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
