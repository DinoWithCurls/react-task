import React from 'react'
import SignupForm from './signupForm'
import SignupFormSuccess from './SignupFormSuccess';
const Form = () => {
    const [formIsSubmitted, setFormSubmitted] = React.useState(false);
    const submitForm = () => {
        setFormSubmitted(true);
    }
    return (
        <div>
            { !formIsSubmitted ? <SignupForm submitForm={submitForm} /> : <SignupFormSuccess/>}
        </div>
    )
}

export default Form
