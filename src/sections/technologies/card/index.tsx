import Image from "next/image"
import styles from "./styles.module.scss"

interface CardProps {
  photo: string
  title: string
}

export const Card = ({ photo, title }: CardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <Image width={162} height={136} src={photo} alt={title} />
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  )
}
