import InputForm from "../Elements/Input/index";
import Button from "../Elements/Button/index";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('email', e.target.email.value)
    localStorage.setItem('password', e.target.password.value)
    window.location.href = "/products";
  };

  return (
    <form className="mt-4" onSubmit={handleLogin}>
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your Email"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your Password"
      />
      <Button style="w-full bg-blue-500" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
