import Image from "components/Image";
import "./style.css";

import Logo from "assets/images/Untitled-18.png";

const Footer = () => {
    return (
        <footer className="footer">

            <section className="column">

                <Image src={ Logo } alt="Logo" />

            </section>

        </footer>
    );
}

export default Footer;