import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import PageHelmet from "../../components/pageHelmet";
import store from "store";
import { validateAll } from "indicative/validator";
import { triggerError, triggerSuccess } from "../../components/alerts";
import { signInAction } from "../../api";

const Login = (props) => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    const rules = {
      email: "required",
      password: "required",
    };

    const messages = {
      "email.email": "Email must be a valid email",
      "email.required": "email is required",
      "password.required": "Password is required",
    };

    validateAll(formData, rules, messages)
      .then(() => {
        processLogin();
      })
      .catch((errors) => {
        const formattedErrors = {};
        errors.forEach(
          (error) => (formattedErrors[error.field] = error.message)
        );
        setError(formattedErrors);
      });
  };

  const processLogin = async () => {
    // clear localstorage
    store.remove("token");

    setLoading(true);

    try {
      const responseData = await signInAction(formData);
      setLoading(false);

      store.set("spn_user", responseData.data);
      store.set("token", responseData.data["token"]);
      triggerSuccess(responseData.message);
      props.history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      triggerError(err);
    }
  };
  return (
    <>
      <PageHelmet title="Login" />

      <div id="login">
        <h3 class="text-center text-white pt-5">Doctors Login</h3>
        <div class="container">
          <div
            id="login-row"
            class="row justify-content-center align-items-center"
          >
            <div id="login-column" class="col-md-6">
              <div id="login-box" class="col-md-12">
                <form id="login-form" class="form" onSubmit={handleSubmit}>
                  <h3 class="text-center text-info">Login</h3>
                  <div class="form-group">
                    <label for="email" class="text-info">
                      Username:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="email"
                      id="email"
                      onChange={handleInputChange}
                      class="form-control"
                    />
                    <div style={{ color: "red" }}>{error && error.email}</div>
                  </div>
                  <div class="form-group">
                    <label for="password" class="text-info">
                      Password:
                    </label>
                    <br />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={handleInputChange}
                      class="form-control"
                    />
                    <div style={{ color: "red" }}>
                      {error && error.password}
                    </div>
                  </div>
                  <div class="form-group">
                    {/* <label for="remember-me" class="text-info">
                      <span>Remember me</span>{" "}
                      <span>
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                        />
                      </span>
                    </label> */}
                    <br />
                    <input
                      type="submit"
                      name="submit"
                      class="btn btn-info btn-md"
                      value={loading ? "Loading" : "Submit"}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Login);
