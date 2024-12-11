import SmoothScroll from './components/SmoothScroll'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          type='image/png'
          href='/favicon-96x96.png'
          sizes='96x96'
        />
        <link
          rel='icon'
          type='image/svg+xml'
          href='/favicon.svg'
        />
        <link
          rel='shortcut icon'
          href='/favicon.ico'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <meta
          name='apple-mobile-web-app-title'
          content='function design studio'
        />
        <link
          rel='manifest'
          href='/site.webmanifest'
        />

        <title>Function Design Studio</title>
      </head>
      <body className='bg-primary scroll-smooth'>
        <SmoothScroll />
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  )
}
