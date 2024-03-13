import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";

function FormSignUp() {
  const [submit, setSubmit] = useState(false);

  // Handler function to submit the form data to Flask backend
  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(values);
    try {
      const response = await fetch("/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: values,
      });

      const data = await response.json();
      console.log(response);
      console.log(data); // log the response from Flask
      setSubmit(true); // set submit state to true
    } catch (error) {
      console.error("Error:", error);
    }
    setSubmitting(false);
  };

  const stateSelectItems = [
    { label: "Alabama", value: "AL" },
    { label: "Alaska", value: "AK" },
    { label: "American Samoa", value: "AS" },
    { label: "Arizona", value: "AZ" },
    { label: "Arkansas", value: "AR" },
    { label: "California", value: "CA" },
    { label: "Colorado", value: "CO" },
    { label: "Connecticut", value: "CT" },
    { label: "Delaware", value: "DE" },
    { label: "District Of Columbia", value: "DC" },
    { label: "Florida", value: "FL" },
    { label: "Georgia", value: "GA" },
    { label: "Guam", value: "GU" },
    { label: "Hawaii", value: "HI" },
    { label: "Idaho", value: "ID" },
    { label: "Illinois", value: "IL" },
    { label: "Indiana", value: "IN" },
    { label: "Iowa", value: "IA" },
    { label: "Kansas", value: "KS" },
    { label: "Kentucky", value: "KY" },
    { label: "Louisiana", value: "LA" },
    { label: "Maine", value: "ME" },
    { label: "Maryland", value: "MD" },
    { label: "Massachusetts", value: "MA" },
    { label: "Michigan", value: "MI" },
    { label: "Minnesota", value: "MN" },
    { label: "Mississippi", value: "MS" },
    { label: "Missouri", value: "MO" },
    { label: "Montana", value: "MT" },
    { label: "Nebraska", value: "NE" },
    { label: "Nevada", value: "NV" },
    { label: "New Hampshire", value: "NH" },
    { label: "New Jersey", value: "NJ" },
    { label: "New Mexico", value: "NM" },
    { label: "New York", value: "NY" },
    { label: "North Carolina", value: "NC" },
    { label: "North Dakota", value: "ND" },
    { label: "Northern Mariana Islands", value: "MP" },
    { label: "Ohio", value: "OH" },
    { label: "Oklahoma", value: "OK" },
    { label: "Oregon", value: "OR" },
    { label: "Pennsylvania", value: "PA" },
    { label: "Puerto Rico", value: "PR" },
    { label: "Rhode Island", value: "RI" },
    { label: "South Carolina", value: "SC" },
    { label: "South Dakota", value: "SD" },
    { label: "Tennessee", value: "TN" },
    { label: "Texas", value: "TX" },
    { label: "United States Minor Outlying Islands", value: "UM" },
    { label: "Utah", value: "UT" },
    { label: "Vermont", value: "VT" },
    { label: "Virgin Islands", value: "VI" },
    { label: "Virginia", value: "VA" },
    { label: "Washington", value: "WA" },
    { label: "West Virginia", value: "WV" },
    { label: "Wisconsin", value: "WI" },
    { label: "Wyoming", value: "WY" },
  ];

  return (
    <>
      <div className="form-container">
        <h2 className="registraion-form-text">Registration Form</h2>
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            state: "",
            zipcode: "",
            username: "",
            password: "",
            confirm_password: "",
          }}
          validationSchema={Yup.object({
            first_name: Yup.string().required("First name is required"),
            last_name: Yup.string().required("Last name is required"),
            state: Yup.string().required("State is required"),
            zipcode: Yup.string().required("Zip code is required"),
            username: Yup.string().required("Username is required"),
            password: Yup.string().required("Password is required"),
            confirm_password: Yup.string()
              .oneOf([Yup.ref("password"), null], "Passwords must match")
              .required("Confirm Password is required"),
          })}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <Field
                  type="text"
                  id="first_name"
                  name="first_name"
                  className={`form-control${
                    errors.first_name && touched.first_name ? " is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  name="first_name"
                  className="error-message"
                  component="div"
                />
              </div>
              <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <Field
                  type="text"
                  id="last_name"
                  name="last_name"
                  className={`form-control${
                    errors.last_name && touched.last_name ? " is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  name="last_name"
                  className="error-message"
                  component="div"
                />
              </div>
              <div className="form-group">
                <label htmlFor="state">State</label>
                <Field
                  as="select"
                  id="state"
                  name="state"
                  className={`form-control${
                    errors.state && touched.state ? " is-invalid" : ""
                  }`}
                >
                  <option value="">Select a state</option>
                  {stateSelectItems.map((state) => (
                    <option key={state.value} value={state.value}>
                      {state.label}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="state"
                  className="error-message"
                  component="div"
                />
              </div>
              <div className="form-group">
                <label htmlFor="zipcode">Zip Code</label>
                <Field
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  className={`form-control${
                    errors.zipcode && touched.zipcode ? " is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  name="zipcode"
                  className="error-message"
                  component="div"
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  className={`form-control${
                    errors.username && touched.username ? " is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  name="username"
                  className="error-message"
                  component="div"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className={`form-control${
                    errors.password && touched.password ? " is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  name="password"
                  className="error-message"
                  component="div"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  className={`form-control${
                    errors.confirm_password && touched.confirm_password
                      ? " is-invalid"
                      : ""
                  }`}
                />
                <ErrorMessage
                  name="confirm_password"
                  className="error-message"
                  component="div"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <hr className="my-5 shorter-hr" />
    </>
  );
}

export default FormSignUp;
