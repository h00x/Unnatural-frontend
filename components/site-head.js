import Head from 'next/head'

export default function SiteHead() {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name='viewport' content='minimum-scale=1, maximum-scale=5, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />

            <link rel="icon" href="/images/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            <meta name="description" content="Showcase website of Dave Hoeks, owner of Unnatural Concepts. Dave Hoeks is a freelance Web developer and Web designer living in the Netherlands." />
            <meta name="keywords" content="Freelance, Web developer, Web designer, Unnatural, Unnatural Concepts, developer, design, PHP, Javascript, CSS, HTML, Email HTML, Wordpress, " />
            <meta property="og:title" content="Unnatural - Portfolio of Dave Hoeks" key="title" />
            <title>Unnatural - Portfolio of Dave Hoeks</title>

            <link rel="manifest" href="/manifest.webmanifest" />
            <link
                href="/images/favicon-16x16.png"
                rel="icon"
                type="image/png"
                sizes="16x16"
            />
            <link
                href="/images/favicon-32x32.png"
                rel="icon"
                type="image/png"
                sizes="32x32"
            />
            <link rel="apple-touch-icon" href="/images/apple-icon.png"></link>
            <meta name="theme-color" content="#fff4eb" />
        </Head>
    )
}
