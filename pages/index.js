import Layout from '../components/layout'
import Button from '../components/button'
import Link from "next/link"
import ButtonSimple from '../components/button-simple'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import {getHomeData, getHomeProjects, getInTouchData} from "../lib/api";
import GetInTouch from "../components/get-in-touch";
import {blurredImage} from "../lib/helpers";

export default function Home({ dataHome, dataProjects, inTouchData }) {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center m-4 mt-0 pb-24 pt-24 home-content-container text-center rounded-xl h-auto full-width-container-spacing p-8 bg-riptide-500 dark:bg-myGray-500">
                <div className="z-20">
                    <p className="flex items-center flex-col md:flex-row justify-center text-4xl mb-2 transition-colors duration-500 ease-in-out">
                        { dataHome.sub_title } <span className="text-base ml-4"><ButtonSimple href={ dataHome.contact_button_url }>{ dataHome.header_link_text }</ButtonSimple></span>
                    </p>

                    <h1 className="md:text-8vw sm:text-6xl text-5xl font-bold text-creme-500 mb-8">
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

            <div className="flex flex-col items-center md:flex-row w-full my-32">
                <div className="md:w-1/2 w-full md:text-right text-center md:mr-16 px-4">
                    <Image
                        src={ dataHome.about_image.data.attributes.formats.small.hash }
                        width={450}
                        height={450}
                        alt="Picture of Dave Hoeks"
                        className="rounded-4xl"
                        placeholder="blur"
                        blurDataURL={ blurredImage(dataHome.about_image.data.attributes.formats.small.provider_metadata.public_id) }
                    />
                </div>
                <div className="md:w-1/2 w-full md:px-16 px-8 mt-8 md:mt-0">
                    <h2 className="md:text-8xl text-6xl font-bold mb-8 md:w-96 w-full">{ dataHome.about_block_title }</h2>
                    <p className="mb-8 md:max-w-xl">{ dataHome.about_block_text }</p>
                    <ButtonSimple href="/about">{ dataHome.about_me_link_text }</ButtonSimple>
                </div>
            </div>

            <div className="w-full px-8 max-w-7xl">
                <h2 className="md:text-8xl text-6xl font-bold inline-block mr-8">{ dataHome.projects_title }</h2><ButtonSimple href="/projects" className="mt-8 md:mt-0">{ dataHome.projects_link_text }</ButtonSimple>
            </div>
            <div className="flex flex-col justify-center md:flex-row w-full md:my-32 my-16">
                <Link href={'/projects/' + dataProjects[0].attributes.slug}>
                    <div className="flex flex-col items-center md:w-2/3 w-full md:mr-16 max-w-7xl cursor-pointer px-4">
                        <div className="lg:w-3/4 md:w-full w-full relative rounded-2xl bg-riptide-500 dark:bg-riptide-900 overflow-hidden flex items-end justify-center md:px-16 px-8 md:pt-16 pt-8 enable-overflow">
                            <Image
                                src={ dataProjects[0].attributes.thumbnail.data.attributes.formats.small.hash }
                                width={500}
                                height={307}
                                alt={ dataProjects[0].attributes.thumbnail.data.attributes.alternativeText }
                                className="rounded-t-xl shadow-reverse-2xl"
                                placeholder="blur"
                                blurDataURL={ blurredImage(dataProjects[0].attributes.thumbnail.data.attributes.formats.small.provider_metadata.public_id) }
                            />
                        </div>
                        <div className="lg:w-1/2 md:w-3/4 mt-12 px-4">
                            <p className="font-bold mb-4">{ dataProjects[0].attributes.company }</p>
                            <h2 className="text-3xl font-bold mb-4">{ dataProjects[0].attributes.title }</h2>
                            <p className="mb-8">{ dataProjects[0].attributes.intro_text }</p>
                            <ButtonSimple href={ '/projects/' + dataProjects[0].attributes.slug }>Go to project</ButtonSimple>
                        </div>
                    </div>
                </Link>
                <Link href={'/projects/' + dataProjects[1].attributes.slug}>
                    <div className="flex flex-col items-center md:w-1/3 w-full mt-32 max-w-3xl cursor-pointer px-4 lg:px-0">
                        <div className="lg:w-3/4 w-full relative rounded-2xl bg-pink-600 dark:bg-pink-900 overflow-hidden flex items-end justify-center px-8 pt-8 enable-overflow">
                            <Image
                                src={ dataProjects[1].attributes.thumbnail.data.attributes.formats.thumbnail.hash }
                                width={245}
                                height={151}
                                alt={ dataProjects[1].attributes.thumbnail.data.attributes.alternativeText }
                                className="rounded-t-xl shadow-reverse-2xl"
                                placeholder="blur"
                                blurDataURL={ blurredImage(dataProjects[1].attributes.thumbnail.data.attributes.formats.thumbnail.provider_metadata.public_id) }
                            />
                        </div>
                        <div className="lg:w-1/2 md: 3/4 mt-12 px-4 lg:px-0">
                            <p className="font-bold mb-4">{ dataProjects[1].attributes.company }</p>
                            <h2 className="text-3xl font-bold mb-4">{ dataProjects[1].attributes.title }</h2>
                            <p className="mb-8">{ dataProjects[1].attributes.intro_text }</p>
                            <ButtonSimple href={ '/projects/' + dataProjects[1].attributes.slug }>Go to project</ButtonSimple>
                        </div>
                    </div>
                </Link>
            </div>

            <GetInTouch data={inTouchData} />
        </Layout>
    )
}

export async function getStaticProps() {
    const dataHome = (await getHomeData()) || []
    const dataProjects = (await getHomeProjects()) || []
    const inTouchData = (await getInTouchData()) || []

    return {
        props: {
            dataHome,
            dataProjects,
            inTouchData,
        },
    }
}
