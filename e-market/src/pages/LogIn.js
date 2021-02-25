import "./login.css";

function logIn() {
  return (
    <div className="form">
      <form action="http://localhost:4000/login" method="POST">
        <fieldset>
          <legend>LOG IN</legend>
          <label htmlFor="email">
            email:
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => e.target.value}
            />
          </label>
          <label htmlFor="password">
            password:
            <input
              type="text"
              name="password"
              id="password"
              onChange={(e) => e.target.value}
            />
          </label>
          <div>
            <button>Log In</button>
          </div>
        </fieldset>
      </form>
      <a href="/">HOME</a>
    </div>
  );
}

export default logIn;
