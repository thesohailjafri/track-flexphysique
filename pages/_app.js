import 'tailwindcss/tailwind.css'
import '../styles/global.scss'
import '../styles/util.scss'
import '../styles/dropdown.scss'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <body className='bg-gray-100 h-screen'>
      <Layout>
        <main className="container mx-auto max-w-5xl">
          <Component {...pageProps} />
        </main>
      </Layout>
    </body>
  )
}

export default MyApp