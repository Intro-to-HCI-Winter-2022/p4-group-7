import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { connect } from 'react-redux';

const TopNav = (props) => {
  return (
    <nav id="top_nav_bar">
      <ul>
        <li><NavLink to="/homepage" exact>Home</NavLink></li>
        <li style={{ display: props.auth ? 'inline' : 'none' }}><NavLink to="/homepage" exact><AccountCircleIcon /></NavLink></li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth.authenticated,
});

export default withRouter(connect(mapStateToProps, null)(TopNav));
