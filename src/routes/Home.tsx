import React from 'react';
import { useDispatch } from 'react-redux';

import { login } from 'actions';

function Home() {
  const dispatch = useDispatch();

  const handleClickLogin = () => {
    dispatch(login());
  };

  return (
    <div className="d-flex justify-content-center align-items-center app-page">
      <div>
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={handleClickLogin} className="btn btn-outline-primary">
          CLick Here to Login
        </button>
      </div>
    </div>
  );
}

export default Home;
