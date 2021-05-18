import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    {/* Design System */}
                    <link
                        rel="stylesheet"
                        href={process.env.NEXT_PUBLIC_REACT_APP_URL_DESIGN_SYSTEM + 'wc-design-pichincha.css'}
                    />
                    <script
                        src={process.env.NEXT_PUBLIC_REACT_APP_URL_DESIGN_SYSTEM + 'wc-design-pichincha.esm.js'}
                        type="module"
                    ></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument