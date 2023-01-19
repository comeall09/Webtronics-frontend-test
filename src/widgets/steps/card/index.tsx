import styles from "./styles.module.scss"

interface CardProps {
  order: number
  title: string
  description: string
  side: "left" | "right"
}

export function Card({ order, title, description, side }: CardProps) {
  return (
    <div
      className={`${styles.wrapper} ${
        side === "right" ? styles.rightCard : styles.leftCard
      }`}
    >
      <div className={styles.innerBg}>
        <div className={styles.border}>
          <div className={styles.content}>
            <span className={styles.number}>Step {order}</span>
            <span className={styles.title}>{title}</span>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
