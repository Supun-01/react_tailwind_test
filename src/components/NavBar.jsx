import logo from '../assets/kevinRushLogo.png'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

function NavBar() {


    return (
        <nav className=" mb-20 flex justify-between py-6 px-5">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="logo" />
            </div>
            <div className='flex justify-center gap-2 text-3xl'>
                <FaGithub />
                <FaLinkedin />
                <FaFacebook />
                <FaSquareInstagram />
                <FaSquareXTwitter />
            </div>
        </nav>

    )
}

export default NavBar;