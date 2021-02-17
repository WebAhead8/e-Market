import "./Nav.css";
import cart from "./onlineShop.png";
import searchIcon from "./loupe.png";

const Nav = () => {
  return (
    <header>
      <nav className="container">
        <ul>
          <li>
            <img src={cart}></img>
          </li>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <label>
              search:
              <input></input>
            </label>
          </li>
          <li>
            <a href="#">SOMETHING </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
