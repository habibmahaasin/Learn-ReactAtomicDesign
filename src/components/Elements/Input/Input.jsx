const Input = (props) => {
    const { type, placeholder, name } = props;
    return (
        <input
        type={type}
        className="w-full border border-gray-400 rounded-md px-2 py-2"
        placeholder={placeholder}
        name={name}
        />
    );
};

export default Input;