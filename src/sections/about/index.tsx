import Image from "next/image"
import styles from "./styles.module.scss"

export function About() {
  const mentors = [
    {
      photo: "/assets/about/mentor1.svg",
      fullname: "Wade Warren",
      title: "Front-end engineers work closely with designers",
    },
    {
      photo: "/assets/about/mentor2.svg",
      fullname: "Kristin Watson",
      title: "Front-end engineers work closely with designers",
    },
    {
      photo: "/assets/about/mentor3.svg",
      fullname: "Robert Fox",
      title: "Front-end engineers work closely with designers",
    },
  ]

  return (
    <div id='about' className={styles.wrapper}>
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
            {mentors.map(({ photo, fullname, title }) => (
              <div key={photo} className={styles.mentor}>
                <Image
                  className={styles.photo}
                  src={photo}
                  width={184}
                  height={184}
                  alt={fullname}
                />
                <p className={styles.name}>{fullname}</p>
                <p className={styles.title}>{title}</p>
              </div>
            ))}
          </div>
        </div>
        {/* description */}
        <p className={styles.description}>
          Front-end engineers work closely with designers to make websites
          beautiful, functional, and fast. This Career Path will teach you not
          only the necessary languages and technologies, but how to think like a
          front-end engineer, too.
        </p>
        <Image
          className={styles.banner}
          src='/assets/about/front-end.png'
          alt='banner'
          width={757}
          height={186}
        />
      </div>
    </div>
  )
}