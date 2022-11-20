import React from "react";

const Home = () => {
  return (
    <div className="row">
      <div>This is Home</div>
      <div data-testid="sum">{4 + 4}</div>
    </div>
  );
};

export default Home;
