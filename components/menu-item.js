import Link from "next/link";

export default function MenuItem({ children, href, className = null }) {
    return (
        <Link href={href}>
            <a className={`ml-8 hover:text-creme-700 transition-colors duration-500 ${className}`}>{children}</a>
        </Link>
    )
}
