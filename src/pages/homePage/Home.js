import React from "react";

const Home = () => {
  return (
    <div className="row">
      <div>This is Home</div>
      <div data-testid="sum">{4 + 4}</div>
      <p>
        <button
          onClick={() => {
            import("../../utils/sum.js").then((module) => {
              alert(module.sumUp(18, 8));
            });
          }}
        >
          Add 8 + 18
        </button>
      </p>
    </div>
  );
};

export default Home;
