import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await res.json();
      setUser(data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return (
    <div className="row">
      <h4 className="mb-3 mt-3 text-green-800" data-testid="displayName">
        {user?.name ? user?.name : ""}
      </h4>
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
            id="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="Password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
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
          disabled={!email && !password}
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
