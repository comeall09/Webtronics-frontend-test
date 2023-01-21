import { Card } from "./card/index"
import styles from "./styles.module.scss"

const technologies = [
  {
    id: 1,
    photo: "/assets/technologies/angular.svg",
    title: "Angular",
  },
  {
    id: 2,
    photo: "/assets/technologies/react.svg",
    title: "React",
  },
  {
    id: 3,
    photo: "/assets/technologies/vue.svg",
    title: "Vue.js",
  },
  {
    id: 4,
    photo: "/assets/technologies/js.svg",
    title: "JavaScript",
  },
]

const description = 'By the end, you’ll have the portfolio and interview skills you need to start your new career.'

export function Technologies() {
  return (
    <section id='programs' className={styles.wrapper}>
      {/* title */}
      <div className={styles.titleWrapper}>
        <h2 className='sectionTitle'>Programming technologies</h2>
        <p className={styles.description}>
          {description}
        </p>
      </div>

      {/* content */}
      <div className={styles.content}>
        {technologies.map(({ id, photo, title }) => (
          <Card key={id} photo={photo} title={title} />
        ))}
      </div>
    </section>
  )
}