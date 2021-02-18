import "./Nav.css";
import cart from "./onlineShop.png";

const Nav = (props) => {
  const handleChange = (event) => {
    props.setSearch(event.target.value);
  };
  return (
    <nav>
      <h1 className="icon">e-Market</h1>
      <div className="container">
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
              <input
                type="text"
                name="search"
                value={props.search}
                onChange={handleChange}
              ></input>
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
