import Logo from '../assets/images/logo.png';


function Navbar() {
    return (
        <div className="logo border w-full">
            <img src={Logo} alt="Eduken Logo" />
        </div>
    );
}

export default Navbar;