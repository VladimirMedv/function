export async function POST(req) {
  const { name, phone, email } = await req.json()

  if (!name || !phone || !email) {
    return new Response(
      JSON.stringify({ message: 'All fields are required' }),
      {
        status: 400,
      }
    )
  }

  // Здесь можно подключить логику отправки email или сохранения данных в базу
  console.log('Form submitted:', { name, phone, email })

  return new Response(
    JSON.stringify({ message: 'Message sent successfully' }),
    {
      status: 200,
    }
  )
}
