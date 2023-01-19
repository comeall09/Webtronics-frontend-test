import Image from "next/image"
import styles from "./styles.module.scss"

const question = {
  question: "What is the price?",
  text: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
}

// array of 5 items
const questions = new Array(5).fill(question)

export function Questions() {
  return (
    <div className={styles.wrapper}>
      <h2 className='sectionTitle'>Frequently Asked Questions</h2>

      {/* left side */}
      <div className={styles.contentWrapper}>
        <div className={styles.logo}>
          <p>Do you have any kind of questions? We are here to help.</p>
          <Image
            width={850}
            height={1000}
            src='/assets/questions/question.png'
            alt='question'
          />
        </div>

        {/* questions list */}
        <div className={styles.content}>
          {questions.map(({ question, text }, index) => (
            <div key={index} className={styles.gradientWrap}>
              <div className={styles.questionBg}>
                <details>
                  <summary>{question}</summary>
                  <p>{text}</p>
                </details>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}