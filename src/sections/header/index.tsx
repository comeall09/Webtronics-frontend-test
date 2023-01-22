import Link from "next/link"
import { Navbar } from "src/widgets/navbar"
import styles from "./styles.module.scss"

export function Header() {
  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <h1 className={styles.title}>
            Front-End <p>Developer courses</p>
          </h1>
          <p className={styles.subtitle}>
            Make UIs and websites beautiful, functional, and fast. Cover all the
            topics that expensive bootcamps teach (and more).{" "}
          </p>
        </div>

        <div className={styles.bottom}>
          <Link href={"#contact"}>Start my career change</Link>
          <h1 className={styles.title}>Developer</h1>
          <span>Courses</span>
        </div>
      </div>
    </header>
  )
}