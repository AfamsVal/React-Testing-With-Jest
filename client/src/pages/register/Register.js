import React, { lazy, Suspense, useState } from "react";
// import { wait } from "../../Routes";

const AdminData = lazy(() =>
  // wait(3000).then(() =>
  import("./AdminData").then((module) => {
    return { default: module.AdminData };
  })
);
// );

export const Register = () => {
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = React.useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length <= 4) {
      setError("Password is too short!");
    }
  };

  return (
    <div className="row">
      <div className="col-12 col-md-6 mt-5">
        <h1 className="">Job application form</h1>
        <h2>Section 1</h2>
        <div title="close">X</div>
        <img
          src="https://via.placeholder.com/150"
          alt="a person with a laptop"
        />
        <div>
          <Suspense fallback={<h5>Loading...</h5>}>
            {isAdmin ? <AdminData /> : <h4>No Admin Found!</h4>}
          </Suspense>
          <p>
            <button onClick={() => setIsAdmin(!isAdmin)}>Toggle Admin</button>
          </p>
        </div>
      </div>

      <div className="col-12 col-md-6 mt-5">
        <h3 data-testid="custom-element mb-2">Application</h3>
        <p>All fields are mandatory</p>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Fullname"
              value="Vishwas"
              onChange={() => {}}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="bio">Bio</label>
            <textarea id="bio" className="form-control" />
          </div>
          <div className="mt-3">
            <label htmlFor="job-location mb-1">Job location</label>
            <select id="job-location" className="form-control mt-1">
              <option value="">Select a country</option>
              <option value="US">United States</option>
              <option value="GB">United Kingdom</option>
              <option value="CA">Canada</option>
              <option value="IN">India</option>
              <option value="AU">Australia</option>
            </select>
          </div>
          <div className="mt-3">
            <label>
              <input type="checkbox" id="terms" /> I agree to the terms and
              conditions
            </label>
          </div>
          <div className="mt-3">
            <label htmlFor="Password">Enter Password</label>
            <input
              type="password"
              id="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              className="form-control"
            />
          </div>
          {/* {error.length ? <div className="text-danger">{error}</div> : ""} */}
          Password is too short!
          <button
            disabled={!password}
            onClick={handleSubmit}
            className="btn btn-primary mt-3"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
