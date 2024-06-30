import css from "./ContactForm.module.css";
import * as Yup from "yup";
// import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Мінімальна кількість символів - 3")
    .max(50, "Максимальна кількість символів - 50")
    .required("Поле обов'язкове для заповнення"),
  number: Yup.number()
    .min(3, "Мінімальна кількість символів - 3")
    // .max(50, "Максимальна кількість символів - 50")
    .required("Поле обов'язкове для заповнення"),
});

export default function ContactForm({ addUser }) {
  const handleSubmit = (values, actions) => {
    console.log("handleSubmit", values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>Name</label>
        <Field type="text" name="name" className={css.input} />
        <ErrorMessage className={css.error} componen="span" name="name" />
        <label className={css.label}>Number</label>
        <Field type="tel" className={css.input} name="number" />
        <ErrorMessage className={css.error} componen="span" name="number" />
        <button onClick={addUser} className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
