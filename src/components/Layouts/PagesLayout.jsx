import Button from '../Elements/Button' 

const email = localStorage.getItem('email')

const PagesLayout = (props) => {
    const handleLogout = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        window.location.href = '/login'
    };
    const {children} = props
    return(
        <div>
            <div className="flex justify-between bg-blue-500 p-4 mb-4">
                <div className="container-mx-auto px-4 text-right text-white mt-1.5">
                    <p>{email}</p>
                </div>
                <div>
                    <Button style="pl-4 pr-4 bg-gray-500" onClick={handleLogout}>Keluar</Button>
                </div>
            </div>
            {children}
        </div>
    )
}

export default PagesLayout