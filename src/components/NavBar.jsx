import logo from "../assets/stLogo.png"
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import { GitHubLink } from '../constants';
import { LinkedInLink } from "../constants";
import { FacebookLink } from "../constants";
import { WhatsAppLink } from "../constants";

function NavBar() {


    return (
        <nav className="mb-20 flex justify-between py-6 px-5">
            <div className="flex flex-shrink-0 items-center">
                <img className='mx-2 w-12' src={logo} alt="logo" />
            </div>
            <div className='flex justify-center gap-2 text-4xl'>
                <a href={GitHubLink} target="_blank"><FaGithub /></a>
                <a href={LinkedInLink} target="_blank"><FaLinkedin /></a>
                <a href={FacebookLink} target="_blank"><FaFacebook /></a>
                <a href={WhatsAppLink} target="_blank"><FaWhatsapp /></a>
                <a href="#" target="_blank"><SiGmail /></a>
            </div>
        </nav>

    )
}

export default NavBar;