import { useEffect, useRef, useState } from "react"

import Image from "next/image"
import Link from "next/link"

import styles from "./styles.module.scss"

const links = [
  {
    id: 1,
    src: "#about",
    title: "About",
  },
  {
    id: 2,
    src: "#programs",
    title: "Programs",
  },
  {
    id: 3,
    src: "#steps",
    title: "Steps",
  },
  {
    id: 4,
    src: "#questions",
    title: "Questions",
  },
  {
    id: 5,
    src: "#contact",
    title: "Get in touch",
  },
]

export function Navbar() {
  const mobileNavRef = useRef<HTMLUListElement>(null)
  const burgerRef = useRef<HTMLDivElement>(null)

  const [navStatus, setNavStatus] = useState(false)
  function openNav() {
    setNavStatus(true)
  }
  function closeNav() {
    setNavStatus(false)
  }

  useEffect(() => {
    if (mobileNavRef.current && burgerRef.current) {
      if (navStatus) {
        mobileNavRef.current.style.display = 'flex'
        burgerRef.current.style.display = 'none'
      } else {
        burgerRef.current.style.display = 'flex'
        mobileNavRef.current.style.display = 'none'
      }
    }
  }, [navStatus])

  return (
    <nav className={styles.wrapper}>
      <div className={`layout ${styles.layout}`}>
        <Link href='#'>
          <Image src='assets/logo.svg' width={170} height={35} alt='logo' />
        </Link>
        <div ref={burgerRef} onClick={openNav} className={styles.burger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={styles.links}>
          {links.map(({ id, src, title }) => (
            <li key={id}>
              <a href={src}>{title}</a>
            </li>
          ))}
        </ul>
      </div>

      <ul onClick={closeNav} ref={mobileNavRef} className={styles.mobileLinks}>
        {links.map(({ id, src, title }) => (
          <li key={id}>
            <a href={src}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}