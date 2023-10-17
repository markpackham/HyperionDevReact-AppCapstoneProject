import { useFormik } from "formik";
import * as Yup from "yup";
import "../../styles/users.css";

export default function RegisterPage() {
  // Formik used for user feedback
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    // Yup used for validating objects entered
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
          "Must Contain At Least 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        )
        .required("Required"),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <h1>Register</h1>
      <hr />
      <h5>
        Passwords must be at least 8 characters long, have at least 1 upper case
        and 1 lower case letter and have at least 1 special character eg `!`.
      </h5>
      <form onSubmit={formik.handleSubmit} className="mt-3">
        <div className="column">
          <div className="form-group col">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              {...formik.getFieldProps("firstName")}
              className="form-control m-2"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="fw-bold text-danger mb-1">
                {formik.errors.firstName}
              </div>
            ) : null}
          </div>

          <div className="column">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              {...formik.getFieldProps("lastName")}
              className="form-control m-2"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="fw-bold text-danger mb-1">
                {formik.errors.lastName}
              </div>
            ) : null}
          </div>

          <div className="column">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Email"
              {...formik.getFieldProps("email")}
              className="form-control m-2"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="fw-bold text-danger mb-1">
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          <div className="column">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              {...formik.getFieldProps("password")}
              className="form-control m-2"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="fw-bold text-danger mb-1">
                {formik.errors.password}
              </div>
            ) : null}
          </div>

          <div className="column">
            <label htmlFor="passwordConfirm">Password Again</label>
            <input
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              placeholder="Re-Enter Password"
              {...formik.getFieldProps("passwordConfirm")}
              className="form-control m-2"
            />
            {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
              <div className="fw-bold text-danger mb-1">
                {formik.errors.passwordConfirm}
              </div>
            ) : null}
          </div>
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
