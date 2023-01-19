import Image from "next/image"
import styles from "./styles.module.scss"

const img = {
  width: 95,
  height: 25,
  src: "/assets/steps/arrow.svg",
  alt: "steps separator",
}
// array of 5 images
const imgList = new Array(5).fill(img)

export function Separator() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.vertical}></span>
      <div className={styles.images}>
        {imgList.map(({ width, height, src, alt }, index) => (
          <Image
            key={index}
            src={src}
            width={width}
            height={height}
            alt={alt}
          />
        ))}
      </div>
    </div>
  )
}
