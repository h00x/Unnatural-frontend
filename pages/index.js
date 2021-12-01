import Layout from '../components/layout'
import Footer from "../components/footer"
import Button from '../components/button'
import ButtonSimple from '../components/button-simple'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import profilePicture from '../public/images/dave.jpg'

export async function getStaticProps() {
    const resHome = await fetch(process.env.API_URL + '/home?populate=*')
    const home = await resHome.json()

    const resProjects = await fetch(process.env.API_URL + '/projects?pagination[pageSize]=2&sort=createdAt:desc&populate[thumbnail]=*')
    const projects = await resProjects.json()

    return {
        props: {
            dataHome: home.data.attributes,
            dataProjects: projects.data,
            url: process.env.URL,
        },
    }
}

export default function Home({ dataHome, dataProjects, url }) {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center m-4 mt-0 text-center rounded-xl home-content-container full-width-container-spacing p-8 bg-riptide-500 dark:bg-myGray-500">
                <div className="z-20">
                    <p className="flex items-center justify-center text-4xl mb-2 transition-colors duration-500 ease-in-out">
                        { dataHome.sub_title } <span className="text-base ml-4"><ButtonSimple href="/contact">{ dataHome.header_link_text }</ButtonSimple></span>
                    </p>

                    <h1 className="md:text-8vw text-6xl font-bold text-creme-500 mb-8">
                        { dataHome.intro_header }
                    </h1>

                    <div className="w-full flex justify-end">
                        <p className="mb-12 md:w-1/3 w-full md:text-left transition-colors duration-500 ease-in-out">
                            { dataHome.intro_text }
                        </p>
                    </div>
                    <Button href={ dataHome.contact_button_url } icon={<FontAwesomeIcon icon={faPaperPlane} />}>{ dataHome.contact_button_text }</Button>
                </div>
            </div>

            <div className="flex flex-col items-center md:flex-row w-full my-32 md:px-16 px-8">
                <div className="md:w-1/2 w-full md:text-right text-center md:mr-16">
                    <Image src={ url + dataHome.about_image.data.attributes.formats.small.url } width={450} height={450} alt="Picture of Dave Hoeks" className="rounded-4xl" />
                </div>
                <div className="md:w-1/2 w-full">
                    <h2 className="md:text-8xl text-6xl font-bold mb-8">{ dataHome.about_block_title }</h2>
                    <p className="mb-8 md:max-w-xl">{ dataHome.about_block_text }</p>
                    <ButtonSimple href="/about">{ dataHome.about_me_link_text }</ButtonSimple>
                </div>
            </div>

            <div className="w-full px-8 max-w-7xl">
                <h2 className="md:text-8xl text-6xl font-bold inline-block mr-8">{ dataHome.projects_title }</h2><ButtonSimple href="/portfolio">{ dataHome.projects_link_text }</ButtonSimple>
            </div>
            <div className="flex flex-col justify-center md:flex-row w-full md:my-32 my-16 px-8">
                <div className="flex flex-col items-center md:w-2/3 w-full md:mr-16 max-w-7xl">
                    <div className="lg:w-3/4 md:w-full w-full relative rounded-2xl bg-riptide-500 dark:bg-riptide-900 overflow-hidden flex items-end justify-center md:px-16 px-8 md:pt-16 pt-8 enable-overflow">
                        <Image src={ url + dataProjects[0].attributes.thumbnail.data.attributes.formats.small.url } width={500} height={307} alt={ dataProjects[0].attributes.thumbnail.data.attributes.alternativeText } className="rounded-t-xl shadow-reverse-2xl" />
                    </div>
                    <div className="lg:w-1/2 md:w-3/4 mt-12">
                        <p className="font-bold mb-4">{ dataProjects[0].attributes.company }</p>
                        <h2 className="text-3xl font-bold mb-4">{ dataProjects[0].attributes.title }</h2>
                        <p className="mb-8">{ dataProjects[0].attributes.intro_text }</p>
                        <ButtonSimple href="#">Go to project</ButtonSimple>
                    </div>
                </div>
                <div className="flex flex-col items-center md:w-1/3 w-full mt-32 max-w-3xl">
                    <div className="lg:w-3/4 w-full relative rounded-2xl bg-pink-600 dark:bg-pink-900 overflow-hidden flex items-end justify-center px-8 pt-8 enable-overflow">
                        <Image src={ url + dataProjects[1].attributes.thumbnail.data.attributes.formats.thumbnail.url } width={245} height={151} alt={ dataProjects[0].attributes.thumbnail.data.attributes.alternativeText } className="rounded-t-xl shadow-reverse-2xl" />
                    </div>
                    <div className="lg:w-1/2 md: 3/4 mt-12">
                        <p className="font-bold mb-4">{ dataProjects[1].attributes.company }</p>
                        <h2 className="text-3xl font-bold mb-4">{ dataProjects[1].attributes.title }</h2>
                        <p className="mb-8">{ dataProjects[1].attributes.intro_text }</p>
                        <ButtonSimple href="#">Go to project</ButtonSimple>
                    </div>
                </div>
            </div>

            <h2 className="md:text-8xl text-6xl font-bold text-center mb-16">{ dataHome.service_contact_title }</h2>
            <div className="flex items-start justify-center flex-col md:flex-row w-full xl:w-2/3 px-8">
                <div className="max-w-3xl md:w-1/2 bg-pink-500 dark:bg-pink-800 rounded-2xl p-14">
                    <h3 className="text-3xl mb-4">{ dataHome.service_title }</h3>
                    <p className="pb-8 mb-8 border-b-2 border-pink-600 dark:border-pink-900">{ dataHome.service_text }</p>
                    <div className="text-right">
                        <ButtonSimple href="/about">{ dataHome.service_link_text }</ButtonSimple>
                    </div>
                </div>
                <div className="max-w-3xl md:w-1/2 md:pl-14 pl-0 pt-16 md:pt-32">
                    <h5 className="mb-4">{ dataHome.contact_subtitle }</h5>
                    <h3 className="text-3xl mb-4">{ dataHome.contact_title }</h3>
                    <p className="mb-8">{ dataHome.contacttext }</p>
                    <Button href={ dataHome.contact_button_url } icon={<FontAwesomeIcon icon={faEnvelope} />}>{ dataHome.contact_button_text }</Button>
                </div>
            </div>
        </Layout>
    )
}
