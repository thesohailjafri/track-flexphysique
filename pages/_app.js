import 'tailwindcss/tailwind.css'
import '../styles/global.scss'
import '../styles/util.scss'
import '../styles/dropdown.scss'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <body className='bg-gray-300 h-screen '>
      <Layout>
        <main className="container mx-auto max-w-5xl px-2">
          <Component {...pageProps} />
        </main>
      </Layout>
    </body>
  )
}

export default MyApp