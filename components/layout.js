import SiteHead from "./site-head";
import Navigation from "./navigation";
import Footer from "./footer";
import {useEffect, useState} from "react";

export default function Layout({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setDarkMode(true)
        } else {
            setDarkMode(false)
        }
    }, []) // Only run this once by using []

    useEffect(() => {
        if (darkMode) {
            localStorage.theme = 'dark'
            document.documentElement.classList.add('dark')
        } else {
            localStorage.theme = 'light'
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode]);

    return (
        <div className="text-myGray-500 dark:text-creme-500 mt-12">
            <SiteHead />
            <Navigation setDarkMode={setDarkMode} darkMode={darkMode} />

            <main className="flex flex-col items-center justify-center w-full flex-1">
                {children}
            </main>
        </div>
    )
}
