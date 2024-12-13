'use client'

import { useState, useEffect } from 'react'

export default function ContactForm({
  selectedOffers,
  selectedBranding,
  btnBgColor = 'bg-gray-title',
  btnTextColor = 'text-black',
  inputTextColor = 'text-light-gray',
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    const validationErrors = validateForm()
    setIsFormValid(Object.keys(validationErrors).length === 0)
  }, [formData])

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = '!Required field'
    } else if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(formData.name)) {
      newErrors.name = '!Letters only'
    }

    if (formData.phone.trim() && !/^\+?\d+$/.test(formData.phone.trim())) {
      newErrors.phone = '!Numbers only, starting with + allowed'
    }

    if (!formData.email.trim()) {
      newErrors.email = '!Required field'
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
      newErrors.email = '!Invalid email'
    }

    return newErrors
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    const filteredValue =
      name === 'name'
        ? value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '')
        : name === 'phone'
        ? value.replace(/[^\d+]/g, '')
        : value

    setFormData({ ...formData, [name]: filteredValue })

    if (touched[name]) {
      setErrors(validateForm())
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched({ ...touched, [name]: true })
    setErrors(validateForm())
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setTouched({ name: true, phone: true, email: true })
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, selectedOffers, selectedBranding }),
      })

      if (response.ok) {
        alert('Message sent successfully!')
        setFormData({ name: '', phone: '', email: '' })
        setTouched({})
      } else {
        alert('Failed to send message. Please try again later.')
      }
    } catch (error) {
      alert('An error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFormReset = () => {
    setFormData({ name: '', phone: '', email: '' })
    setTouched({})
    setErrors({})
  }

  useEffect(() => {
    return () => handleFormReset()
  }, [])

  const getButtonClass = () => {
    if (!isFormValid) {
      return btnBgColor
    }
    return btnBgColor === 'bg-gray-title' ? 'bg-text' : 'bg-const-dark-gray'
  }

  return (
    <div className='flex flex-col items-start justify-center w-full 2lg:max-w-[400px] ml-4 max-2lg:pr-5'>
      <form
        onSubmit={handleSubmit}
        className='w-full flex flex-col gap-6 2lg:text-[1.563rem] text-[0.938rem] 2lg:leading-[2.375rem] leading-6 form-[autocomplete="off"]'
        autoComplete='off'
      >
        {['name', 'phone', 'email'].map((field) => (
          <div
            key={field}
            className='relative'
          >
            <label
              htmlFor={'asdf' + field}
              className='sr-only'
            >
              {field === 'name'
                ? 'Your name'
                : field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type='text'
              id={field}
              name={'asdf' + field}
              value={formData[field]}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder={
                field === 'name'
                  ? 'Your name'
                  : field.charAt(0).toUpperCase() + field.slice(1)
              }
              className={`w-full border-b border-light-gray-2 bg-transparent ${inputTextColor} focus:outline-none py-2 px-5 placeholder:text-light-gray leading-[2.375rem] no-autocomplete input-[autocomplete="off"] ${
                errors[field] && touched[field] && 'border-secondary'
              }`}
              autoComplete='new-password'
            />
            {errors[field] && touched[field] && (
              <span className='absolute right-2 top-1/2 transform -translate-y-1/2 text-secondary text-sm'>
                {errors[field]}
              </span>
            )}
          </div>
        ))}

        <button
          type='submit'
          className={`${getButtonClass()} hover:bg-secondary ${btnTextColor} font-medium 2lg:text-[1.375rem] text-sm leading-[2.125rem] 2lg:px-[30px] 2lg:py-[10px] px-[20px] py-[2px] rounded-full w-fit transition-colors duration-300 2lg:mt-[30px] 2lg:mb-10 mt-[30px] mb-5`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>

      <div className='text-light-gray 2lg:text-sm text-[0.563rem] text-start whitespace-pre-line'>
        {`By clicking on the "Send" button,\nI consent to the processing of personal data`}
      </div>
    </div>
  )
}
