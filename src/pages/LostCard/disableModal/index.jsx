import { useState } from 'react';

import SDisableModal from './style';

function DisableModal() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const HandleChangeFormData = (e) => {
    const newData = { ...formData };
    newData[e.target.name] = e.target.value;
    setFormData(newData);
  };

  return (
    <>
      <SDisableModal>
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
      </SDisableModal>
    </>
  );
}

export default DisableModal;
