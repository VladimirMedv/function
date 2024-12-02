export default function ProjectItem({ title }) {
  return (
    <div className='bg-footer p-4 rounded-lg hover:bg-secondary transition'>
      <h3 className='text-lg font-bold'>{title}</h3>
      <p>Project description goes here...</p>
    </div>
  )
}
