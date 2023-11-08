import Image from "components/Image";

const Section = ({ src, alt, titulo, children, classname }) => {
    return (
        <section className={ classname }>

            {
                src ?
                    <>
                        <Image src={ src } alt={ alt } />
                        <br /><br />
                    </>                    
                :
                    null
            }

            { titulo ? <><h3>{ titulo }</h3> <br /></>  : null }
            

            { children }

        </section>
    );
}

export default Section;