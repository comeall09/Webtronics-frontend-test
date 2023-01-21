import Image from "next/image"
import styles from "./styles.module.scss"

const question = {
  id: (Math.random() * 1000).toFixed(0),
  question: "What is the price?",
  text: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
}

// array of 5 items
const questions = new Array(5).fill(question)

export function Questions() {
  return (
    <section id='questions' className={styles.wrapper}>
      <h2 className='sectionTitle'>Frequently Asked Questions</h2>

      {/* left side */}
      <div className={styles.contentWrapper}>
        <div className={styles.imgSide}>
          <p>Do you have any kind of questions? We are here to help.</p>
          <div className={styles.imgWrap}>
            <Image
              width={1000}
              height={1400}
              src='/assets/questions/question.webp'
              alt='question'
            />
          </div>
        </div>

        {/* questions list */}
        <div className={styles.content}>
          {questions.map(({ id, question, text }, index) => (
            <div key={id} className={styles.gradientWrap}>
              <div className={styles.questionBg}>
                {/* 1st is opened by default */}
                <details open={index === 0}>
                  <summary>{question}</summary>
                  <p>{text}</p>
                </details>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}