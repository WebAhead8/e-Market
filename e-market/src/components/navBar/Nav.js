import "./Nav.css";
import cart from "./onlineShop.png";
import searchIcon from "./loupe.png";

const Nav = () => {
  return (
    <nav>
      <h1 className="icon">e-Market</h1>
      <div className="container">
        <ul>
          <li>
            <img src={cart} className="imageNav"></img>
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
      </div>
    </nav>
  );
};

export default Nav;
