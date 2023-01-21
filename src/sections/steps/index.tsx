import { Card } from "src/widgets/steps/card"
import { Separator } from "src/widgets/steps/separator"
import styles from "./styles.module.scss"

const steps = [
  {
    order: 1,
    title: "Introduction to Front-End",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
  },
  {
    order: 2,
    title: "Overview of Development",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
  },
  {
    order: 3,
    title: "Introduction to Front-End",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
  },
  {
    order: 4,
    title: "Overview of Development",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
  },
  {
    order: 5,
    title: "Introduction to Front-End",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
  },
  {
    order: 6,
    title: "Overview of Development",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
  },
]

export function Steps() {
  return (
    <section id="steps" className={styles.wrapper}>
      <h2 className='sectionTitle'>Steps</h2>

      {/* content */}
      <div className={styles.content}>

        {/* left side */}
        <div>
          {steps.filter(({order}) => order % 2 === 1).map(({ order, title, description }) => (
            <Card
              key={order}
              order={order}
              title={title}
              description={description}
              side={'left'} />
          ))}
        </div>

        {/* separator */}
        <div className={styles.separatorWrap}>
          <Separator />
        </div>

        {/* right side */}
        <div className={styles.rightCards}>
          {steps.filter(({order}) => order % 2 === 0).map(({ order, title, description }) => (
            <Card
              key={order}
              order={order}
              title={title}
              description={description}
              side={'right'} />
          ))}
        </div>
      </div>
    </section>
  )
}
