import * as Yup from "yup";

export const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  departmentId: "",
  urgencyId: "",
  complaint: "",
};

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().min(2),
  lastName: Yup.string(),
  email: Yup.string().email().required(),
  phone: Yup.number().min(9).integer(),
  departmentId: Yup.number().required().integer(),
  urgencyId: Yup.number().required().integer(),
  complaint: Yup.string().required().min(10),
});
