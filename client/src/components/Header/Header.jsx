import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import logo from "../../assets/logo.png";

const Header = () => {
  const { user } = useContext(Context);
  const [scrolled, setScrolled] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const navigate = useNavigate();
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const { cartCount, showCart, setShowCart } = useContext(Context);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <div className="left" onClick={() => navigate("/")}>
            <img src={logo} alt="" className="logo" />
          </div>
          <ul className="center">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/category")}>Products</li>
            <li onClick={() => navigate("/contact")}>Contact</li>
          </ul>

          <div className="right">
            <div className="search">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
              <TbSearch onClick={() => setSearchModal(true)} />
            </div>

            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
            {user ? (
              <Link to={"/profile"} className="user-avatar">
                <img src={logo} alt="" />
              </Link>
            ) : (
              <Link to="/login" className="button-login">
                Login
              </Link>
            )}
          </div>
        </div>
      </header>
      {searchModal && <Search setSearchModal={setSearchModal} />}
      {showCart && <Cart />}
    </>
  );
};

export default Header;
