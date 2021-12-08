import Link from "next/link";
import Layout from "../../components/layout";
import Image from "next/image";
import ButtonSimple from "../../components/button-simple";

export default function Projects ({ projects, url }) {


    return (
        <Layout>
            <div className="w-full max-w-7xl md:px-16 px-8 mb-16 mt-32">
                <h1 className="font-bold text-5xl sm:text-10vw xl:text-9xl sm:mb-8">My projects</h1>
                <h2 className="md:text-4xl text-2xl font-bold">Some of my best work</h2>
            </div>

            <div className="flex flex-col w-full max-w-7xl md:px-16 px-8 z-20">
                {projects.map((project, index) => (
                    <Link href={ '/projects/' + project.attributes.slug } key={index}>
                        <div className="flex xl:flex-row flex-col mb-16 items-center cursor-pointer">
                            <div className="xl:w-2/3 w-full relative rounded-2xl bg-riptide-500 dark:bg-riptide-900 overflow-hidden flex items-end justify-center md:px-16 px-8 md:pt-16 pt-8 enable-overflow xl:mr-8">
                                <Image src={ url + project.attributes.thumbnail.data.attributes.formats.medium.url } width={600} height={369} alt={ project.attributes.thumbnail.data.attributes.alternativeText } className="rounded-t-xl shadow-reverse-2xl" />
                            </div>
                            <div className="xl:w-1/3 md:w-2/3 mt-8 xl:mt-0 w-full">
                                <p className="font-bold mb-4">{ project.attributes.company }</p>
                                <h2 className="text-3xl font-bold mb-4">{ project.attributes.title }</h2>
                                <p className="mb-8">{ project.attributes.intro_text }</p>
                                <ButtonSimple href={ '/projects/' + project.attributes.slug }>Go to project</ButtonSimple>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const resProjects = await fetch(process.env.API_URL + '/projects?populate=thumbnail')
    const projects = await resProjects.json()

    return {
        props: {
            projects: projects.data,
            url: process.env.URL,
        },
    }
}
