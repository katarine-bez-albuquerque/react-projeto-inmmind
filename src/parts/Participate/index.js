import Image from "components/Image";
import "./style.css";

import Banner from "assets/images/Untitled-17.png";
import Section from "components/Section";

const Participate = () => {
    return (
        <section className="participate">

            <section className="row">

                <article className="banner">

                    <Image src={ Banner } alt="Banner" />

                </article>

                <Section titulo="¿Quieres ser parte?" classname="participate_01">
                  
                    <p>Te invitamos a ser parte de este mundo. Creemos que tu empresa también tiene este ADN y quiere un mundo mejor, inclusivo y democrático. En este proyecto, además de jugar un papel clave en la formación de nuevos profesionales en el mercado del eCommerce, también estarás en la mente de las personas como una empresa visionaria y preparada para adaptarse a este nuevo mundo.</p>

                </Section>

                <Section titulo="Formas de participar" classname="participate_02">
                  
                    <ol>
                        <li>Como Sponsor</li>
                        <ul>
                            <li>Oferta de empleo para nuestros mejores estudiantes, que serán seleccionados cuidadosamente.</li>
                        </ul>
                        <li>Como Apoyo del proyecto</li>
                        <ul>
                            <li>de soporte</li>
                            <li>Merchandising</li>
                            <li>Premios</li>
                        </ul>
                    </ol>

                </Section>

            </section>

        </section>
    );
}

export default Participate;