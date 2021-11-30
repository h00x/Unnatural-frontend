import Layout from '../components/layout'
import Footer from "../components/footer"
import Button from '../components/button'
import ButtonSimple from '../components/button-simple'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import profilePicture from '../public/images/dave.jpg'

export async function getStaticProps() {
  const res = await fetch(process.env.API_URL + 'home')
  const home = await res.json()

  return {
    props: {
      home,
    },
  }
}

export default function Home({ home }) {
  return (
    <Layout>
        <div className="flex flex-col items-center justify-center m-4 mt-0 text-center rounded-xl home-content-container full-width-container-spacing p-8 bg-riptide-500 dark:bg-myGray-500">
            <div className="z-20">
                <p className="flex items-center justify-center text-4xl mb-2 transition-colors duration-500 ease-in-out">
                    { home.subtitle } <span className="text-base ml-4"><ButtonSimple href="/contact">Available for Remote Freelance Work</ButtonSimple></span>
                </p>

                <h1 className="md:text-8vw text-6xl font-bold text-creme-500 mb-8">
                    { home.title }
                </h1>

                <div className="w-full flex justify-end">
                    <p className="mb-12 md:w-1/3 w-full md:text-left transition-colors duration-500 ease-in-out">
                        I help companies create, redesign, optimize and improve their websites or SaaS
                        applications. My specialty lies in being able to do a project from start to finish by doing the
                        UX/UI design, Frontend development and Backend development. My passion is to create web experiences
                        of Unnatural beauty.
                    </p>
                </div>
                <Button href="mailto:dave@unnatural.nl" icon={<FontAwesomeIcon icon={faPaperPlane} />}>dave@unnatural.nl</Button>
            </div>
        </div>

        <div className="flex flex-col md:flex-row w-full my-32 md:px-16 px-8">
            <div className="md:w-1/2 w-full md:text-right text-center md:mr-16">
                <Image src={profilePicture} alt="Picture of Dave Hoeks" placeholder="blur" className="rounded-4xl" />
            </div>
            <div className="md:w-1/2 w-full">
                <h2 className="md:text-8xl text-6xl font-bold mb-8">About<br />me</h2>
                <p className="mb-8 md:max-w-xl">
                    I have over 10 years of experience with creating and building websites and web apps for a variety of
                    companies.
                </p>
                <ButtonSimple href="/about">Learn more about me</ButtonSimple>
            </div>
        </div>

        <div className="w-full px-8 max-w-7xl">
            <h2 className="md:text-8xl text-6xl font-bold inline-block mr-8">Projects</h2><ButtonSimple href="/portfolio">All projects</ButtonSimple>
        </div>
        <div className="flex flex-col justify-center md:flex-row w-full md:my-32 my-16 px-8">
            <div className="flex flex-col items-center md:w-2/3 w-full md:mr-16 max-w-7xl">
                <div className="lg:w-3/4 md:w-full w-full h-80 relative">
                    <Image src={profilePicture} layout='fill' objectFit='cover' objectPosition='bottom' alt="Picture of Dave Hoeks" placeholder="blur" className="rounded-2xl" />
                </div>
                <div className="lg:w-1/2 md:w-3/4 mt-12">
                    <p className="font-bold mb-4">E-zorg</p>
                    <h2 className="text-3xl font-bold mb-4">Design, corporate identity and development of website</h2>
                    <p className="mb-8">E-Zorg (part of KPN) needed an update in their corporate identity. I made a redesign for their website, developed it with Wordpress as a backend as requested by E-Zorg. I've also redesigned the business carts, official writing papers, stickers, presentation slides, email templates and made the brand identity book.</p>
                    <ButtonSimple href="#">Go to project</ButtonSimple>
                </div>
            </div>
            <div className="flex flex-col items-center md:w-1/3 w-full mt-32 max-w-3xl">
                <div className="lg:w-3/4 md:w-full w-full h-40 relative">
                    <Image src={profilePicture} layout='fill' objectFit='cover' objectPosition='bottom' alt="Picture of Dave Hoeks" placeholder="blur" className="rounded-2xl" />
                </div>
                <div className="lg:w-1/2 md: 3/4 mt-12">
                    <p className="font-bold mb-4">E-zorg</p>
                    <h2 className="text-3xl font-bold mb-4">Design, corporate identity and development of website</h2>
                    <p className="mb-8">E-Zorg (part of KPN) needed an update in their corporate identity. I made a redesign for their website, developed it with Wordpress as a backend as requested by E-Zorg. I've also redesigned the business carts, official writing papers, stickers, presentation slides, email templates and made the brand identity book.</p>
                    <ButtonSimple href="#">Go to project</ButtonSimple>
                </div>
            </div>
        </div>

        <h2 className="md:text-8xl text-6xl font-bold text-center mb-16">Services<br />& Contact</h2>
        <div className="flex items-start justify-center flex-col md:flex-row w-full xl:w-2/3 px-8">
            <div className="max-w-3xl md:w-1/2 bg-pink-500 dark:bg-pink-800 rounded-2xl p-14">
                <h3 className="text-3xl mb-4">I build & design visually pleasing web experiences</h3>
                <p className="pb-8 mb-8 border-b-2 border-pink-600 dark:border-pink-900">My passion is to help companies create, redesign, optimize and improve their websites or SaaS applications.</p>
                <div className="text-right">
                    <ButtonSimple href="/about">Learn more about me</ButtonSimple>
                </div>
            </div>
            <div className="max-w-3xl md:w-1/2 md:pl-14 pl-0 pt-16 md:pt-32">
                <h5 className="mb-4">CONTACT</h5>
                <h3 className="text-3xl mb-4">Interested?<br />Lets work together!</h3>
                <p className="mb-8">I'm open to remote freelance positions. Feel free to reach out to me. I'd love to help you.</p>
                <Button href="mailto:dave@unnatural.nl" icon={<FontAwesomeIcon icon={faEnvelope} />}>dave@unnatural.nl</Button>
            </div>
        </div>
    </Layout>
  )
}
