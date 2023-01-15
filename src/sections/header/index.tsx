import Image from "next/image"
import { Navbar } from "src/widgets/navbar"
import styles from "./styles.module.scss"

export function Header() {
  return (
    <header className={styles.header}>
      <Image
        className={styles.bg}
        fill
        src={"/assets/headerBg.png"}
        alt='bacground'
      />
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <h1 className={styles.title}>Front-End</h1>
          <p className={styles.subtitle}>
            Make UIs and websites beautiful, functional, and fast. Cover all the
            topics that expensive bootcamps teach (and more).{" "}
          </p>
        </div>

        <div className={styles.bottom}>
          <button>Start my career change</button>
          <h1 className={styles.title}>Developer</h1>
          <span>Courses</span>
        </div>
      </div>
    </header>
  )
}