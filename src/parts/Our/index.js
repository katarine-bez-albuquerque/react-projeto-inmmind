import Image from "components/Image";
import "./style.css";

import Photo from "assets/images/WhatsApp Image 2020-12-07 at 12.57.45.jpeg";
import Banner from "assets/images/Untitled-16.png";
import Section from "components/Section";

const Our = () => {
    return (
        <section className="our">

            <section className="row">

                <aside className="our_inmmind">

                    <article className="description">

                        <Section titulo="Nuestra INMMIND:">

                            <p>José Luiz Rodrigues es un experto en eCommerce con de más de 20 años de conocimiento en desarrollo, UX y gestión de tiendas.</p>

                            <p>Empezó su trayectoria de programador como FrontEnd. También, fue consultor de VTEX en sus primeros años de carrera afrontando muchos roles como desarrollador, consultor experto eCommerce, Director UX y gerente de las más grandes marcas del mercado.</p>

                            <p>Su experiencia se ha construido en varias empresas, algunas de ellas: VTEX, Cencosud, Frávega, Personal, Ecomsur, Lyracons y Leader, dejando su huella en países como: Brasil, Argentina y Chile.</p>

                        </Section>

                    </article>

                    <article className="photo">

                        <Image src={Photo} alt="Photo" />

                    </article>

                </aside>

                <aside className="banner">

                    <article>

                        <Image src={Banner} alt="Banner" />

                    </article>

                    <article className="take_part">

                        <Section titulo="¿Quieres ser parte?">
                        
                            <p>Como Sponsor o apoyo: envíanos un mail a <a href="mailto:contacto@inmmerce.com">contacto@inmmerce.com</a> y cuéntanos ¿cómo vas a participar y empezar a hacer la diferencia en el mundo eCommerce?</p>

                        </Section>

                        <Section>

                            <p>Como institución beneficiaria: envíanos un mail a <a href="mailto:contacto@inmmerce.com">contacto@inmmerce.com</a> coméntanos un poco de tu historia.</p>

                        </Section>

                    </article>

                </aside>

            </section>

        </section>
    );
}

export default Our;