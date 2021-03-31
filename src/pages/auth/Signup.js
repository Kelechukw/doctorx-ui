import React, { useState } from "react";
import { validateAll } from "indicative/validator";
import store from "store";
import { triggerError, triggerSuccess } from "../../components/alerts";
import { signUpAction } from "../../api";

import MainWrapper from "../../components/layout/MainWrapper";

const Signup = (props) => {
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
      lastName: "required",
      firstName: "required",
      phoneNumber: "required",
      role: "required",
      genotype: "required",
      bloodGroup: "required",
    };

    const messages = {
      "email.email": "Email must be a valid email",
      "email.required": "email is required",
      "password.required": "Password is required",
      "lastName.required": "Lastname is required",
      "firstName.required": "FirstName is required",
      "phoneNumber.required": "Phone number is required",
      "role.required": "Role is required",
      "genotype.required": "Genotype is required",
      "bloodGroup.required": "Bloodgroup is required",
    };

    validateAll(formData, rules, messages)
      .then(() => {
        processSignup();
      })
      .catch((errors) => {
        const formattedErrors = {};
        errors.forEach(
          (error) => (formattedErrors[error.field] = error.message)
        );
        setError(formattedErrors);
      });
  };

  const processSignup = async () => {
    // clear localstorage
    store.remove("token");

    setLoading(true);

    try {
      const responseData = await signUpAction(formData);
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
    <MainWrapper title="Signup">
      <div className="container">
        <div class="row">
          <div class="col-md-12 mx-auto text-center">
            <div class="header-title">
              <h2 class="wv-heading--title">Sign up</h2>
            </div>
          </div>
          <div class="col-md-7 mx-auto">
            <div class="myform form ">
              <form name="login" onSubmit={handleSubmit}>
                <div class="form-group">
                  <input
                    type="text"
                    name="firstName"
                    class="form-control my-input"
                    id="name1"
                    placeholder="First name"
                    onChange={handleInputChange}
                  />
                  <div style={{ color: "red" }}>{error && error.firstName}</div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="lastName"
                    class="form-control my-input"
                    id="name2"
                    placeholder="Last name"
                    onChange={handleInputChange}
                  />
                  <div style={{ color: "red" }}>{error && error.lastName}</div>
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    name="email"
                    class="form-control my-input"
                    id="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                  />
                  <div style={{ color: "red" }}>{error && error.email}</div>
                </div>{" "}
                <div class="form-group">
                  <input
                    type="password"
                    name="password"
                    class="form-control my-input"
                    id="password"
                    placeholder="Paassword"
                    onChange={handleInputChange}
                  />
                  <div style={{ color: "red" }}>{error && error.password}</div>
                </div>
                <div class="form-group">
                  <input
                    type="genotype"
                    name="genotype"
                    class="form-control my-input"
                    id="genotype"
                    placeholder="Genotype"
                    onChange={handleInputChange}
                  />
                  <div style={{ color: "red" }}>{error && error.genotype}</div>
                </div>
                <div class="form-group">
                  <input
                    type="bloodGroup"
                    name="bloodGroup"
                    class="form-control my-input"
                    id="bloodGroup"
                    placeholder="Blood Group"
                    onChange={handleInputChange}
                  />
                  <div style={{ color: "red" }}>
                    {error && error.bloodGroup}
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="number"
                    min="0"
                    name="phoneNumber"
                    id="phone"
                    class="form-control my-input"
                    placeholder="Phone"
                    onChange={handleInputChange}
                  />
                  <div style={{ color: "red" }}>
                    {error && error.phoneNumber}
                  </div>
                </div>
                <div class="form-group">
                  <select
                    min="0"
                    name="role"
                    id="phone"
                    class="form-control my-input"
                    onChange={handleInputChange}
                  >
                    <option>Select role</option>
                    <option value="doctor">Doctor</option>
                    <option value="user">Patient</option>
                  </select>
                  <div style={{ color: "red" }}>{error && error.role}</div>
                </div>
                <div class="text-center ">
                  <input
                    type="submit"
                    name="submit"
                    class=" btn btn-block send-button tx-tfm"
                    value={loading ? "Loading" : "Create Your Free Account"}
                  />
                </div>
                <div class="col-md-12 ">
                  <div class="login-or">
                    {/* <hr class="hr-or" /> */}
                    {/* <span class="span-or">or</span> */}
                  </div>
                </div>
                <p class="small mt-3">
                  By signing up, you are indicating that you have read and agree
                  to the{" "}
                  <a href="/" class="ps-hero__content__link">
                    Terms of Use
                  </a>{" "}
                  and <a href="/">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Signup;
