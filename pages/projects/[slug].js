import Layout from "../../components/layout";
import Image from "next/image";
import Head from 'next/head'
import ButtonSimple from "../../components/button-simple";
import { faArrowLeftLong, faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import Custom404 from "../404";
import {getAllProjectsUnpopulated, getInTouchData, getProject} from "../../lib/api";
import GetInTouch from "../../components/get-in-touch";

export default function Project({ project, inTouchData }) {
    const router = useRouter()

    if (!router.isFallback && !project?.slug) {
        return <Custom404 />
    }

    return (
        <Layout>
            {router.isFallback ? (
                <Head>
                    <title>Loading…</title>
                </Head>
            ) : (
                <>
                    <div className="full-width-container-spacing relative rounded-xl bg-riptide-500 dark:bg-riptide-900 overflow-hidden flex items-end justify-center md:px-16 px-4 md:pt-16 pt-4 enable-overflow">
                        <Image src={ project.intro_image.data.attributes.formats.large.url } width={1000} height={615} alt={ project.intro_image.data.attributes.alternativeText } className="rounded-t-xl shadow-reverse-2xl" />
                    </div>

                    <div className="md:w-2/3 w-full max-w-7xl md:px-16 px-8 mb-8 mt-8 break-words">
                        <p className="font-bold mb-4 flex justify-between"><ButtonSimple href="/projects" className="mr-8" icon={faArrowLeftLong}> Back to overview</ButtonSimple> { project.company }</p>
                        <h1 className="font-bold md:text-7xl text-4xl">{ project.title }</h1>
                        <p className="mb-8">{ project.intro_text }</p>
                        <ButtonSimple href={ project.link } icon={ faExternalLink } target='_blank'>Go to website</ButtonSimple>
                    </div>

                    {project.project_content.map((item, index) => {
                        if (item.__component === 'project.title-multiple-images') {
                            return (
                                <div key={index} className="flex flex-col items-center justify-center w-full flex-1">
                                    <div className="md:w-2/3 w-full max-w-7xl md:px-16 px-8 mb-8 mt-8">
                                        <h2 className="font-bold md:text-5xl text-2xl md:mb-4 mb-1">{item.title}</h2>
                                        <p>{item.body}</p>
                                    </div>

                                    {item.images.data.map((image, imageIndex) => (
                                        <div key={imageIndex}>
                                            <div className="full-width-container-spacing relative rounded-xl bg-riptide-500 dark:bg-riptide-900 overflow-hidden flex items-end justify-center md:px-16 px-4 md:pt-16 pt-4 enable-overflow mb-4">
                                                <Image src={ image.attributes.formats.large.url } width={1000} height={615} alt={ image.attributes.alternativeText } className="rounded-t-xl shadow-reverse-2xl" />
                                            </div>
                                            <p className="italic mb-16 text-center">{image.attributes.caption}</p>
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                    })}

                    <GetInTouch data={inTouchData} />
                </>
            )}
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const data = await getProject(params.slug)
    const inTouchData = (await getInTouchData()) || []

    return {
        props: {
            project: {
                ...data,
            },
            inTouchData,
        },
    }
}

export async function getStaticPaths() {
    const allProjects = await getAllProjectsUnpopulated()

    return {
        paths: allProjects?.map((project) => `/projects/${project.attributes.slug}`) || [],
        fallback: true,
    }
}
