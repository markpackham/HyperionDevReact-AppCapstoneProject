import { useFormik } from "formik";
import * as Yup from "yup";
import "../../styles/users.css";

export default function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <h1>Login</h1>
      <hr />
      <form onSubmit={formik.handleSubmit}>
        <div className="column">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
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

          <div className="form-group">
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
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
