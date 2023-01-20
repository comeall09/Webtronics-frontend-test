import { ReactNode } from "react"
import { createPortal } from "react-dom"
import styles from "./styles.module.scss"

type PropsType = {
  active: boolean
  setActive: (active: boolean) => void
  children: ReactNode
}
type ChildrenType = {
  children: ReactNode
}

export function Portal({ children }: ChildrenType) {
  return createPortal(children, document.body)
}

export function Modal({ active, setActive, children }: PropsType) {
  function closeModal() {
    setActive(false)
  }

  if (!active) return null

  return (
    <Portal>
      <div onClick={closeModal} className={styles.modalWrapper}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={styles.modalContent}
        >
          {children}
        </div>
      </div>
    </Portal>
  )
}