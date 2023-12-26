import porschemp4 from "../images/porschevideo.mp4";
import { ButtonPrincipal } from "./ButtonPrincipal";
import styles from "./Video.module.css"
import Logo from "../images/porsche-logo-30.png"
export function Video() {
  return (
  <div className={styles.content}>
  <ButtonPrincipal/>
  <img className={styles.logoImg} src={Logo} alt="" width="50px"/>
  <video
    className={styles.backgroundVideo}
    src={porschemp4} 
    autoPlay
    muted
    loop
    type="video/mp4"
    width="2706px"
  ></video>
</div>
  )
}
