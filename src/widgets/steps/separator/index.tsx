import Image from "next/image"
import styles from "./styles.module.scss"

const img = {
  id: (Math.random() * 1000).toFixed(0),
  src: "/assets/steps/arrow.svg",
  alt: "steps separator",
}
// array of 5 images
const imgList = new Array(6).fill(img)

export function Separator() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.vertical}></span>
      <div className={styles.images}>
        {imgList.map(({ id, src, alt }) => (
          <Image priority key={id} src={src} width={95} height={25} alt={alt} />
        ))}
      </div>
    </div>
  )
}
