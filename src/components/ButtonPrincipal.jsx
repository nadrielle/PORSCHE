import Style from "./ButtonPrincipal.module.css"
import 'animate.css';

export function ButtonPrincipal() {
  
    return(
        <div>
            <h1 className={`${Style.textPr} animate__animated animate__fadeInLeft animate__delay-2s animate__duration-4s`}>Further <br /> Together </h1>
            <button className={Style.buttonPr}><a className={Style.linkPorsche} href="https://www.porsche.com/brazil/pt/models/911/911-turbo-models/911-turbo/"> Descubra o novo porsche 911 S/T </a></button>
        </div>

    )
} 