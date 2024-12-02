import Avatar from './Avatar'
import SocialLinks from './SocialLinks'

export default function AboutMe() {
  return (
    <section className='bg-primary text-text py-16 flex items-center'>
      <Avatar />
      <div className='ml-8'>
        <h2 className='text-4xl font-bold mb-4'>About Me</h2>
        <p>Short bio about yourself goes here...</p>
        <SocialLinks />
      </div>
    </section>
  )
}
