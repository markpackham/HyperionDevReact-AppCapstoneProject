import { useFormik } from "formik";
import * as Yup from "yup";
import "../../styles/users.css";

export default function LoginPage() {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
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
          <label htmlFor="lastName">Username</label>
          <input
            id="userName"
            name="userName"
            type="text"
            placeholder="Username"
            {...formik.getFieldProps("userName")}
            className="form-control m-2"
          />
          {formik.touched.userName && formik.errors.userName ? (
            <div className="fw-bold text-danger mb-1">
              {formik.errors.userName}
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

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
