import { Field, Form, Formik } from 'formik'

export const MaterialEditorForm = ({ onFormSubmit, isSumbitting }) => {

    const handleSubmit = (values, actions) => {
        onFormSubmit(values);
        actions.resetForm();
    }

    return (
        <Formik initialValues={{ title: '', link: '' }}
            onSubmit={handleSubmit}>

            <Form>
                <label>
                    Description
                    <Field name='title' type='text'/>
                </label>
                <br/>
                <label>
                    Link
                    <Field name='link' type='text' />
                </label>
                <br />
                <button type='submit' disabled={isSumbitting}>Add</button>
            </Form>   
        </Formik>
    )
}