import Logo from './Logo'
import Menu from './Menu'
import GetPriceButton from './GetPriceButton'

export default function Header() {
  return (
    <header className='bg-primary text-text md:p-10 p-5'>
      <div className='max-w-max-w-9xl mx-auto flex items-center justify-between'>
        <Logo />
        <div className='flex justify-end gap-10 md:gap-14 sm:gap-5 2lg:gap-20'>
          <Menu />
          <GetPriceButton />
        </div>
      </div>
    </header>
  )
}
