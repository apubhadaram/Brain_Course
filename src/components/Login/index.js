import Form from "../Form";

const Login = () => {
  const inputs = [{ type: "text", name: "email", placeholder: "Email Address" }]
  const pw = [{ name: "password", placeholder: "Password" }]

  return (
    <Form title="Login" inputs={inputs} pw={pw} auth={(user) => { console.log(user) }} />
    // <section id="login">
    //   <Title />
    //   <div className="">
    //     <form>
    //       <input
    //         type="email"
    //         name="userEmail"
    //         id="userEmail"
    //         className="form-control mb-3"
    //         placeholder="Email Address"
    //         required
    //       />

    //       <div className="inptPass">
    //         <input
    //           type="password"
    //           name="password1"
    //           id="password1"
    //           className="form-control mb-3"
    //           placeholder="Password"
    //           required
    //         />
    //         <i className="fas fa-eye-slash"></i>
    //       </div>
    //       <button
    //         id="loginSubmit"
    //         type="submit"
    //         className="btn btn-block btn-primary my-5"
    //       >
    //         Login
    //       </button>
    //       <p>
    //         Don't have an account? <a href="#register">Sign Up</a>
    //       </p>
    //     </form>
    //   </div>
    // </section>
  );
};

export default Login;
