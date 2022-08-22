import React from "react";
import { Form, Formik } from "formik";

import InputAdd from "../InputAdd";
import { schema_task } from "../../../utils/schemas";

import styles from "../../Todo/Todo.module.scss";

const initialValues = {
  body: "",
};

const FormAddTask = ({ addTask }) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={addTask}
        validationSchema={schema_task}
      >
        <Form className={styles.wrapper__form}>
          <InputAdd name="body" text="text" placeholder="Enter your task..." />
          <input className={styles.wrapper__btn__add} type="submit" value="" />
        </Form>
      </Formik>
    </>
  );
};

export default FormAddTask;
