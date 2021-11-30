import Layout from "../components/layout";
import profilePicture from "../public/images/dave.jpg";
import Image from "next/image";
import ButtonSimple from "../components/button-simple";
import Button from "../components/button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope, faSearch, faPencilRuler, faDrawPolygon, faCode, faRecycle } from "@fortawesome/free-solid-svg-icons";

export default function About() {
    return (
        <Layout>
            <div className="w-full max-w-7xl md:px-16 px-8 mb-16 mt-32">
                <h1 className="font-bold lg:text-10vw text-8xl">Hi!<br />I'm Dave</h1>
                <h2 className="text-4xl font-bold">I build & design web experiences</h2>
            </div>

            <div className="flex flex-col-reverse md:flex-row flex-col w-full max-w-7xl md:px-16 px-8 z-20">
                <div className="md:w-1/2 w-full md:mr-16">
                    <h4 className="text-2xl font-bold mb-2">My name is Dave Hoeks, I'm a freelance Web Developer / Designer living in the Randstad, The Netherlands.</h4>
                    <p>I have over 10 years of experience with creating and building websites and web apps for a variety of
                        companies. I help companies create, redesign, optimize and improve their websites or SaaS
                        applications. My specialty lies in being able to do a project from start to finish by doing the UX/UI
                        design, Frontend development and Backend development. My goals during a project is to make sure there
                        is good communication and there are clear goals set and the end result is of Unnatural beauty.
                    </p>
                </div>
                <div className="md:w-1/2 w-full mb-8 md:mb-0 text-center">
                    <Image src={profilePicture} alt="Picture of Dave Hoeks" placeholder="blur" className="rounded-4xl" />
                </div>
            </div>

            <div className="flex md:flex-row flex-col items-center w-full max-w-7xl z-10 lg:-mt-16 mt-8 px-4 xl:px-0">
                <div className="md:w-2/3 w-full md:mr-16 bg-pink-500 dark:bg-pink-800 rounded-2xl p-8 md:p-14 transition-colors duration-500 ease-in-out">
                    <h2 className="text-4xl font-bold mb-2">My services</h2>
                    <p className="mb-8">In the past 10 years I've helped big and small companies with their customer facing web experiences.</p>
                    <ul className="list-disc flex flex-wrap">
                        <li className="md:w-1/2 w-full mb-4 pr-8">
                            <h4 className="text-2xl font-bold">Websites</h4>
                            <p>Tell your story or sell your products to your users and customers in a digital environment.</p>
                        </li>
                        <li className="md:w-1/2 w-full mb-4 pr-8">
                            <h4 className="text-2xl font-bold">Saas applications</h4>
                            <p>Get your next big idea build in form of application or feature.</p>
                        </li>
                        <li className="md:w-1/2 w-full mb-4 pr-8">
                            <h4 className="text-2xl font-bold">UX/UI design</h4>
                            <p>An idea will stay an idea if it doesn't get designed.</p>
                        </li>
                        <li className="md:w-1/2 w-full mb-4 pr-8">
                            <h4 className="text-2xl font-bold">Branding</h4>
                            <p>A story needs a brand that gets recognized by its customers and users.</p>
                        </li>
                        <li className="md:w-1/2 w-full mb-4 pr-8">
                            <h4 className="text-2xl font-bold">Email HTML</h4>
                            <p>Reach the inbox of your customers and users with a perfectly coded email template.</p>
                        </li>
                        <li className="md:w-1/2 w-full mb-4 pr-8">
                            <h4 className="text-2xl font-bold">A friendly smile</h4>
                            <p>A free service and is included with all the other services.</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex md:flex-row flex-col w-full max-w-7xl px-8 md:px-16 mt-32">
                <div className="md:w-1/2 w-full">
                    <h2 className="text-8xl font-bold mb-4">Skills</h2>
                    <p className="mb-8 font-bold text-xl">I have developed myself in the following skills</p>
                    <ul className="list-disc flex flex-wrap">
                        <li className="w-1/2 mb-4 pr-8">
                            Javascript
                        </li>
                        <li className="w-1/2 mb-4 pr-8">
                            PHP
                        </li>
                        <li className="w-1/2 mb-4 pr-8">
                            MySQL
                        </li>
                        <li className="w-1/2 mb-4 pr-8">
                            CSS
                        </li>
                        <li className="w-1/2 mb-4 pr-8">
                            API design
                        </li>
                        <li className="w-1/2 mb-4 pr-8">
                            JAM Stack
                        </li>
                        <li className="w-1/2 mb-4 pr-8">
                            Static sites
                        </li>
                        <li className="w-1/2 mb-4 pr-8">
                            HTML
                        </li>
                        <li className="w-1/2 mb-4 pr-8">
                            React
                        </li>
                        <li className="w-1/2 mb-4 pr-8">
                            GIT
                        </li>
                        <li className="w-1/2 mb-4 pr-8">
                            UX/UI
                        </li>
                        <li className="w-1/2 mb-4 pr-8">
                            Sketch
                        </li>
                        <li className="w-1/2 mb-4 pr-8">
                            Interface Design
                        </li>
                        <li className="w-1/2 mb-4 pr-8">
                            Wireframing
                        </li>
                        <li className="w-1/2 mb-4 pr-8">
                            Web Design
                        </li>
                        <li className="w-1/2 mb-4 pr-8">
                            Email HTML
                        </li>
                    </ul>
                </div>
                <div className="md:w-1/2 w-full">
                    <h2 className="text-8xl font-bold mb-4">Hobbies</h2>
                    <p className="mb-8 font-bold text-xl">You can't live a healthy life without some fun hobbies</p>
                    <ul className="list-disc flex flex-wrap">
                        <li className="w-1/2 mb-4 pr-8">
                            BBQ
                        </li>
                        <li className="w-1/2 mb-4 pr-8">
                            Cooking
                        </li>
                        <li className="w-1/2 mb-4 pr-8">
                            Surf
                        </li>
                        <li className="w-1/2 mb-4 pr-8">
                            Beekeeping
                        </li>
                        <li className="w-1/2 mb-4 pr-8">
                            Generative art
                        </li>
                        <li className="w-1/2 mb-4 pr-8">
                            Coding
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-riptide-500 dark:bg-riptide-900 flex justify-center mt-32 mb-16 py-16 full-width-container-spacing rounded-xl">
                <div className="px-8 md:px-16 w-full max-w-7xl">
                    <h2 className="text-8xl font-bold mb-2">Process</h2>
                    <p className="mb-16 font-bold text-2xl">With the right tools, skills and processes you can create world changing products</p>
                    <div className="flex md:flex-row flex-col w-full max-w-7xl">
                        <div className="md:w-1/5 w-full mr-8 mb-8">
                            <FontAwesomeIcon icon={faSearch} className="text-2xl mb-8" />
                            <h3 className="font-bold text-3xl mb-4">1. Research</h3>
                            <p>Getting to know the product and industry. In this step I get to know you and the business you operate. I will do research on the subject and create a action plan.</p>
                        </div>
                        <div className="md:w-1/5 w-full mr-8 mb-8">
                            <FontAwesomeIcon icon={faPencilRuler} className="text-2xl mb-8" />
                            <h3 className="font-bold text-3xl mb-4">2. Prototype</h3>
                            <p>A prototype of the site, app or feature is an important tool for the next step in the process. It lets you look at the content without distractions.</p>
                        </div>
                        <div className="md:w-1/5 w-full mr-8 mb-8">
                            <FontAwesomeIcon icon={faDrawPolygon} className="text-2xl mb-8" />
                            <h3 className="font-bold text-3xl mb-4">3. Design</h3>
                            <p>The prototype will come to life in a design. The right colors and shapes are mixed in with the content and out comes a designed product that isn't functional yet.</p>
                        </div>
                        <div className="md:w-1/5 w-full mr-8 mb-8">
                            <FontAwesomeIcon icon={faCode} className="text-2xl mb-8" />
                            <h3 className="font-bold text-3xl mb-4">4. Build</h3>
                            <p>Functionality is added to the project by coding the design to a working product defined by the previous steps. With this step the project will get a soul and start its life.</p>
                        </div>
                        <div className="md:w-1/5 w-full">
                            <FontAwesomeIcon icon={faRecycle} className="text-2xl mb-8" />
                            <h3 className="font-bold text-3xl mb-4">5. Iterate</h3>
                            <p>After the project is delivered you need to improve the project with incremental changes. The right testing tools will show what needs to be improved.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-start justify-center flex-col md:flex-row w-full xl:w-2/3 px-8">
                <div className="max-w-3xl md:w-1/2 md:pl-14 pl-0">
                    <h5 className="text-xl mb-4">Interested?</h5>
                    <h3 className="text-6xl font-bold mb-4">Lets work together!</h3>
                    <p className="mb-8">I'm open to remote freelance positions. Feel free to reach out to me. I'd love to help you.</p>
                    <Button href="mailto:dave@unnatural.nl" icon={<FontAwesomeIcon icon={faEnvelope} />}>dave@unnatural.nl</Button>
                </div>
            </div>
        </Layout>
    )
}
