function homePage() {
  return (
    <div>
      <nav>
        <h1 className="icon">e-Market</h1>
        <div className="container">
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/store">Store </a>
            </li>
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
