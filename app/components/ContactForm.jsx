'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Required field'
    if (!formData.phone.trim()) newErrors.phone = 'Required field'
    if (
      !formData.email.trim() ||
      !/^[^@]+@[^@]+\.[^@]+$/.test(formData.email)
    ) {
      newErrors.email = 'Invalid email'
    }
    return newErrors
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Message sent successfully!')
        setFormData({ name: '', phone: '', email: '' })
      } else {
        alert('Failed to send message. Please try again later.')
      }
    } catch (error) {
      alert('An error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='flex flex-row 2lg:px-56 md:px-36 px-5 mb-14'>
      <div className='flex-1 max-sm:flex-none 2lg:text-[3.125rem] text-3xl text-left'>
        Order
        <br />a service
      </div>
      <form
        onSubmit={handleSubmit}
        className=' p-6 bg-footer text-light-gray space-y-4 rounded-lg flex flex-col gap-5 flex-1 w-500px'
      >
        <div>
          <label
            htmlFor='name'
            className='sr-only'
          >
            Your name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            placeholder='Your name'
            className='w-full border-b border-light-gray-2 bg-footer text-light-gray focus:outline-none focus:border-red-500 py-2 px-5'
          />
          {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
        </div>

        <div>
          <label
            htmlFor='phone'
            className='sr-only'
          >
            Phone
          </label>
          <input
            type='text'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleInputChange}
            placeholder='Phone'
            className='w-full border-b border-light-gray-2 bg-footer text-light-gray focus:outline-none focus:border-red-500 py-2 px-5'
          />
          {errors.phone && (
            <p className='text-red-500 text-sm'>{errors.phone}</p>
          )}
        </div>

        <div>
          <label
            htmlFor='email'
            className='sr-only'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            placeholder='Email'
            className='w-full border-b border-light-gray-2 bg-footer text-light-gray focus:outline-none focus:border-red-500 py-2 px-5'
          />
          {errors.email && (
            <p className='text-red-500 text-sm'>{errors.email}</p>
          )}
        </div>

        <button
          type='submit'
          className=' bg-text hover:bg-secondary text-black font-medium py-[10px] px-[30px] rounded-full w-fit'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>

        <p className='text-gray-400 text-sm text-start mt-4'>
          By clicking on the "Send" button,
          <br />I consent to the processing of personal data
        </p>
      </form>
    </div>
  )
}
