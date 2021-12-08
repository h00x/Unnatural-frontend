import Layout from "../components/layout"
import ButtonSimple from "../components/button-simple"
import { faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'

export default function Custom404() {
    return (
        <Layout>
            <h1 className="text-6xl font-bold pb-8">404 - Page Not Found</h1>
            <p className="mb-8">You've found a page that doesn't exist!</p>
            <ButtonSimple href="/" icon={faArrowLeftLong}>Back to the homepage</ButtonSimple>
        </Layout>
    )
}
