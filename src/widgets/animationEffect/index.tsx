import Image from "next/image"
import styles from "./styles.module.scss"

const star = "/assets/star.svg"
const stars = new Array(10).fill(star)
const fume = "/assets/fume.png"
const fumes = new Array(4).fill(fume)

export function AnimationEffect() {
  return (
    <div className={styles.wrapper}>
      {stars.map((star, index) => (
        <Image
          className={styles.star}
          key={index}
          src={star}
          width={20}
          height={20}
          alt={"star"}
        />
      ))}
      <div>
        {fumes.map((fume, index) => (
          <Image
            className={styles.fume}
            key={index}
            src={fume}
            width={500}
            height={500}
            alt={"fume"}
          />
        ))}
      </div>
    </div>
  )
}