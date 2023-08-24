const AuthLayout = (props) => {
    const {children, title} = props;
    return(
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-md">
                <h1 className="text-3xl font-bold underline">{title}</h1>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout;