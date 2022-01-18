import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import SUserAvatar from './style';

export default function UserAvatar({ size, border }) {
  const user = useSelector((state) => state.user);
  return (
    <SUserAvatar width={size} height={size} border={border}>
      <img src={user.picture} alt="userName" />
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
