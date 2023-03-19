import React, { useState } from "react";
import cat from "../../asset/images/cat.jpg";
import dog from "../../asset/images/dog.jpg";
import lion from "../../asset/images/lion.jpg";
import deer from "../../asset/images/deer.jpg";
import bear from "../../asset/images/bear.jpg";
import tiger from "../../asset/images/tiger.jpg";
import Cart from "../../components/cart/Cart";

const Carts = () => {
  const ITEMS = [
    {
      id: 1,
      title: "Cat",
      email: "progfams@gmail.com",
      gender: "Male",
      pic: cat,
    },
    {
      id: 2,
      title: "Dog",
      email: "stan@gmail.com",
      gender: "Female",
      pic: dog,
    },
    {
      id: 3,
      title: "Lion",
      email: "chime@gmail.com",
      gender: "Female",
      pic: lion,
    },
    {
      id: 4,
      title: "Tiger",
      email: "smillee@gmail.com",
      gender: "Male",
      pic: tiger,
    },
    {
      id: 5,
      title: "Deer",
      email: "candor@gmail.com",
      gender: "Female",
      pic: deer,
    },
    {
      id: 6,
      title: "Bear",
      email: "similar@gmail.com",
      gender: "Male",
      pic: bear,
    },
  ];

  const [gender, setGender] = useState("");
  const [favorites, setFavorites] = useState([]);

  const [fav, setFav] = useState("");

  const filtered = () => {
    if (!gender && !fav) return ITEMS;
    let itemList = ITEMS;

    if (gender === "All") {
      itemList = [
        ...ITEMS.filter((item) => item.gender === ""),
        ...itemList.filter((item) => item.gender !== ""),
      ];
    } else {
      if (gender === "Male")
        itemList = itemList.filter((item) => item.gender === "Male");

      if (gender === "Female")
        itemList = itemList.filter((item) => item.gender === "Female");
    }

    if (fav === "All") {
      itemList = [
        ...ITEMS.filter((item) => favorites.includes(item.id)),
        ...itemList.filter((item) => item.fav !== ""),
      ];
    } else {
      if (fav === "fav")
        itemList = itemList.filter((item) => favorites.includes(item.id));

      if (fav === "notFav")
        itemList = itemList.filter((item) => !favorites.includes(item.id));
    }
    return itemList;
  };

  return (
    <div className="container-fuild">
      <div className="row">
        <div className="col-12 col-md-3">
          <h5 className="bg-secondary text-white p-2 mt-4">Filter Item:</h5>
          <div className="form-group">
            <label htmlFor="favourite">Favourite:</label>
            <select
              onChange={({ target }) => setFav(target.value)}
              className="form-control"
              id="favourite"
            >
              <option value="">All</option>
              <option value="fav">Favourite</option>
              <option value="notFav">Not Favourite</option>
            </select>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="gender">Gender:</label>
            <select
              onChange={({ target }) => setGender(target.value)}
              className="form-control"
              id="gender"
            >
              <option value="">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
        <div className="col-12 col-md-9">
          <article className="row mt-4">
            {filtered().length ? (
              filtered().map((item) => (
                <Cart
                  key={item.id}
                  item={item}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              ))
            ) : (
              <div className="col-12 text-center p-5 my-5"> No Item Found!</div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
};

export default Carts;
