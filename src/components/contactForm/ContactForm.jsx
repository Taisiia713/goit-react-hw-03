import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";

export default function ContactForm() {
  const handleSubmit = (values, actions) => {
    console.log("handleSubmit", values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: "",
        number: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>Name</label>
        <Field type="text" name="username" className={css.input} />
        <label className={css.label}>Number</label>
        <Field type="text" className={css.input} name="number" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
