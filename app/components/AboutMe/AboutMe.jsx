import Avatar from './Avatar'
import SocialLinks from './SocialLinks'

export default function AboutMe() {
  return (
    <section className='3xl:px-56 2lg:px-40 7md:px-24 px-5 3xl:mb-[12.5rem] 4sm:mb-[9.375rem] 3sm:mb-[7.5rem] flex font-medium 2lg:mt-[4.688rem] 7md:mt-[4.2rem]  4sm:mt-[4rem] 3sm:mt-[4rem]'>
      <Avatar />
      <div className='3xl:ml-[9.5rem] 2lg:ml-[5.813rem] ml-5 2lg:text-[2.5rem] 7md:text-2xl  4sm:text-[1.563rem] 3sm:text-[1.188rem] 2lg:leading-[3.125rem]  4sm:leading-[31px] 3sm:leading-7 2lg:w-[874px] 7md:w-[429px]  4sm:w-[325px] 3sm:w-[235px] whitespace-pre-line font-medium'>
        {`Fëdor Beltugov —
Founder and owner of Function Design Studio. Multidisciplinary designer & art director, focused on brand identity & UI/UX design. Work experience: 17 years`}
        <SocialLinks />
      </div>
    </section>
  )
}
