import ButtonSimple from "./button-simple";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faDribbble, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Button from "./button";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center w-full flex-1">
            <div className="flex md:flex-row flex-col xl:w-7/12 text-center my-16 border-b-2 border-t-2 border-creme-600 py-4 px-8 text-xs footer-width">
                <div className="w-full md:w-1/3">
                    <a href="https://github.com/h00x" target="_blank" rel="noopener" className="mr-4 hover:underline"><FontAwesomeIcon icon={faGithub} /> Github</a>
                    <a href="https://github.com/h00x" target="_blank" rel="noopener" className="mr-4 hover:underline"><FontAwesomeIcon icon={faLinkedin} /> Linkedin</a>
                    <a href="https://dribbble.com/Hoeks/" target="_blank" rel="noopener" className="hover:underline"><FontAwesomeIcon icon={faDribbble} /> Dribbble</a>
                </div>
                <div className="px-12 md:my-0 my-4 w-full md:w-1/3">
                    © Unnatural.nl - Dave Hoeks
                </div>
                <div className="w-full md:w-1/3">
                    <a href="mailto:dave@unnatural.nl" target="_blank" rel="noopener" className="hover:underline"><FontAwesomeIcon icon={faEnvelope} /> dave@unnatural.nl</a>
                </div>
            </div>
        </footer>
    )
}
