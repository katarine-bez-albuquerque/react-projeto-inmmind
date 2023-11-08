import About from "parts/About";
import BannerPart from "parts/BannerPart";
import Existence from "parts/Existence";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Meaning from "parts/Meaning";
import Navbar from "parts/Navbar";
import Our from "parts/Our";
import Participate from "parts/Participate";

const Home = () => {
    return (
        <div className="page">
            <Navbar />
            <Header />
            <main>
                <About />
                <Meaning />
                <Existence />
            </main>
            <aside>
                <Our />
                <Participate />
                <BannerPart />
            </aside>
            <Footer />
        </div>
    );
}

export default Home;