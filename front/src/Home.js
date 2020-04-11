import React, {useState} from "react";
import ListStore from "./ListStore";


const shops = [
  {
    id: "187623",
    name: "Nike",
    imageURL: "https://unsplash.com/photos/IHpUgFDn7zU",
  },
  {
    id: "12334",
    name: "Zara",
    handle: "richardkalehoff",
    imageURL: "https://images.app.goo.gl/YX7fYfogdzPQcLjSA",
  },
  {
    id: "34534",
    name: "Tyler McGinnis",
    handle: "tylermcginnis",
    imageURL: "https://images.app.goo.gl/YX7fYfogdzPQcLjSA",
  },
];

function Home(props) {


  


  return (
    <div>
     <div className="container store">
      {!props.user ? " " : `¡Bienvenido${props.user.username}!`}
      <ListStore shops={shops} />
    </div>
    </div>
  );
}

export default Home;
