import Link from "next/link";
import MenuItem from "./menu-item";

export default function Navigation({ darkMode, setDarkMode }) {
    function Logo() {
        if (darkMode) {
            return <img src="images/unnatural-logo-dark.svg" alt="Unnatural Logo" className="h-8" />;
        }

        return <img src="images/unnatural-logo-light.svg" alt="Unnatural Logo" className="h-8" />;
    }

    return (
        <nav className="flex justify-between items-center w-full fixed top-0 p-4 bg-creme-500 dark:bg-myGray-500 z-40">
            <Link href="/">
                <a><Logo /></a>
            </Link>
            <div>
                <MenuItem href="/about">About me</MenuItem>
                <MenuItem href="/portfolio">Portfolio</MenuItem>
                <input type="checkbox" name="darkMode" checked={darkMode} onChange={event => setDarkMode(event.target.checked)} />
                <label htmlFor="darkMode">Darkmode</label>
            </div>
        </nav>
    )
}
