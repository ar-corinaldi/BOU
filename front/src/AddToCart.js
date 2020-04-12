import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

AddToCart.propTypes = {
  editCar: PropTypes.func.isRequired,
  car: PropTypes.object.isRequired,
};

function AddToCart(props) {
  const butAgregar = useRef();
  const match = window.location.pathname.split("/");
  const [item, setItem] = useState({});
  useEffect(() => {
    fetchItem();
  }, []);
  const fetchItem = async () => {
    const url = `/shop/${match[1]}/item/${match[2]}`;
    console.log(url);
    const res = await fetch(url);
    let newItem = await res.json();
    let products = props.car.products;
    for (let product of products) {
      console.log("producto:", product);
      if (product.id === newItem.id) {
        newItem = { id: " ", name: "Item ya agregado! Ve a pagar", price: "" };

        break;
      }
    }
    props.car.shop = match[1];
    setItem(newItem);
  };

  const addCar = () => {
    console.log("Intenta agreagar al carrito");
    let temp = props.car;
    console.log(temp);
    console.log("item", item);
    console.log("Item adentro" + item);
    temp.products.push(item);
    props.editCar(temp);
    console.log("Despues de agregar", props.car);
    setItem({ id: " ", name: "Agregado!", price: "" });
    butAgregar.current.setAttribute("disabled", "true");
  };

  const render = () => {
    console.log("cargando", item);
    return !item.id ? (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    ) : (
      <div className="col-md-12">
        <div className="card add">
          <div className="card-head">
            <img
              className="card-img-top justify-content-center"
              alt="detalle prenda elegida"
              src={item.imageURL}
            ></img>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md">
                <div className="card-body description">
                  <h2 className="card-title">{item.name}</h2>

                  <div className="description">
                    <p>{item.description}</p>
                  </div>

                  <div className="price-tag">
                    <p>{item.price ? "$" + item.price : ""}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <button
                className="shop-go justify-content-center"
                onClick={addCar}
                ref={butAgregar}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="container add-cart">
      {render()}
      <div className="row">
        <Link to={"/" + match[1]}>
          <button className="shop-goto">Volver</button>
        </Link>
      </div>

      <div className="row justify-content-center">
        <Link to="/payment">
          <button className="shop-go">Pagar</button>
        </Link>
      </div>
      <div className="row">
        <ul>
          {props.car.products.map((c) => (
            <li key={c.id}>{c.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AddToCart;
