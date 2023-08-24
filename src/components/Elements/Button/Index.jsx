const Button = (props) => {
    const { children } = props;
    return(
        <button className="w-full bg-blue-500 text-white py-2 rounded-md">
            {children}
        </button>
    );
}

export default Button;
