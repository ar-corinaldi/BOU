import React, {useEffect} from "react";
// import PropTypes from 'prop-types';

// Home.propTypes = {};

function Home(props) {


  return (
    <div>{!props.user? "User not logged" : `Welcome Back!${props.user.username}`}</div>
  );
}

export default Home;