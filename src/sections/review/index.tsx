import { useState } from "react"
import Image from "next/image"
import styles from "./styles.module.scss"

const initReviewers = [
  {
    id: 1,
    photo: "/assets/review/slide1.png",
    title: "Best courses ever",
    description:
      'Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc. Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.',
  },
  {
    id: 2,
    photo: "/assets/review/slide2.png",
    title: "Amazing teaching",
    description:
      "The explanation is crazy it really doesn't have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.",
  },
  {
    id: 3,
    photo: "/assets/review/slide3.png",
    title: "Simple and easy",
    description:
      "I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun. I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.",
  },
]

type ReviewersType = typeof initReviewers

export function Review() {
  const [reviewers, setReviewers] = useState<ReviewersType>(initReviewers)
  const [currentSlide, setcurrentSlide] = useState(1)

  function nextReviewer() {
    const list = [...reviewers]
    // set 1st item to the end and move other ones to the start: [1, 2, 3] => [2, 3, 1]
    list.push(list.shift()!)
    setReviewers([...list])
    setcurrentSlide((currentSlide + 1) > 3 ? 1 : currentSlide + 1)
  }
  function prevReviewer() {
    const list = [...reviewers]
    // set last item to the start and move other ones to the end: [1, 2, 3] => [3, 1, 2]
    list.unshift(list.pop()!)
    setReviewers([...list])
    setcurrentSlide((currentSlide - 1) < 1 ? 3 : currentSlide - 1)
  }

  return (
    <section id='review' className={styles.wrapper}>
      <h2 className='sectionTitle'>Review</h2>
      <div className={styles.content}>
        {/* text */}
        <div className={styles.textSide}>
          <span>{reviewers[0].title}</span>
          <p>{reviewers[0].description}</p>
        </div>

        {/* slides */}
        <div className={styles.slidesWrap}>
          {/* buttons */}
          <div className={styles.buttons}>
            <p>{currentSlide}/<span>{reviewers.length}</span></p>
            <div className={styles.buttonsWrap}>
              <div className={styles.buttonBg}>
                <button onClick={prevReviewer}>&lt;</button> {/* > */}
              </div>
              <div className={styles.buttonBg}>
                <button onClick={nextReviewer}>&gt;</button> {/* < */}
              </div>
            </div>
          </div>

          <div className={styles.slides}>
            {reviewers.map(({ id, title, photo }, index) => (
              <div key={title} className={styles.slideBg}>
                {index === 0 ? (
                  // first slide bigger then others
                  <Image priority width={400} height={425} src={photo} alt={title} />
                  ) : (
                  <Image priority width={185} height={425} src={photo} alt={title} />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}