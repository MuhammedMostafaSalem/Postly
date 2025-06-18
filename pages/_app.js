import "@/styles/globals.css";
import PagesLayout from "./PagesLayout";
import { ToastContainer } from "react-toastify";

export default function MyApp({ Component, pageProps }) {
    return (
        <PagesLayout>
            <Component {...pageProps} />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </PagesLayout>
    );
}