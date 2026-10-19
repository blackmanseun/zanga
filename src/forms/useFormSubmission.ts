'use client'

import { useState, useTransition } from 'react'
import type { FormResult } from './actions'

/** Sends a form to one of the server actions in ./actions and tracks pending, error and success state. */
export function useFormSubmission(action: (formData: FormData) => Promise<FormResult>) {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [pending, startTransition] = useTransition()

  const submit = (form: HTMLFormElement) => {
    setError('')
    const formData = new FormData(form)
    startTransition(async () => {
      try {
        const result = await action(formData)
        if (result.ok) setSubmitted(true)
        else setError(result.error)
      } catch {
        setError('We couldn’t reach the server. Please check your connection and try again.')
      }
    })
  }

  const reset = () => {
    setSubmitted(false)
    setError('')
  }

  return { submitted, error, pending, submit, reset }
}
