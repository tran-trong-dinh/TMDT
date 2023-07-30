import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import logo from "../../assets/logo.png";
import { SearchResultsList } from "./Search/SearchResultsList";

const Header = () => {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const { user } = useContext(Context);
  const [scrolled, setScrolled] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const navigate = useNavigate();

  const fetchData = (value) => {
    // Giả sử đã có một mảng cố định chứa danh sách người dùng
    const categoryArray = [
      { id: 1, name: "Gundam Model Kits" },
      { id: 2, name: "One Piece Model Kits" },
      { id: 3, name: "Dragon Ball Model Kits" },
      { id: 4, name: "Evangelion Model Kits" },
      { id: 5, name: "Naruto Model Kits" },
      { id: 6, name: "My Hero Academia Model Kits" },
      { id: 7, name: "Attack on Titan Model Kits" },
      { id: 8, name: "Studio Ghibli Model Kits" },
      { id: 9, name: "Figure-rise Standard" },
      { id: 10, name: "PlaMo (Plastic Model)" },
      { id: 11, name: "Bandai Hobby Kits" },
      { id: 12, name: "Kotobukiya Model Kits" },
      { id: 13, name: "Good Smile Company Model Kits" },
      { id: 14, name: "Figma Model Kits" },
      { id: 15, name: "Nendoroid Model Kits" },
      { id: 16, name: "Model Kit Customization" },
      { id: 17, name: "Weathering and Painting Techniques" },
      { id: 18, name: "Kit Bashing" },
      { id: 19, name: "Anime Model Photography" },
      // Thêm các đối tượng người dùng khác vào đây...
    ];

    // Lọc danh sách người dùng dựa trên giá trị `value`
    const results = categoryArray.filter((user) => {
      return (
        value &&
        user &&
        user.name &&
        user.name.toLowerCase().includes(value.toLowerCase())
      );
    });

    // Tiếp tục xử lý kết quả (ở đây, ta giả sử có hàm setResults để lưu trữ kết quả)
    setResults(results);
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
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
                value={input}
                onChange={(e) => handleChange(e.target.value)}
              />

              <SearchResultsList results={results} />
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
