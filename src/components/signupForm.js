import React from "react";
import { useForm } from "react-hook-form";
const SignupForm = ({ submitForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger
  } = useForm();
  const [values, setValues] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleFNChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLNChange = (event) => {
    setLastName(event.target.value);
  };
  const handleEMChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePWChange = (event) => {
    setPassword(event.target.value);
  };

  const [dataIsCorrect, setDataIsCorrect] = React.useState(false);
  const onSubmit = (event) => {
    handleChange();
    setDataIsCorrect(true);
  };
  const handleChange = () => {
    if (firstname || lastname || email || password) {
      setValues({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      });
    }
  };
  console.log(errors);
  React.useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors]);
  return (
    <div className="container">
      <div className="text-block">
        <div className="caption">Learn to Code by</div>
        <div className="caption">watching others</div>
        <div className="smallcaption">
          See how experienced developers solve problems in real-time.
        </div>
        <div className="smallcaption">
          Watching scripted tutorials is great, but understanding how
        </div>
        <div className="smallcaption">developers think is invaluable</div>
      </div>
      <div className="app-wrapper">
        <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
          <div className="firstname">
            <input
              className="input"
              placeholder="First Name"
              type="text"
              defaultValue={firstname}
              onChange={handleFNChange}
              {...register("firstname", { required: "First Name is required" })}
              onKeyUp={()=>trigger("firstname")}
            />
            {errors.firstname && (
              <p className="error">{errors.firstname.message}</p>
            )}
          </div>
          <div className="lastname">
            <input
              className="input"
              placeholder="Last Name"
              type="text"
              defaultValue={lastname}
              onChange={handleLNChange}
              {...register("lastname", { required: "Last Name is required" })}
              onKeyUp={()=>trigger("lastname")}
            />
            {errors.lastname && (
              <p className="error">{errors.lastname.message}</p>
            )}
          </div>
          <div className="email">
            <input
              className="input"
              placeholder="Email"
              type="text"
              defaultValue={email}
              onChange={handleEMChange}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              onKeyUp={()=>trigger("email")}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div className="password">
            <input
              className="input"
              placeholder="Password"
              type="password"
              defaultValue={password}
              minLength="8"
              onChange={handlePWChange}
              {...register("password", {
                required: "Password is required",
              })}
              onKeyUp={()=>trigger("password")}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>
          <div className="submit-wrapper" >
            <button
              className="submit"
              type="submit">CLAIM YOUR FREE TRIAL</button>
          </div>
          <p className="terms">
            By clicking the button, you are agreeing to our{" "}
            <button className="termsbox">Terms and Services</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
