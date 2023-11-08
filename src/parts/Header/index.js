import Image from "components/Image";
import Logo from "assets/images/landing-02.png";
import Icon01 from "assets/images/Untitled-1.png";
import Icon02 from "assets/images/Untitled-2.png";
import "./style.css";

const Header = () => {
    return (
        <header className="header">
            <section className="row">
                <aside className="logo">
                    <Image 
                        src={ Logo }
                        alt="Logo"
                    />
                </aside>
                <aside className="period">
                    <section className="period_icons">
                        <Image
                            src={ Icon01 }
                            alt="icon"
                        />
                        <p>Desde el <strong>14</strong> hasta<br/>el <strong>19</strong> de Diciembre</p>
                        <Image
                            src={ Icon02 }
                            alt="icon"
                        />
                    </section>
                    <section className="period_online">
                        <p>Online</p>
                    </section>
                </aside>
            </section>
        </header>
    );
}

export default Header;