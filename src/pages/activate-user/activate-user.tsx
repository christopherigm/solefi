import React, { useEffect, useState } from 'react';
import {
  useParams
} from 'react-router-dom';
import NavBar from 'src/modules/nav-bar/nav-bar';
import HorizontalSpace from 'src/modules/horizontal-space/horizontal-space';
import ActivateUserCall from 'src/pages/activate-user/activate-user-call';

const ActivateUser = (): React.ReactElement => {
  const params: any = useParams();
  const [status, setStatus] = useState({
    success: false,
    message: ''
  });
  const token = params.token || null;

  useEffect(() => {
    window.scrollTo(0, 0);
    ActivateUserCall( token )
      .then((d: any) => {
        setStatus(d);
      })
      .catch(() => {
        setStatus({
          success: false,
          message: 'Error activando la cuenta'
        });
      });
  }, [ActivateUserCall]);

  return (
    <>
      <NavBar />
      <HorizontalSpace size='large' />
      <p>{ status.success ? 'Cuenta activada correctamente' : status.message }</p>
    </>
  );
};

export default ActivateUser;
