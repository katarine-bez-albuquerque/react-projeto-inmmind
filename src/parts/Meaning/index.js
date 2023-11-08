import Image from "components/Image";
import Window from "components/Window";
import "./style.css";

import Pointer from "assets/images/mao_red.png";
import Banner from "assets/images/Untitled-7.png";
import Logo from "assets/images/Untitled-11.png";
import Laboratoria from "assets/images/laboratoria.png";
import Section from "components/Section";

const Meaning = () => {
    return (
        <section className="what">

            <section className="row">

                <aside>

                    <Window image={Pointer}>

                        <Section>

                            <p>Creemos en un mundo diverso, plural, inclusivo y con las mismas oportunidades para todos.</p>

                            <br />

                            <p><strong>INMMERCE</strong> promoverá Bootcamps y capacitaciones de desarrollo y eComunicación, online sin costo, donde al final de una semana, el alumno tendrá un oficio para trabajar con VTEX.</p>

                        </Section>

                    </Window>

                </aside>



            </section>

            <section className="what_data">

                <aside className="description">

                    <Section titulo="¿Qué es INMMIND?">

                        <p><strong>INMMIND</strong> nace de las ganas de INMMERCE por capacitar a profesionales en eCommunicación y la necesidad del mercado por obtener profesionales especializados VTEX.</p>

                        <br />

                        <p><strong>INMMIND</strong> es una invitación a abrir la mente y colaborar con los demás, no importando quién.</p>

                        <br />

                        <p>Así que decidimos ofrecer esta oportunidad a grupos o audiencias diferenciadas, o invisibilizados, para que tengan las mismas oportunidades en el mercado para dar un paso más allá en su aprendizaje y oficio, preparandolos para el mundo eCommerce.</p>

                    </Section>

                    <article className="objective">

                        <Section src={Logo} alt="INMMIND" titulo="¿Cuál es el objetivo?" classname="objective_01">

                            <p>Crear un nuevo ecosistema de talentos de eCommunicación, integrado a las necesidades del mercado, pero más receptivo, más evolutivo, más completo y diverso.</p>

                            <br />

                            <p>¡Podemos decirles que el objetivo de INMMIND es integrar!</p>

                        </Section>

                        <Section src={Laboratoria} alt="Laboratoria" titulo="Edición Laboratoria" classname="objective_02">

                            <p>En nuestra primera edición invitamos a LABORATORIA, una startup de educación que busca impulsar las mujeres para una mejor economía digital, una organización que tiene en su DNA la misión de incluir una audiencia que normalmente está a la margen de la sociedad.</p>

                            <br />

                            <p>¡El eCommerce es un universo predominantemente masculino y abrir este espacio a un nuevo público que pueda destacarse es exactamente lo que buscamos, diversificar el mercado!</p>

                        </Section>

                    </article>

                </aside>

                <section className="banner">

                    <Image src={Banner} alt="Banner" />

                </section>

            </section>

        </section>
    );
}

export default Meaning;