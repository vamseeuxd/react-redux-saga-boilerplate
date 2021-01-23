import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { faCalendar, faCog, faPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useShallowEqualSelector } from 'modules/hooks';

import { logOut } from 'actions';

import { StoreState } from 'types';

export default function Header() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useShallowEqualSelector((s: StoreState) => s.user);
  const handleClickLogout = () => {
    dispatch(logOut());
  };

  const getMenu = () => (
    <ul className="navbar-nav mt-2 mt-lg-0 ml-auto pr-4">
      <li className="nav-item active">
        <a className="nav-link text-dark mr-3 button-mode" onClick={handleClickLogout}>
          <FontAwesomeIcon className="mr-2" icon={faSignOutAlt} />
          Logout
        </a>
      </li>
      <li className="nav-item">
        <NavLink
          activeClassName="active-nav-item"
          className="nav-link text-dark mr-3 button-mode"
          to="/manage-services"
        >
          <FontAwesomeIcon className="mr-2" icon={faCog} />
          Manage Services
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          activeClassName="active-nav-item"
          className="nav-link text-dark mr-3 button-mode"
          to="/calendar"
        >
          <FontAwesomeIcon className="mr-2" icon={faCalendar} />
          Calender
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          activeClassName="active-nav-item"
          className="nav-link text-dark mr-3 button-mode"
          to="/add-appointment"
        >
          <FontAwesomeIcon className="mr-2" icon={faPlus} />
          Add Appointment
        </NavLink>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse">
        <a className="navbar-brand font-weight-bold pl-4">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img src="/media/brand/golf-galaxy.jpg" className="mr-4" />
          <h3 className="d-inline-block">Store Scheduling</h3>
        </a>
        {isAuthenticated && getMenu()}
      </div>
    </nav>
  );
}

/*
  <HeaderWrapper data-testid="Header">
    <HeaderContainer>
      <Logo/>
      <Logout onClick={handleClickLogout}>
        <span>logout</span>
        <Icon name="sign-out" width={16}/>
      </Logout>
    </HeaderContainer>
  </HeaderWrapper>;
;
;
*/
