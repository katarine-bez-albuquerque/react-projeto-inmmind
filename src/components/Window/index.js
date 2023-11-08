import Image from "components/Image";
import "./style.css";

const Window = ({ children, image }) => {
    return (
        <article className="text">

            <section className="window">

                <p>&#x2716;</p>

            </section>

            <section className="border_window">

                { children }

            </section>

            <section className="pointer_m">
                <Image src={ image } alt="Pointer" />
            </section>

        </article>
    );
}

export default Window;