import Image from "next/image"
import Link from "next/link"
import styles from "./styles.module.scss"

const routes = ["about", "steps", "FAQs", "Review", "Gallery"]
const media = [
  {
    id: 1,
    title: "facebook",
    icon: "/assets/footer/facebook.svg",
    link: "facebook.com",
  },
  {
    id: 2,
    title: "gitlab",
    icon: "/assets/footer/gitlab.svg",
    link: "gitlab.com",
  },
  {
    id: 3,
    title: "twitter",
    icon: "/assets/footer/twitter.svg",
    link: "twitter.com",
  },
  {
    id: 4,
    title: "linkedin",
    icon: "/assets/footer/linkedin.svg",
    link: "linkedin.com",
  },
]

export function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={`${styles.content} layout`}>
        <div className={styles.about}>
          <Image width={170} height={35} alt='logo' src={"/assets/logo.svg"} />
          <p>Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815</p>
        </div>

        <div className={styles.links}>
          <span>Company</span>
          <div>
            {routes.map((route) => (
              <Link key={route} href={`#${route}`}>
                {route}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.media}>
          <span>Social media</span>
          <div>
            {media.map(({ id, title, icon, link }) => (
              <Link key={id} href={link}>
                <Image src={icon} width={25} height={25} alt={title} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}