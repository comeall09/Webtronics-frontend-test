import Image from "next/image"
import styles from "./styles.module.scss"
import { GetServerSideProps } from 'next'

// export default const getServerSideProps: GetServerSideProps = () => {
//   return {
//     props: {
//       leftSide: {
//         text: 'By the end of this course, you will be able to develop and publish your very own Google Chrome extension! In this course we will focuson coding exercises and projects.',
//         photo: '/assets/gallery/left.png'
//       },
//       photos: [{}]
//     }
//   }
// }

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
            width={290}
            height={435}
            src={"/assets/gallery/left.png"}
            alt={"gallery"}
          />
        </div>

        {/* photos */}
        <div className={styles.photos}>
          <Image
            width={600}
            height={435}
            src={"/assets/gallery/1.png"}
            alt={"gallery"}
          />
          <Image
            width={290}
            height={210}
            src={"/assets/gallery/2.png"}
            alt={"gallery"}
          />
          <Image
            width={290}
            height={210}
            src={"/assets/gallery/3.png"}
            alt={"gallery"}
          />
        </div>

        {/* description */}
        <p className={styles.footer}>
          If you would like to learn web development and get a job in the tech
          industry, you are going to LOVE this course! Learn HTML, CSS,
          JavaScript, Bootstrap and more with over 15 hours of HD video
          tutorials! This course was designed to be extremely beginner friendly.
          We will begin with the very basics of HTML and build a simple web
          page.
        </p>
      </div>
    </section>
  )
}