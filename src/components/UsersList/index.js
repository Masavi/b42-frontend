import React, { Fragment, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const UsersList = () => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) return <Redirect to="/login" />

  return ( 
    <Fragment>
      <h2>Lista de Usuarios</h2>
    </Fragment>
  );
}
 
export default UsersList;