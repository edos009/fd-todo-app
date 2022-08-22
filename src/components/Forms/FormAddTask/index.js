import React from "react";
import { Field, Form, Formik } from "formik";

const initialValues = {
  body: "",
};

const FormAddTask = ({addTask}) => {

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={addTask}>
        <Form>
          <Field type="text" name="body" />
          <input type='submit' value='Add'/>
        </Form>
      </Formik>
    </>
  );
};

export default FormAddTask;
