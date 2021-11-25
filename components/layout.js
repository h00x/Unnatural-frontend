import SiteHead from "./site-head";
import Navigation from "./navigation";
import Footer from "./footer";

export default function Layout({ children }) {
    return (
        <div className="text-myGray-500 dark:text-creme-500 mt-12">
            <SiteHead />
            <Navigation />

            <main className="flex flex-col items-center justify-center w-full flex-1">
                {children}
            </main>
        </div>
    )
}
