import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import store from "store";
import { validateAll } from "indicative/validator";
// import lolaImage from "../../assets/images/lola.png";
import { triggerError, triggerSuccess } from "../../components/alerts";
import { signInAction } from "../../api";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import PageHelmet from "../../components/pageHelmet";

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
      userId: "required",
      password: "required",
    };

    const messages = {
      "userId.required": "User ID is required",
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

    // processLogin();
  };

  const processLogin = async () => {
    // clear localstorage
    store.remove("accessToken");

    setLoading(true);

    try {
      const { userId, password } = formData;

      const payload = {
        userIdentity: userId,
        password,
      };

      const responseData = await signInAction(payload);
      setLoading(false);

      store.set("lola_user", responseData.data);
      store.set("accessToken", responseData.data["accessToken"]);
      triggerSuccess(responseData.message);
      props.history.push("/tenant");
    } catch (err) {
      setLoading(false);
      triggerError(err);
    }
  };

  return (
    <>
      <PageHelmet title="Login" />
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 row">
            <div className="login100-pic col-md-6">
              {/* <img src={lolaImage} alt="IMG" width="100%" /> */}
            </div>
            <div className="login100-form col-md-6">
              <form onSubmit={handleSubmit}>
                <span className="login100-form-title font-weight-bolder">
                  LOLA
                </span>
                <span className="login100-form-sub">
                  Administrator Management Interface
                </span>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100"
                    type="text"
                    name="userId"
                    placeholder="Email"
                    onChange={handleInputChange}
                  />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <FaIcon icon="envelope" />
                  </span>
                </div>
                {error && <div className="red-text">{error.userId}</div>}
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <input
                    className="input100"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleInputChange}
                  />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <FaIcon icon="unlock" />
                  </span>
                </div>
                {error && <div className="red-text">{error.password}</div>}
                <div className="container-login100-form-btn">
                  <button className="login100-form-btn">
                    {" "}
                    {loading ? (
                      <FaIcon icon="spinner" className="fa-spin fa-2x" />
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
                <div className="text-center p-t-12">
                  <span className="txt1 m-r-5">Forgot</span>
                  <a className="txt2" href="/">
                    Password?
                  </a>
                </div>
                <div className="text-center p-t-50">
                  <Link className="txt2" to="/">
                    Create your Account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Login);
