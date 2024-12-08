import Avatar from './Avatar'
import SocialLinks from './SocialLinks'

export default function AboutMe() {
  return (
    <section className='bg-primary text-text mt-20 py-16 flex 2lg:px-56 md:px-36 px-5'>
      <Avatar />
      <div className='2lg:ml-36 2lg:text-[40px] md:ml-[5.813rem] ml-5 text-[25px] 2lg:leading-[50px] sm:leading-[32px] max-sm:leading-[31px] 2lg:w-[874px] md:w-[550px] sm:w-[429px] max-sm:w-[325]'>
        Fëdor Beltugov — Founder and owner of Function Design Studio.
        Multidisciplinary designer & art director, focused on brand identity &
        UI/UX design. Work experience: 17 years
        <SocialLinks />
      </div>
    </section>
  )
}
