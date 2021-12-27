import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

export default function ButtonSimple({ children, href, darkMode = true, icon = faArrowRightLong, target = '_self', className = null }) {
    return (
        <Link href={href}>
            <a target={target} rel={target === '_blank' ? 'noopener' : ''} className={`text-myGray-500 border-b-2 border-myGray-500 border-opacity-0 hover:border-opacity-100 transition-colors duration-500 ease-in-out inline-block ${darkMode ? 'dark:text-creme-500 dark:hover:border-creme-500' : ''} ${className || ''}`}><span className="mr-2"><FontAwesomeIcon icon={icon} /></span> {children}</a>
        </Link>
    )
}
