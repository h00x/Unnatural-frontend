import Layout from "../components/layout";
import profilePicture from "../public/images/dave.jpg";
import Image from "next/image";
import ButtonSimple from "../components/button-simple";
import Button from "../components/button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";

export async function getStaticProps() {
    const res = await fetch(process.env.API_URL + '/about?populate=*')
    const about = await res.json()

    return {
        props: {
            data: about.data.attributes,
            url: process.env.URL
        },
    }
}

export default function About({ data, url }) {
    return (
        <Layout>
            <div className="w-full max-w-7xl md:px-16 px-8 mb-16 mt-32">
                <h1 className="font-bold lg:text-10vw text-8xl">{ data.welcome_title }<br />{ data.welcome_who_am_i }</h1>
                <h2 className="text-4xl font-bold">{ data.welcome_subtitle }</h2>
            </div>

            <div className="flex flex-col-reverse md:flex-row flex-col w-full max-w-7xl md:px-16 px-8 z-20">
                <div className="md:w-1/2 w-full md:mr-16">
                    <h4 className="text-2xl font-bold mb-2">{ data.about_me_title }</h4>
                    <p>{ data.about_me_text }</p>
                </div>
                <div className="md:w-1/2 w-full mb-8 md:mb-0 text-center">
                    <Image src={ url + data.photo.data.attributes.formats.small.url } width={450} height={450} alt="Picture of Dave Hoeks" className="rounded-4xl" />
                </div>
            </div>

            <div className="flex md:flex-row flex-col items-center w-full max-w-7xl z-10 lg:-mt-16 mt-8 px-4 xl:px-0">
                <div className="md:w-2/3 w-full md:mr-16 bg-pink-500 dark:bg-pink-800 rounded-2xl p-8 md:p-14 transition-colors duration-500 ease-in-out">
                    <h2 className="text-4xl font-bold mb-2">{ data.service_title }</h2>
                    <p className="mb-8">{ data.service_text }</p>
                    <ul className="list-disc flex flex-wrap">
                        { data.services.map(item => (
                            <li className="md:w-1/2 w-full mb-4 pr-8" key={item.id}>
                                <h4 className="text-2xl font-bold">{ item.title }</h4>
                                <p>{ item.body }</p>
                            </li>
                        )) }
                    </ul>
                </div>
            </div>

            <div className="flex md:flex-row flex-col w-full max-w-7xl px-8 md:px-16 mt-32">
                <div className="md:w-1/2 w-full">
                    <h2 className="text-8xl font-bold mb-4">Skills</h2>
                    <p className="mb-8 font-bold text-xl">I have developed myself in the following skills</p>
                    <ul className="list-disc flex flex-wrap">
                        {data.skills.map(item => (
                            <li className="w-1/2 mb-4 pr-8" key={item.id}>
                                { item.name }
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:w-1/2 w-full">
                    <h2 className="text-8xl font-bold mb-4">Hobbies</h2>
                    <p className="mb-8 font-bold text-xl">You can't live a healthy life without some fun hobbies</p>
                    <ul className="list-disc flex flex-wrap">
                        {data.hobbies.map(item => (
                            <li className="w-1/2 mb-4 pr-8" key={item.id}>
                                { item.name }
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="bg-riptide-500 dark:bg-riptide-900 flex justify-center mt-32 mb-16 py-16 full-width-container-spacing rounded-xl">
                <div className="px-8 md:px-16 w-full max-w-7xl">
                    <h2 className="text-8xl font-bold mb-2">Process</h2>
                    <p className="mb-16 font-bold text-2xl">With the right tools, skills and processes you can create world changing products</p>
                    <div className="flex md:flex-row flex-col w-full max-w-7xl">
                        {data.processes.map((item, index) => (
                            <div className="md:w-1/5 w-full mr-8 mb-8" key={item.id}>
                                <FontAwesomeIcon icon={fa[item.fa_icon]} className="text-2xl mb-8" />
                                <h3 className="font-bold text-3xl mb-4">{ index + 1}. { item.title }</h3>
                                <p>{ item.text }</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex items-start justify-center flex-col md:flex-row w-full xl:w-2/3 px-8">
                <div className="max-w-3xl md:w-1/2 md:pl-14 pl-0">
                    <h5 className="text-xl mb-4">{ data.contact_subtitle }</h5>
                    <h3 className="text-6xl font-bold mb-4 w-96">{ data.contact_title }</h3>
                    <p className="mb-8">{ data.contact_text }</p>
                    <Button href={ data.contact_button_url } icon={<FontAwesomeIcon icon={fa.faEnvelope} />}>{ data.contact_button_text }</Button>
                </div>
            </div>
        </Layout>
    )
}
