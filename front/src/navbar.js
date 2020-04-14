import React from "react";

import logo from "./img/bou.png";
import user from "./img/user.svg";
import cart from "./img/cart.png";
import logout from "./img/logout.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

Navbar.propTypes = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired,
};

function Navbar(props) {
  const onClickLogout = () => {
    props.setUser({});
    fetch("/logout");
  };
  console.log(props.user);
  return (
    <div>
      <nav>
        <Link to="/" className="navbar-brand" href="/">
          <img src={logo} />
        </Link>
        <div className="navbar-nav ml-auto">
          <Link className="cartimg" to="/payment">
            <!-- Juan Pablo Correa: sería bueno ponerle a esta imagen alguna animación. Puede ser que cuando se pase el cursor se rellenen de otro color -->
            <img alt="Go to pay" src={cart} width="30" height="30" />
          </Link>
          {!props.user.username ? (
            <Link className="cartimg" to="/login">
              <img src={user} alt="login" width="25" height="25" />
            </Link>
          ) : (
            <label
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {props.user.username}
            </label>
          )}
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <Link className="dropdown-item" to="/">
              <button onClick={onClickLogout}>
                <!-- Juan Pablo Correa: sería bueno ponerle a esta imagen alguna animación. Puede ser que cuando se pase el cursor se rellenen de otro color -->
                <img src={logout} alt="logout" width="20" height="20" />
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
