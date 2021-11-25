import Link from "next/link";

export default function Button({ children, href, icon }) {
    return (
        <Link href={href}>
            <a
                className="px-8 py-4 inline-block text-xl border-2 border-myGray-500 rounded-md text-myGray-500 hover:bg-myGray-500 hover:text-pink-500 transition-colors duration-500"
            >
                {icon ? <><span className="mr-4">{icon}</span> {children}</> : {children}}
            </a>
        </Link>
    )
}