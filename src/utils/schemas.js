import * as Yup from "yup";

export const schema_task = Yup.object({
  body: Yup.string("Input value must be string")
  .matches(/^\w[A-Za-z0-9 ,.?!]{4,40}$/, "Invalid display name")
  .required("This field is required")
})