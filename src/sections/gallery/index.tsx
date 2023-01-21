import Image from "next/image"
import styles from "./styles.module.scss"

const photosList = [
  {
    id: 1,
    src: "/assets/gallery/1.png",
    alt: "gallery",
  },
  {
    id: 2,
    src: "/assets/gallery/2.png",
    alt: "gallery",
  },
  {
    id: 3,
    src: "/assets/gallery/3.png",
    alt: "gallery",
  },
]

const description =
  "If you would like to learn web development and get a job in the tech industry, you are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video tutorials! This course was designed to be extremely beginner friendly. We will begin with the very basics of HTML and build a simple web page."

export function Gallery() {
  return (
    <section id='gallery'>
      <h2 className={`sectionTitle ${styles.title}`}>Gallery</h2>
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <p>
            By the end of this course, you will be able to develop and publish
            your very own Google Chrome extension! In this course we will focus
            on coding exercises and projects.
          </p>
          <Image
            className={styles.leftPic}
            width={290}
            height={435}
            src={"/assets/gallery/left.png"}
            alt={"gallery"}
          />
        </div>

        {/* photos */}
        <div className={styles.photos}>
          {photosList.map(({ id, src, alt }) => (
            <Image
              key={id}
              width={id === 1 ? 600 : 290} // first photo is bigger than others
              height={id === 1 ? 435 : 210}
              src={src}
              alt={alt}
            />
          ))}
        </div>

        {/* description */}
        <p className={styles.footer}>
          {description}
        </p>
      </div>
    </section>
  )
}