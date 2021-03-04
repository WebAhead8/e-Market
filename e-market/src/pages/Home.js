import { isAdminOrNot } from "../utils/userApi";
import "./Home.css";

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
      <body className="backgr">
        <h1 className="title">Welcome To Our Store</h1>
        <p className="pra">
          Welcome to our online store! Our team is proud to announce that we're
          now open for business, and we look forward to serving you all in the
          future.<br></br> If you have any questions about this store or the
          products found within, please don't hesitate to contact us any time.
          <br></br> Our website has been carefully designed to provide you with
          an amazingly flexible online shopping experience, and its ease of
          navigation is something we think you'll grow to depend on and
          appreciate.<br></br> Feel free to browse our entire product catalog,
          and let us know if you have any questions, comments or concerns about
          the items housed within.<br></br> Our team is always ready and willing
          to assist our customers, and we are happy for your visit.<br></br>{" "}
          When making a purchase in our online store, you will notice how easy
          it is to add products to the shopping cart,<br></br> review every
          aspect of your order, and enter your payment information in our secure
          checkout.
          <br></br> On behalf of our entire team, thanks so much for stopping
          by. We look forward to providing you with the best possible online
          shopping experience on the Web.Have fun, enjoy or growing selection of
          amazing merchandise and we look forward to speaking with you soon!{" "}
        </p>
      </body>
    </div>
  );
}

export default homePage;
