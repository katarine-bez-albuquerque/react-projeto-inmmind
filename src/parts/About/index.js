import Image from "components/Image";
import "./style.css";

import Banner from "assets/images/Untitled-3.png";
import Pointer from "assets/images/Untitled-6.png";
import Window from "components/Window";
import Pointer01 from "assets/images/mao_yellow.png";
import Section from "components/Section";

const About = () => {
    return (
        <section className="about">

            <section className="column">

                <Window image={ Pointer01 }>

                    <Section titulo="¿Quiénes somos?">

                        <p>Te presentamos a <strong>INMMERCE</strong>, la 1era agencia educativa de nuevas tecnologías con certificación oficial VTEX.</p>

                        <br />

                        <p>Esta certificación se otorga en grado pro y máster, brindándole a nuestros estudiantes una capacitación intensiva Backoffice y Developer en VTEX, su ecosistema de soluciones y recursos, donde nos sumergimos en el proceso real de aprendizaje eCommerce.</p>

                    </Section>
                    
                </Window>

                <br /><br /><br />

                <article className="pointer">
                    
                    <Image src={Pointer} alt="Pointer" />

                    <p>Scroll para<br />ver más</p>

                </article>

                <br />

                <article className="why">

                    <Section>

                        <p>En 2020 el mundo dio vueltas como nadie lo esperaba, en todos los sectores de la sociedad. Aquellos que se readapten, se transformen y logren sobrevivir: saldrán más fuertes.</p>

                        <br />

                        <p>De ahí vino el deseo de ayudar a los profesionales a organizar sus ideas, dar un paso más allá en su aprendizaje y prepararse para un importante momento de su carrera profesional.</p>
                        
                    </Section>

                    <Section titulo="¿Por qué INNMIND?">

                        <p>La mente es el estado de conciencia o subconsciencia humana. "Mente" es un concepto ampliamente utilizado para describir la cognición y el comportamiento.</p>

                        <br />

                        <p>Así que <strong>INMMIND</strong> es porque buscamos revolucionar el concepto, donde invitamos a nuestros alumnos a aprender intensamente un oficio dentro de la eCommunicación, y a nuestros Partners y Sponsors a mover el estado de la conciencia y colaborar puramente por el acto.</p>

                    </Section>
               
                </article>

            </section>

            <aside className="banner">

                <Image src={Banner} alt="Banner" />

            </aside>

        </section>
    );
}

export default About;