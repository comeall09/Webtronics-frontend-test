import styles from "./styles.module.scss"

type ErrorType = {
  text: string | undefined
}

export function ErrorMsg({ text }: ErrorType): JSX.Element {
  return <p className={styles.error}>{text}</p>
  return <></>
}