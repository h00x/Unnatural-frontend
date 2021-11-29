import Link from "next/link";
import MenuItem from "./menu-item";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Navigation({darkMode, setDarkMode}) {
    function Logo() {
        if (darkMode) {
            return <img src="images/unnatural-logo-dark.svg" alt="Unnatural Logo" className="h-8"/>;
        }

        return <img src="images/unnatural-logo-light.svg" alt="Unnatural Logo" className="h-8"/>;
    }

    return (
        <nav
            className="flex justify-between items-center w-full fixed top-0 p-4 bg-creme-500 dark:bg-myGray-500 z-40 transition-colors duration-500 ease-in-out">
            <Link href="/">
                <a><Logo/></a>
            </Link>
            <div className="flex items-center">
                <MenuItem href="/about">About me</MenuItem>
                <MenuItem href="/portfolio">Portfolio</MenuItem>
                <div
                    className="relative w-12 h-6 rounded-2xl bg-myGray-500 dark:bg-creme-500 cursor-pointer inline-block ml-8 transition-all duration-500 ease-in-out">
                    <input
                        type="checkbox"
                        name="darkMode"
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                        className="absolute w-full h-full opacity-0 cursor-pointer z-50"
                    />
                    <span
                        className="absolute top-0.5 left-6 dark:left-1 dark:bg-myGray-500 bg-creme-500 w-5 h-5 rounded-2xl transition-all duration-200 ease-in-out z-20"
                    />
                    <FontAwesomeIcon icon={faSun} className="text-creme-500 dark:text-myGray-500 text-xs absolute left-7 top-1.5 transition-all duration-200 ease-in-out" />
                    <FontAwesomeIcon icon={faMoon} className="text-creme-500 dark:text-myGray-500 text-xs absolute left-2 top-1.5 transition-all duration-200 ease-in-out" />
                </div>
            </div>
        </nav>
    )
}
