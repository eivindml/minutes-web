// import sanityClient from '@sanity/client'
import { useRef } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Features from '../components/Features'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  const newsletterRef = useRef()
  return (
    <>
      <Layout>
        <div className='section--width'>
          <Header />
        </div>
        <div className='section section--width section--top'>
          <Hero newsletterRef={newsletterRef} />
        </div>
        <div className='section section--width'>
          <Features />
        </div>
        <div className='section section--width' ref={newsletterRef}>
          <Newsletter />
        </div>
        <div className='section'>
          <Footer />
        </div>
      </Layout>
      <style jsx>{`
        .section:not(:last-of-type) {
          margin-bottom: 300px;
          display: flex;
          justify-content: center;
        }

        .section--width {
          max-width: 1248px;
          padding: 0 16px;
          margin: 0 auto;
        }

        .section--top {
          margin-top: 10vh;
        }
      `}</style>
    </>
  )
}

// Home.getInitialProps = () => {
//   const client = sanityClient({
//     projectId: 'zs25h3xf',
//     dataset: 'production',
//     useCdn: true
//   })
//
//   return client.fetch('*[_type == "page"][0]')
// }

export default Home
