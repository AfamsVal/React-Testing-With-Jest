import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

const Home = lazy(() => wait(2000).then(() => import("./pages/homePage/Home")));
const Login = lazy(() => import("./pages/login/Login"));
const Carts = lazy(() => import("./pages/carts/Carts"));
const Register = lazy(() =>
  import("./pages/register/Register").then((module) => {
    return { default: module.Register };
  })
);

export function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Suspense fallback={<h4>Loading...</h4>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/carts" element={<Carts />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
