import { isAdminOrNot } from "../utils/userApi";

function homePage() {
  const token = window.localStorage.getItem("access_token");

  const logOut = () => {
    localStorage.removeItem("access_token");
    window.location.reload();
  };

  const isAdmin = () => {
    isAdminOrNot(token)
      .then((data) => {
        if (data) {
          window.location = "/storeAdmin";
        } else {
          window.location = "/store";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (token) {
    return (
      <div>
        <nav>
          <h1 className="icon">e-Market</h1>
          <div className="container">
            <ul>
              <li>
                <a onClick={isAdmin}>Store </a>
              </li>
              <li>
                <a style={{ cursor: "pointter" }} onClick={logOut}>
                  LogOut
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <br></br>
        <body>
          <h1>Welcome To Our Store</h1>
        </body>
      </div>
    );
  }

  return (
    <div>
      <nav>
        <h1 className="icon">e-Market</h1>
        <div className="container">
          <ul>
            <li>
              <a href="/login">LogIn </a>
            </li>
            <li>
              <a href="/signup">SignUp </a>
            </li>
          </ul>
        </div>
      </nav>
      <br></br>
      <body>
        <h1>Welcome To Our Store</h1>
      </body>
    </div>
  );
}

export default homePage;
