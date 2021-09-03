import React from "react";
import validation from "./validation";

const SignupForm = ({submitForm}) => {
    const [values, setValues] = React.useState({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
    });
    //const createUser = (values) => {
    //  fetch('https://jsonplaceholder.typicode.com/users', {
    //    method:'POST',
    //    body: JSON.stringify({
    //      first_name: values.firstname,
    //      last_name: values.lastname,
    //      email: values.email,
    //      password: values.password,
    //    }), headers: {'Content-Type': 'application/json; charset=UTF-8'},
    //  }).then(response=>response.json()).then((json)=> console.log(json));
    //}
    const [errors, setErrors] = React.useState({});
    const [dataIsCorrect, setDataIsCorrect] = React.useState(false);
    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true)
    }
    const handleChange = (event) => {git 
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }
    React.useEffect(()=>{
      if(Object.keys(errors).length ===0 && dataIsCorrect) {
        submitForm(true);
      }
    },[errors]);
    return (
    <div className="container">
      <div className="text-block">
        <div className="caption">Learn to Code by</div>
        <div className="caption">watching others</div>
        <div className="smallcaption">See how experienced developers solve problems in real-time.</div>
        <div className="smallcaption">Watching scripted tutorials is great, but understanding how</div>
        <div className="smallcaption">developers think is invaluable</div>
      </div>
      <div className="app-wrapper">
        <form className="form-wrapper">
          <div className="firstname">
            <input className="input" placeholder="First Name"type="text" defaultValue={values.firstname} onChange={()=>handleChange}/>
            {errors.firstname && <p className="error">{errors.firstname}</p>}
          </div>
          <div className="lastname">
            <input className="input" placeholder="Last Name" type="text" defaultValue={values.lastname} onChange={()=>handleChange}/>
            {errors.lastname && <p className="error">{errors.lastname}</p>}
          </div>
          <div className="email">
            <input className="input" placeholder="Email"type="text" defaultValue={values.email} onChange={()=>handleChange}/>
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="password">
            <input className="input" placeholder="Password" type="password" defaultValue={values.password} onChange={()=>handleChange}/>
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="submit-wrapper" onClick={handleFormSubmit}>
              <button className="submit">CLAIM YOUR FREE TRIAL</button>
          </div>
          <p className='terms'>By clicking the button, you are agreeing to our <button className='termsbox'>Terms and Services</button></p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
{
  /**/
}
