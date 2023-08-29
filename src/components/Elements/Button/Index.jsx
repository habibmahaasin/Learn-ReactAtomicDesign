const Button = (props) => {
  const { children, style,  onClick = () => {}, type="button" } = props;
  return (
    <button
      className={` ${style} text-white py-2 rounded-md`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
