import ButtonSimple from "./button-simple";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Button from "./button";

export default function Footer() {
    return (
        <footer className="w-full xl:w-2/3 px-8">
            <h2 className="md:text-8xl text-6xl font-bold text-center mb-16">Services<br />& Contact</h2>
            <div className="flex items-start flex-col md:flex-row">
                <div className="w-full md:w-1/2 bg-pink-500 rounded-2xl p-14">
                    <h3 className="text-3xl mb-4">I’m building digital experience and interface</h3>
                    <p className="pb-8 mb-8 border-b-2 border-pink-600">Focused on digital design over these years I helped companies and growing startup build apps and websites of all sorts.</p>
                    <div className="text-right">
                        <ButtonSimple href="/about">Learn more about me</ButtonSimple>
                    </div>
                </div>
                <div className="w-full md:w-1/2 pl-14 pt-16 md:pt-32">
                    <h5 className="mb-4">CONTACT</h5>
                    <h3 className="text-3xl mb-4">Interested?<br />Lets Get In Touch!</h3>
                    <p className="mb-8">I’m not really active on Linkedin but you can stay in touch with me on Twitter. I post some of my work on Dribbble and some experiments on Codepen and Instagram.</p>
                    <Button href="mailto:dave@unnatural.nl" icon={<FontAwesomeIcon icon={faEnvelope} />}>dave@unnatural.nl</Button>
                </div>
            </div>
            <div className="my-16">
                Footer
            </div>
        </footer>
    )
}