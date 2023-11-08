import Window from "components/Window";
import Image from "components/Image";
import "./style.css";

import Pointer from "assets/images/mao_white.png";
import Commenteme from "assets/images/Untitled-21.png";
import Section from "components/Section";

const Existence = () => {
    return (
        <section className="existence">

            <section className="row">

                <aside className="existence_window">

                    <Window image={Pointer}>

                        <Section>

                            <h6>¿Cuándo?</h6>

                            <br />

                            <h3>Desde el 14 hasta el 19 de Diciembre</h3>

                            <br />

                            <h6>¿Dónde?</h6>

                            <br />

                            <h6>OnLine, obvio ; ),</h6>

                            <br />

                            <h6>transmisión en vivo. Especialmente para egresadas de Laboratoria</h6>

                            <br />

                            <h6>¿Cuáles son los premios?</h6>

                            <br />

                            <h3>02 vacantes de empleo:</h3>

                            <p>Una en ACCT.Global y otra en commente.me, además de muchos regalitos y sorpresas</p>

                        </Section>

                    </Window>

                </aside>

                <Section classname="comment">

                    <h5>INMMIND y Sponsors</h5>

                    <br />

                    <Image src={Commenteme} alt="Commente.me" />

                    <br /><br />

                    <p>Compartiendo este sentimiento, ACCT Global, y commente.me, una agencia de eCommunicación, están a nuestro lado aportando a construir un mundo más inclusivo y democrático.</p>

                    <br />

                    <p>ACCT Global es una empresa de arquitectura e ingeniería de software, con un equipo interno de alto desempeño y con recursos 360º para ofrecer soluciones tecnológicas de alta complejidad. Participa en algunas de las implementaciones de eCommerce y proyectos de evolución más grandes del mundo, además de ser parte del cuadrante Gartner.</p>

                    <br />

                    <p>commente.me es un equipo multidisciplinario con una gran experiencia en desarrollo UX/UI, gestión comercial, marketing para eCommerce y construcción de marca Online y Offline, enfocados en resultados para grandes empresas, y no hay nadie mejor para acompañarnos en este viaje.</p>

                    <br />

                    <p>Y así, muchas otras empresas colaboradoras del área, brindaran capacitaciones, hackatones, talleres y charlas sobre eCommerce y su entorno empresarial.</p>

                </Section>

            </section>

        </section>
    );
}

export default Existence;