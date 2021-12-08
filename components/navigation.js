import Link from "next/link";
import MenuItem from "./menu-item";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Hamburger from 'hamburger-react'
import {useState} from "react";

export default function Navigation({darkMode, setDarkMode}) {
    const [isOpen, setOpen] = useState(false)

    function Logo() {
        if (darkMode) {
            return <img src="../images/unnatural-logo-dark.svg" height="32" width="149" alt="Unnatural Logo" className="h-8"/>;
        }

        return <img src="../images/unnatural-logo-light.svg" height="32" width="149" alt="Unnatural Logo" className="h-8"/>;
    }

    return (
        <nav className="flex flex-wrap justify-between items-center w-full fixed top-0 p-4 bg-creme-500 dark:bg-myGray-500 z-40 transition-colors duration-500 ease-in-out inverted-border-radius">
            <Link href="/">
                <a className="z-20 w-1/2"><Logo/></a>
            </Link>
            <div className="sm:hidden -my-8 w-1/2 flex justify-end">
                <Hamburger toggled={isOpen} toggle={setOpen} size={32} rounded label="Show menu" />
            </div>
            <div className={`sm:flex flex sm:flex-row flex-col items-center justify-end z-20 sm:w-1/2 w-full ${isOpen ? '' : 'hidden'}`}>
                <MenuItem href="/about" className="sm:py-0 py-4 border-b border-creme-600 dark:border-myGray-400 sm:border-0 sm:w-auto w-full text-center">About me</MenuItem>
                <MenuItem href="/projects" className="sm:py-0 py-4 border-b border-creme-600 dark:border-myGray-400 sm:border-0 sm:w-auto w-full text-center">Projects</MenuItem>
                <div className="relative w-12 h-6 rounded-2xl bg-myGray-500 dark:bg-creme-500 cursor-pointer inline-block ml-8 transition-all duration-500 ease-in-out sm:my-0 my-4">
                    <input
                        type="checkbox"
                        name="darkModeToggle"
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                        className="absolute w-full h-full opacity-0 cursor-pointer z-50"
                        aria-label="Dark mode toggle"
                    />
                    <span className="absolute top-0.5 left-6 dark:left-1 dark:bg-myGray-500 bg-creme-500 w-5 h-5 rounded-2xl transition-all duration-200 ease-in-out z-20" />
                    <FontAwesomeIcon icon={faSun} className="text-creme-500 dark:text-myGray-500 text-xs absolute left-7 top-1.5 transition-all duration-200 ease-in-out" />
                    <FontAwesomeIcon icon={faMoon} className="text-creme-500 dark:text-myGray-500 text-xs absolute left-2 top-1.5 transition-all duration-200 ease-in-out" />
                </div>
            </div>
        </nav>
    )
}
