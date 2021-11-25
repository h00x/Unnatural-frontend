import Link from "next/link";
import MenuItem from "./menu-item";
import {useState} from "react";

export default function Navigation() {
    const [darkMode, setDarkMode] = useState(0);

    function test(event) {
        if (event.target.checked) {
            localStorage.theme = 'dark'
            document.documentElement.classList.add('dark')
        } else {
            localStorage.theme = 'light'
            document.documentElement.classList.remove('dark')
        }
    }

    return (
        <nav className="flex justify-between items-center w-full fixed top-0 p-4 bg-creme-500 dark:bg-myGray-500 z-40">
            <Link href="/">
                <a><img src="images/unnatural-logo-light.svg" alt="Unnatural Logo" className="h-8" /></a>
            </Link>
            <div>
                <MenuItem href="/about">About me</MenuItem>
                <MenuItem href="/portfolio">Portfolio</MenuItem>
                <input type="checkbox" name="darkMode" onClick={test} />
                <label htmlFor="darkMode">Darkmode</label>
            </div>
        </nav>
    )
}
