import Image from "next/image"
import Link from "next/link"
import styles from "./styles.module.scss"

const links = [
  {
    src: "#about",
    title: "About",
  },
  {
    src: "#programs",
    title: "Programs",
  },
  {
    src: "#steps",
    title: "Steps",
  },
  {
    src: "#questions",
    title: "Questions",
  },
  {
    src: "#contact",
    title: "Get in touch",
  },
]

export function Navbar() {
  return (
    <nav className={styles.wrapper}>
      <div className='layout'>
        <Link href='#'>
          <Image src='assets/logo.svg' width={170} height={35} alt='logo' />
        </Link>
        <ul className={styles.links}>
          {links.map(({ src, title }) => (
            <li key={src}>
              <a href={src}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}