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
            <h3>Eletro Santa Clara - Loja 1</h3>
            <ul>
              <li>(14) 3269-1057</li>
              <li>vendas@eletrosantaclara.com.br</li>
              <li>Av. Brasil, 589- Centro</li>
              <li>Lençóis Paulista - SP</li>
              <li className={styles.social}>
                <Link href="https://www.instagram.com/eletrosantaclara">
                  <a target="_blank">
                    <Image
                      src="/icons/instaFooter.svg"
                      alt="Logo"
                      width="30"
                      height="30"
                    />
                  </a>
                </Link>
                <Link href="https://www.facebook.com/eletrosantaclara/">
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
            <h3>Eletro Santa Clara - loja 2</h3>
            <p> Rua Pastor Natalino Paulino, nº. 260, Vila Santa Cecília</p>
            <p>Fone 14 3269.1717 - 14 98118.8248</p>
          </div>

          <div>
            <h3>Atendimento</h3>
            <p>Seg - Sex: 08:00 - 18:00</p>
            <p>Sáb: até 12h - Dom: Fechado</p>
          </div>
        </div>
      </footer>

      <p className={`${styles.copy}`}>
        2022 © Eletro Santa Clara. Todos os direitos reservados.
      </p>
    </>
  );
};
