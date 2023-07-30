import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import axios from "axios";
import Home from "./components/Home/Home";

import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppContext from "./utils/context";
import Contact from "./components/Contact/Contact";
import Map from "./components/Map/Map";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/category/:id"
            element={
              <>
                <Header />
                <Category />
                <Footer />
              </>
            }
          />
          <Route
            path="/product/:id"
            element={
              <>
                <Header />
                <SingleProduct />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Header />
                <Login />
              </>
            }
          />

          <Route
            path="/register"
            element={
              <>
                <Header />
                <Register />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Header />
                <Contact />
                <Map />
                <Footer />
              </>
            }
          />
        </Routes>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
