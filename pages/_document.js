import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <script type="text/javascript" src='/noflash.js' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script> </script>
                </body>
            </Html>
        )
    }
}

export default MyDocument
