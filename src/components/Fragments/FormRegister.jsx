import InputForm from "../Elements/Input/index";
import Button from "../Elements/Button/index";

const FormRegister = () => {
    return (
      <form className="mt-4" action="">
        <InputForm
          label="Name"
          name="name"
          type="text"
          placeholder="Enter your Name"
        />
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
        <Button style="w-full bg-blue-500">Register</Button>
      </form>
    );
}

export default FormRegister;