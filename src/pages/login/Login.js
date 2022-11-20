import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      console.log("data =>", data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
    console.log(user);
  };
  return (
    <div className="row">
      <form action="/action_page.php">
        <div className="mb-3 mt-3 text-danger" data-testid="error">
          {error ? error : ""}
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={user.email}
            onChange={({ target }) => setUser({ ...user, email: target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={user.password}
            onChange={({ target }) =>
              setUser({ ...user, password: target.value })
            }
          />
        </div>
        <div className="form-check mb-3">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              name="remember"
            />{" "}
            Remember me
          </label>
        </div>
        <button
          onClick={handleSubmit}
          disabled={!user.email && !user.password}
          type="button"
          className="btn btn-primary"
        >
          Login {loading ? <div className="spinner-border"></div> : ""}
        </button>
      </form>
    </div>
  );
};

export default Login;
