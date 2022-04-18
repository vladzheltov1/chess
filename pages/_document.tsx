import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { resetServerContext } from "react-beautiful-dnd";

class ApplicationDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        resetServerContext();
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <title>Chess</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default ApplicationDocument;