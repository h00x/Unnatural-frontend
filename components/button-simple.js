import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

export default function ButtonSimple({ children, href, darkMode = true }) {
    return (
        <Link href={href}>
            <a className={`text-myGray-500 border-b-2 border-myGray-500 border-opacity-0 hover:border-opacity-100 transition-colors duration-500 ease-in-out inline-block ${darkMode ? 'dark:text-creme-500 dark:border-creme-500' : ''}`}><span className="mr-2"><FontAwesomeIcon icon={faArrowRightLong} /></span> {children}</a>
        </Link>
    )
}
