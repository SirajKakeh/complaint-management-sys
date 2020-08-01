import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Grid, Typography, Box, MenuItem, InputLabel } from "@material-ui/core";
import { TextField, Select } from "formik-material-ui";
import axios from "axios";

import { initialValues, validationSchema } from "./forms/complaint";
import CONFIG from "./config";

const departments = [
  {
    name: "IT",
    value: 0,
  },
  {
    name: "HR",
    value: 1,
  },
  {
    name: "Infrastructure",
    value: 2,
  },
  {
    name: "Other",
    value: 3,
  },
];

const urgencies = [
  {
    name: "High",
    value: 0,
  },
  {
    name: "Middle",
    value: 1,
  },
  {
    name: "low",
    value: 2,
  },
];

export default function SendComplaint() {
  const onSubmit = values => {}

  return (
    <Grid container>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ errors, touched, submitForm }) => (
          <Form className="form">
            {/* FIRST NAME & LAST NAME */}
            <Grid item container xs={12}>
              <Grid container item xs={6}>
                <Box width="100%" my={1}>
                  <Field component={TextField} name="firstName" label="First Name" />
                  {errors.firstName && touched.firstName && (
                    <Grid item xs={12}>
                      <Typography color="error">First name is required</Typography>
                    </Grid>
                  )}
                </Box>
              </Grid>
              <Grid container item xs={6}>
                <Box width="100%" my={1}>
                  <Field component={TextField} name="lastName" label="Last Name" />
                  {errors.lastName && touched.lastName && (
                    <Grid item xs={12}>
                      <Typography color="error">Last name is required</Typography>
                    </Grid>
                  )}
                </Box>
              </Grid>
            </Grid>

            {/* EMAIL & PHONE */}
            <Grid item container xs={12}>
              <Grid container item xs={6}>
                <Box width="100%" my={1}>
                  <Field component={TextField} name="email" label="Email" />
                  {errors.email && touched.email && (
                    <Grid item xs={12}>
                      <Typography color="error">Email is required</Typography>
                    </Grid>
                  )}
                </Box>
              </Grid>
              <Grid container item xs={6}>
                <Box width="100%" my={1}>
                  <Field component={TextField} name="phone" label="Phone Number" />
                  {errors.phone && touched.phone && (
                    <Grid item xs={12}>
                      <Typography color="error">{errors.phone}</Typography>
                    </Grid>
                  )}
                </Box>
              </Grid>
            </Grid>

            {/* DEPARTMENT & URGUNCY */}
            <Grid item container xs={12}>
              <Grid container item xs={6}>
                <Box width="100%" my={1}>
                  <InputLabel>Department</InputLabel>
                  <Field component={Select} name="departmentId" label="Department">
                    <MenuItem disabled value="">
                      Select
                    </MenuItem>
                    {departments.map(({ name, value }) => (
                      <MenuItem key={value} value={value}>
                        {name}
                      </MenuItem>
                    ))}
                  </Field>
                  {errors.departmentId && (
                    <Grid item xs={12}>
                      <Typography color="error">{errors.departmentId}</Typography>
                    </Grid>
                  )}
                </Box>
              </Grid>
              <Grid container item xs={6}>
                <Box width="100%" my={1}>
                  <InputLabel>Urgency</InputLabel>
                  <Field component={Select} name="urgencyId" label="Urgency">
                    <MenuItem disabled value="">
                      Select
                    </MenuItem>
                    {urgencies.map(({ name, value }) => (
                      <MenuItem key={value} value={value}>
                        {name}
                      </MenuItem>
                    ))}
                  </Field>
                  {errors.departmentId && (
                    <Grid item xs={12}>
                      <Typography color="error">{errors.departmentId}</Typography>
                    </Grid>
                  )}
                </Box>
              </Grid>
            </Grid>

            {/* COMPLAINT DETAILS */}
            <Grid item container xs={12}>
              <Box width="100%" my={2}>
                <Field component={TextField} name="complaint" label="Details" />
                {errors.complaint && touched.complaint && (
                  <Grid item xs={12}>
                    <Typography color="error">More details required</Typography>
                  </Grid>
                )}
              </Box>
            </Grid>
            <Grid container item justify="center">
              <Button type="button" onClick={submitForm} color="primary" variant="contained">
                Submit
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
    </Grid>
  );
}
