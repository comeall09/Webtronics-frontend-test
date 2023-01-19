import { Card } from "./card/index"
import styles from "./styles.module.scss"

const technologies = [
  {
    photo: "/assets/technologies/angular.svg",
    title: "Angular",
  },
  {
    photo: "/assets/technologies/react.svg",
    title: "React",
  },
  {
    photo: "/assets/technologies/vue.svg",
    title: "Vue.js",
  },
  {
    photo: "/assets/technologies/js.svg",
    title: "JavaScript",
  },
]

export function Technologies() {
  return (
    <div id='programs' className={styles.wrapper}>
      {/* title */}
      <div className={styles.titleWrapper}>
        <h2 className='sectionTitle'>Programming technologies</h2>
        <p className={styles.description}>
          By the end, you’ll have the portfolio and interview skills you need to
          start your new career.
        </p>
      </div>

      {/* content */}
      <div className={styles.content}>
        {technologies.map(({ photo, title }) => (
          <Card photo={photo} title={title} key={photo} />
        ))}
      </div>
    </div>
  )
}