'use client'

import { useState } from 'react'
import ContactForm from './ContactForm'

const brandingOptions = [
  {
    id: 'corporate',
    label: 'Corporate',
    offers: [
      'Naming',
      'Logo',
      'Identity',
      'Brand Guidelines',
      'Website',
      'Content Design',
    ],
  },
  {
    id: 'product',
    label: 'Product',
    offers: [
      'Naming',
      'Logo',
      'Packaging',
      'Website',
      'Key Visual',
      'Content Design',
    ],
  },
  {
    id: 'personal',
    label: 'Personal',
    offers: ['Logo', 'Identity', 'Website', 'Content Design'],
  },
  {
    id: 'retail',
    label: 'Retail',
    offers: [
      'Naming',
      'Logo',
      'Identity',
      'Packaging',
      'Brand Guidelines',
      'Website',
      'Key Visual',
      'Content Design',
    ],
  },
  {
    id: 'support',
    label: 'Support',
    offers: [
      'Rebranding',
      'Re-Styling',
      'Website',
      'Key Visual',
      'Content Design',
    ],
  },
]

const Constructor = ({
  btnBgColor = 'bg-gray-disabled',
  btnBgActiveColor = 'bg-const-dark-gray',
}) => {
  const [selectedBranding, setSelectedBranding] = useState(
    brandingOptions[0].id
  )
  const [selectedOffers, setSelectedOffers] = useState([])

  const handleBrandingSelection = (brandingId) => {
    setSelectedBranding(brandingId)
    setSelectedOffers([]) // Reset selected offers when branding changes
  }

  const toggleOfferSelection = (offer) => {
    setSelectedOffers((prev) =>
      prev.includes(offer)
        ? prev.filter((item) => item !== offer)
        : [...prev, offer]
    )
  }

  const renderBrandingOptions = () => {
    return brandingOptions.map((option) => (
      <button
        key={option.id}
        className={`rounded-full font-medium transition-colors duration-300 2lg:text-[1.375rem] text-sm leading-[2.125rem] 2lg:px-[30px] 2lg:py-[10px] px-[20px] py-[2px]  ${
          selectedBranding === option.id
            ? btnBgActiveColor + ' text-text'
            : btnBgColor + ' text-text hover:bg-secondary hover:text-black'
        }`}
        onClick={() => handleBrandingSelection(option.id)}
      >
        {option.label}
      </button>
    ))
  }

  const renderOffers = () => {
    const selectedOption = brandingOptions.find(
      (option) => option.id === selectedBranding
    )
    return selectedOption ? selectedOption.offers : []
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='mb-8'>
        <h2 className='2lg:text-[2.5rem] 2lg:leading-[3.125rem] text-2xl leading-[1.875rem] text-nowrap font-medium mb-7'>
          What’s Your Branding?
        </h2>
        <div className='flex flex-wrap gap-4'>{renderBrandingOptions()}</div>
      </div>

      <div className='mb-8'>
        <h2 className='2lg:text-[2.5rem] 2lg:leading-[3.125rem] text-2xl leading-[1.875rem] text-nowrap font-medium mb-7'>
          What We Offer
        </h2>
        <div className='flex flex-wrap gap-4'>
          {renderOffers().map((offer) => (
            <button
              key={offer}
              className={`2lg:text-[1.375rem] text-sm leading-[2.125rem] 2lg:px-[30px] 2lg:py-[10px] px-[20px] py-[2px]  rounded-full font-medium transition-colors duration-300 ${
                selectedOffers.includes(offer)
                  ? btnBgActiveColor + ' text-text'
                  : btnBgColor +
                    ' text-text hover:bg-secondary hover:text-black'
              }`}
              onClick={() => toggleOfferSelection(offer)}
            >
              {offer}
            </button>
          ))}
        </div>
      </div>

      <ContactForm
        selectedOffers={selectedOffers}
        selectedBranding={selectedBranding}
        btnBgColor={'bg-gray-disabled'}
        btnTextColor={'text-text'}
      />
    </div>
  )
}

export default Constructor
