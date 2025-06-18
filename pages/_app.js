import "@/styles/globals.css";
import PagesLayout from "./PagesLayout";

export default function MyApp({ Component, pageProps }) {
    return (
        <PagesLayout>
            <Component {...pageProps} />
        </PagesLayout>
    );
}