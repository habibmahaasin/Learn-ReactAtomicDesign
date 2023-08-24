import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

const FormLogin = () => {
    return (
      <form className="mt-4" action="">
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
        <Button>Login</Button>
      </form>
    );
}

export default FormLogin;