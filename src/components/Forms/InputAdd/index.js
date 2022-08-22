import React from "react";
import { ErrorMessage, Field } from "formik";
import cx from 'classnames'

import styles from "../../Todo/Todo.module.scss";

const InputAdd = (props) => {
  const { name, ...anotherProps } = props;
  return (
    <>
      <Field type="text" name="body">
        {({ field, form, meta }) => {
          const styleInput = cx(styles.wrapper__input, {
            [styles.wrapper__input__border__error]: meta.error && meta.touched,
          });
          return (
            <input
              className={styleInput}
              {...field}
              name={name}
              {...anotherProps}
            />
          );
        }}
      </Field>
      <ErrorMessage
        className={styles.wrapper__input__error}
        name="body"
        component="div"
      />
    </>
  );
};

export default InputAdd;
