import Footer from "./components/utils/footer";
import NavBar from "./components/utils/navBar";

const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <main className="px-4 py-6">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;