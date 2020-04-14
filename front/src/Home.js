import React from "react";
import ListStore from "./ListStore";
import PropTypes from "prop-types";

Home.propTypes = {
  user: PropTypes.object.isRequired,
  setShops: PropTypes.func.isRequired
};
function Home(props) {
  return (
    <div>
      {!props.user.username ? " " : `¡Bienvenido ${props.user.username}!`}
      <ListStore shops={props.shops} setShops={props.setShops} />
    </div>
  );
}


export default Home;
