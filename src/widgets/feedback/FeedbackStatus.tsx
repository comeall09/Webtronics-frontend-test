import { FormValuesType } from "src/sections/contact"
import { Modal } from "src/shared/Modal"
import styles from "./styles.module.scss"

type PropsType = {
  active: boolean
  setActive: (active: boolean) => void
  list: FormValuesType[]
}

const titles = ["name", "phone", "email"]

export function FeedbackStatus({ active, setActive, list }: PropsType) {
  function closeModal() {
    setActive(false)
  }

  return (
    <Modal active={active} setActive={setActive}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.titles}>
            {titles.map((title) => (
              <p key={title}>{title}</p>
            ))}
          </div>
          <div className={styles.feedbacks}>
            {list?.map(({ name, phone, email }) => (
              <div key={name}>
                <p>{name}</p>
                <p>{phone}</p>
                <p>{email}</p>
              </div>
            ))}
          </div>
        </div>

        <button onClick={closeModal}>Close</button>
      </div>
    </Modal>
  )
}