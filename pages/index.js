import Layout from '../components/layout'
import Footer from "../components/footer"
import Button from '../components/button'
import ButtonSimple from "../components/button-simple";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

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
        <div className="flex flex-col items-center justify-center m-4 text-center rounded-xl home-content-container p-8 bg-riptide-500 dark:bg-myGray-500">
            <div className="z-20">
                <p className="flex items-center justify-center text-4xl mb-2">
                    { home.subtitle } <span className="text-base ml-4"><ButtonSimple href="/contact">Available for Remote Freelance Work</ButtonSimple></span>
                </p>

                <h1 className="md:text-9xl text-6xl font-bold text-creme-500 mb-8">
                    { home.title }
                </h1>

                <div className="w-full flex justify-end">
                    <p className="mb-12 md:w-1/3 w-full md:text-left">I help companies to design digital products and turn ideas into a functional and delightful experience. I’m focusing on working on interface and digital design – mainly building products, branding and websites.</p>
                </div>
                <Button href="mailto:dave@unnatural.nl" icon={<FontAwesomeIcon icon={faPaperPlane} />}>dave@unnatural.nl</Button>
            </div>
        </div>

        <div className="flex flex-col md:flex-row w-full my-32 md:px-16 px-8">
            <div className="md:w-1/2 w-full">
                test
            </div>
            <div className="md:w-1/2 w-full">
                <h2 className="md:text-8xl text-6xl font-bold mb-8">About<br />me</h2>
                <p className="mb-8 md:max-w-xl">Experienced Designer with a demonstrated history of working in the marketing and advertising industry. Skilled in User Experience, User Interface Design, Webdesign, Sketch, Adobe Illustrator, Concept Development, HTML, CSS, JavaScript and Graphic Design. Strong arts and design professional graduated from Mediacollege Amsterdam.</p>
                <ButtonSimple href="/about">Learn more about me</ButtonSimple>
            </div>
        </div>

        <h2 className="md:text-8xl text-6xl font-bold mb-8 w-full md:px-16 px-8">Projects</h2>
        <div className="flex flex-col md:flex-row w-full my-32 md:px-16 px-8">
            <div className="md:w-2/3 w-full">
                test
            </div>
            <div className="md:w-1/3 w-full">
                teest
            </div>
        </div>
    </Layout>
  )
}
