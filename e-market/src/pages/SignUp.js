function signUp() {
  return (
    <div className="form">
      <form action="http://localhost:4000/signup" method="post">
        <fieldset>
          <legend>SIGN UP</legend>
          <label htmlFor="name">
            name:
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => e.target.value}
            />
          </label>
          <label htmlFor="lastName">
            lastName:
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={(e) => e.target.value}
            />
          </label>
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
              type="password"
              name="password"
              id="password"
              onChange={(e) => e.target.value}
            />
          </label>
          <div>
            <button>Sign Up</button>
          </div>
        </fieldset>
      </form>
      <a href="/">HOME</a>
    </div>
  );
}

export default signUp;
