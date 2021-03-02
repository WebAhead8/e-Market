import "./Nav.css";
import cart from "./onlineShop.png";

const Nav = (props) => {
  const handleChange = (event) => {
    props.setSearch(event.target.value);
  };
  const logOut = () => {
    localStorage.removeItem("access_token");
    window.location.href = "/";
  };
  return (
    <nav>
      <h1 className="icon">e-Market</h1>
      <div className="container">
        <ul>
          <li className="cart">
            <img src={cart} className="imageNav"></img>
            <span>{props.cartLength}</span>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a style={{ cursor: "pointter" }} onClick={logOut}>
              LogOut
            </a>
          </li>
          <li>
            <label>
              search:
              <input
                type="text"
                name="search"
                value={props.search}
                onChange={handleChange}
              ></input>
            </label>
          </li>
          <li>
            <a href="/store">Store </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
