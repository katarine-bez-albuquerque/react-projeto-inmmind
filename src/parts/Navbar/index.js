import Button from "components/Button";
import Link from "components/Link";
import "./style.css";
import { useEffect, useRef } from "react";

const Navbar = () => {

    const menu = useRef(null);

    useEffect(() => {
        
        if(window.innerWidth <= 786) {
            menu.current.style.display = "none";
        }       

    },[]);

    const openMenu = () => {

        if(window.innerWidth <= 786) {
            if (menu.current.style.display === "none") {
                menu.current.style.display = "flex";
            }
            else {
                menu.current.style.display = "none";
            }
        }
        else {
            menu.current.style.display = "flex";
        }
    }

    return (
        <nav className="navbar">

            <section className="row">

                <Button classe="menu_hamburguer" onclick={() => openMenu()}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Button>

                <ul ref={ menu }>
                    <li><Link>INMMIND</Link></li>
                    <li><Link>EDICIÓN LABORATORIA</Link></li>
                    <li><Link>NUESTRA INMMIND</Link></li>
                    <li><Button>Participa</Button></li>
                </ul>

            </section>
        </nav>
    );
}

export default Navbar;