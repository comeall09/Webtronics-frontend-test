import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { schemes } from "src/shared/validation"
import { ErrorMsg } from "src/shared/ErrorMsg"
import { FeedbackStatus } from "src/widgets/feedback/FeedbackStatus"

import { useGetFeedbacksQuery, usePostFeedbackMutation } from "./slice"
import styles from "./styles.module.scss"

export type FormValuesType = {
  name: string
  phone: string
  email: string
}

const scheme = yup.object().shape({
  name: schemes.name,
  phone: schemes.phone,
  email: schemes.email,
})

export function Contact() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(scheme),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
  })

  const [postFeedbackQuery, { isLoading: isSendingFeedback }] = usePostFeedbackMutation()
  const {data: feedbackList, isFetching: isGettingFeedback} = useGetFeedbacksQuery(null)

  const [activeFeedbackStatus, setActiveFeedbackStatus] = useState(false)

  const onSubmit: SubmitHandler<FormValuesType> = async ({ name, phone, email }) => {
    const feedback = {name, phone, email}
    try {
      await postFeedbackQuery(feedback).unwrap()
      reset()
      setActiveFeedbackStatus(true)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div id='contact' className={styles.wrapperBg}>
      <div className={styles.wrapper}>
        {/* title */}
        <div className={styles.title}>
          <h2 className='sectionTitle'>Contact us</h2>
          <p>Do you have any kind of help please contact with us.</p>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className={`${errors.name?.message && styles.error}`}>
            <input className={`${errors.name?.message && styles.error}`} placeholder='Name' {...register('name')} />
            <ErrorMsg text={errors.name?.message} />
          </label>
          <label className={`${errors.phone?.message && styles.error}`}>
            <input className={`${errors.phone?.message && styles.error}`} placeholder='Phone' {...register('phone')} />
            <ErrorMsg text={errors.phone?.message} />
          </label>
          <label className={`${errors.email?.message && styles.error}`}>
            <input className={`${errors.email?.message && styles.error}`} placeholder='E-mail' {...register('email')} />
            <ErrorMsg text={errors.email?.message} />
          </label>
          <button type='submit'>Send</button>
          <p className={styles.loader}>{isSendingFeedback && 'Sending...'}</p>
        </form>
      </div>
      {!isSendingFeedback && !isGettingFeedback && (
        <FeedbackStatus active={activeFeedbackStatus} setActive={setActiveFeedbackStatus} list={feedbackList} />
      )}
    </div>
  )
}