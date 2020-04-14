import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

ListStore.propTypes = {
  shops: PropTypes.array.isRequired,
  setShops: PropTypes.func.isRequired
};
function ListStore(props) {
  return (
    <div>
      <div className="container">
        <div className="bg-gradient-primary">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-12 col-md-9">
                <div className="card o-hidden border-0 shadow-lg my-5">
                  <div className="card-body p-0">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="p-5">
                          <div className="text-center">
                            <!-- Juan Pablo Correa: No me parece buena práctica tener un h1 pero estilizarlo como h4. Mejor replantearía el diseño de los h4 como tal -->
                            <h4 className="text-gray-900 mb-4">
                              ¿En cuál tienda estás?
                            </h4>
                          </div>

                          <ul className="shop-list">
                            {props.shops.map((shop) => (
                              <li
                                key={shop._id}
                                className="card shop-list-item"
                              >

                                <div className="card-body shop-details">
                                 <div className="row">
                      <div className="col-lg-12">
                        <div className="p-5">
                          <div className="text-center">
                            
                              <h3 className="card-title">{shop.name} </h3>
                              <!-- Juan Pablo Correa: Aquí llamaría muchisimo la atención poner una imagen del local, para que el home no se vea tan apagado. Pueden tener una carpeta donde el nombre de la imagen sea el mismo id para hacer esto dinámico -->
                           <div className="col-lg-12">
                                  <Link to={`/${shop._id}`}>
                                    <!-- Juan Pablo Correa: Habiendo implementado Bootstrap, me parece buena idea usar diseños de botones que ya existen pero sobreescribiendo sus colores por los deseados, o tener un color para el botón normal y otro para el hover como hace Bootstrap -->
                                    <button className="btn shop-go">Comprar</button>
                                  </Link>
                                </div>
                          </div>
                                 
                                </div>
                                </div>
                                </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListStore;
