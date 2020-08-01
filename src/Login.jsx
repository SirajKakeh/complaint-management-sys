import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Button, Grid, Typography } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import axios from "axios";

import { initialValues, validationSchema } from "./forms/login";
import CONFIG from "./config";

export default function Login({ setToken }) {
  const history = useHistory();
  const onSubmit = values =>
    axios
      .post(CONFIG.api.baseUrl + "/login", values)
      .then(({ data }) => {
        setToken(data.token);
        history.push(data.userRole === "admin" ? "/complaints" : "/create-complaint")
      })
      .catch(console.error);

  return (
    <Grid container>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ errors, touched, submitForm }) => (
          <Form className="form">
            <Typography color="primary">Please enter your username and password</Typography>
            <div>
              <Field component={TextField} name="username" label="Username" />
              {errors.username && touched.username && (
                <Grid item xs={12}>
                  <Typography color="error">Username is required</Typography>
                </Grid>
              )}
            </div>
            <div>
              <Field component={TextField} name="password" type="password" label="Password" />
              {errors.password && touched.password && (
                <Grid item xs={12}>
                  <Typography color="error">Password is required</Typography>
                </Grid>
              )}
            </div>
            <Button type="button" onClick={submitForm}>
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Grid>
  );
}
