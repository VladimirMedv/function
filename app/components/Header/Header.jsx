import Logo from './Logo'
import Menu from './Menu'
import GetPriceButton from './GetPriceButton'

export default function Header() {
  return (
    <header className='bg-primary text-text 2lg:p-10 p-5'>
      <div className='flex items-center justify-between'>
        <Logo />
        <div className='flex justify-end gap-10 3xl:gap-[3.75rem]'>
          <Menu />
          <GetPriceButton />
        </div>
      </div>
    </header>
  )
}
