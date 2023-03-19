import React from "react";

const Cart = ({ item, favorites, setFavorites }) => {
  const handleFavorite = (id) => {
    if (favorites.includes(id)) {
      const fav = favorites;
      fav.splice(favorites.indexOf(id), 1);
      setFavorites([...fav]);
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className="col-12 col-md-4 mb-4" key={item.id}>
      <div className="card">
        <div className="card-header img-height text-center">
          <img src={item.pic} alt={item.title} className="h-100 d-inline" />
          <div className="favorite-icon">
            <i
              className="fas fa-heart"
              data-testid="icon"
              onClick={() => handleFavorite(item.id)}
              style={{
                fontSize: "30px",
                cursor: "pointer",
                color: favorites.includes(item.id) ? "red" : "black",
              }}
            ></i>
          </div>
        </div>
        <div className="card-body">
          <p data-testid="label">
            {item.title} - {item.gender}
          </p>
          <small>{item.email}</small>
        </div>
      </div>
    </div>
  );
};

export default Cart;
