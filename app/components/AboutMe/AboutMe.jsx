import Avatar from './Avatar'
import SocialLinks from './SocialLinks'

export default function AboutMe() {
  return (
    <section className='3xl:px-56 2lg:px-40 md:px-24 px-5 sm:mb-[9.375rem] max-sm:mb-[7.5rem] flex font-medium 2lg:mt-[4.688rem] md:mt-[4.2rem] sm:mt-[4rem] max-sm:mt-[2.5rem]'>
      <Avatar />
      <div className='3xl:ml-[9.5rem] 2lg:ml-[5.813rem] ml-5 3xl:text-[2.5rem] md:text-2xl text-[25px] 3xl:leading-[3.125rem] sm:leading-[31px] 3xl:w-[874px] 2lg:w-[550px] md:w-[429px] sm:w-[325px] whitespace-pre-line font-medium'>
        {`Fëdor Beltugov —
Founder and owner of Function Design Studio. Multidisciplinary designer & art director, focused on brand identity & UI/UX design. Work experience: 17 years`}
        <SocialLinks />
      </div>
    </section>
  )
}
