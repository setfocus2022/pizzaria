import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Footer = ({ children, link = "/" }) => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={`mainContainer ${styles.footerWrap}`}>
          <Link href="/">
            <a className={styles.logo}>
              <Image
                src="/icons/logo_transparente.png"
                alt="Logo"
                width="300"
                height="150"
              />
            </a>
          </Link>

          <div>
            <h3>La Casa Pizza Bar</h3>
            <ul>
              <li>(14) 99612-3444 </li>
              <li>vendas@eletrosantaclara.com.br</li>
              <li>Rua Lídio Bosi 425, Jd Humaitá</li>
              <li>Lençóis Paulista - SP</li>
              <li className={styles.social}>
                <Link href="https://www.instagram.com/lacasapb/?hl=en">
                  <a target="_blank">
                    <Image
                      src="/icons/instaFooter.svg"
                      alt="Logo"
                      width="30"
                      height="30"
                    />
                  </a>
                </Link>
                <Link href="https://www.facebook.com/lacasapb/">
                  <a target="_blank">
                    <Image
                      src="/icons/faceFooter.svg"
                      alt="Logo"
                      width="30"
                      height="30"
                    />
                  </a>
                </Link>
                {/* <Link href="/">
                  <a>
                    <Image
                      src="/icons/youtubeFooter.svg"
                      alt="Logo"
                      width="32"
                      height="27"
                    />
                  </a>
                </Link> */}
              </li>
            </ul>
          </div>

          <div>
            <h3></h3>
            <p></p>
            <p></p>
          </div>

          <div>
            <h3>Atendimento</h3>
            <p>Ter - Dom: 18:00 - 23:00</p>
            <p></p>
          </div>
        </div>
      </footer>

      <p className={`${styles.copy}`}>
        2022 © Eletro Santa Clara. Todos os direitos reservados.
      </p>
    </>
  );
};
