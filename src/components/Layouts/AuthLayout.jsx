import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center p-2">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold underline">{title}</h1>
        {children}
        <p className="mt-4">
            {type === "login" ? "Belum punya akun? " : "Sudah punya akun? "}
            {type === "login" &&(
                <Link to="/register" className="font-bold underline">
                    Daftar Disini
                </Link>
            )}
            {type === "register" &&(
                <Link to="/login" className="font-bold underline">
                    Masuk Disini
                </Link>
            )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
