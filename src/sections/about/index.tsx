import Image from "next/image"
import styles from "./styles.module.scss"

const mentors = [
  {
    id: 1,
    photo: "/assets/about/mentor1.svg",
    fullname: "Wade Warren",
    title: "Front-end engineers work closely with designers",
  },
  {
    id: 2,
    photo: "/assets/about/mentor2.svg",
    fullname: "Kristin Watson",
    title: "Front-end engineers work closely with designers",
  },
  {
    id: 3,
    photo: "/assets/about/mentor3.svg",
    fullname: "Robert Fox",
    title: "Front-end engineers work closely with designers",
  },
]

const description =
  "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."

export function About(){
  return (
    <section id='about' className={styles.wrapper}>
      <h2 className='sectionTitle'>About Us</h2>

      {/* content */}
      <div className={styles.content}>
        {/* mentors */}
        <div className={styles.mentorsWrap}>
          <div className={styles.mentorsLineWrap}>
            <h3>Mentors</h3>
            <Image
              src='/assets/about/mentorsLine.svg'
              width={450}
              height={157}
              alt='mentors-line'
            />
          </div>

          <div className={styles.mentorsBlock}>
            {mentors?.map(({ id, photo, fullname, title }) => (
              <div key={id} className={styles.mentor}>
                <Image
                  className={styles.photo}
                  src={photo}
                  width={184}
                  height={184}
                  alt={fullname}
                />
                <span className={styles.name}>{fullname}</span>
                <p className={styles.title}>{title}</p>
              </div>
            ))}
          </div>
        </div>
        {/* description */}
        <p className={styles.description}>
          {description}
        </p>
        <Image
          className={styles.banner}
          src='/assets/about/front-end.png'
          alt='banner'
          width={757}
          height={186}
        />
      </div>
    </section>
  )
}