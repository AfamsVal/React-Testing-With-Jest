import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { ComponentToPrint } from "../../components/print/ComponentToPrint.js";

const Home = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Val Simple Print",
    onAfterPrint: () => console.log("printed successfully!"),
  });

  return (
    <div className="row mt-5">
      <div style={{ display: "none" }}>
        <ComponentToPrint ref={componentRef} />
      </div>
      <div className="my-3">
        <button className="btn btn-info" onClick={handlePrint}>
          Print this out!
        </button>
      </div>
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
