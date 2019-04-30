import sanityClient from '@sanity/client'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Features from '../components/Features'
import Newsletter from '../components/Newsletter'

// TODO: Extract to layout component
const Home = ({ name }) => {
  return (
    <div className='home'>
      <div className='home__container'>
        <div className='home__header'>
          <Header />
        </div>
      </div>
      <div className='home__hero'>
        <Hero />
      </div>
      <div className='home__features'>
        <Features />
      </div>
      <Newsletter />
      {/* TODO: We can move this styling to a layout-component if it's too big! */}
      <style jsx global>{`
        :root {
          --positive-color: #27CA41;
          --black-color: #1A1A1A;
          --light-text-color: #888888;
          --light-gray-color: #F2F2F2;
          --body-font-size: 16px;
          --large-title-font-size: 36px;
          --large-title-font-weight: 700;
          --medium-title-font-size: 29px;
          --medium-title-font-weight: 700;
          --title-font-size: 23px;
          --title-font-weight: 600;
          --mobile-break-point: 600px;
        }
        /* TODO: How to specify media query width, without hardcoded width? */
        @media (min-width: 800px) {
          :root {
            --large-title-font-size: 52px;
            --medium-title-font-size: 39px;
            --title-font-size: 33px;
          }
        }

        * {
          font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          color: var(--black-color);
          font-size: 16px;
          font-weight: normal;
          line-height: 1.3em;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .home {
          margin: 0 16px;
        }

        .home__container {
          max-width: 1248px;
          margin: 0 auto;
          position: relative;
        }

        .home__header {
          position: absolute;
          width: 100%;
        }

        .home__hero {
          justify-content: center;
          height: 95vh;
          display: flex;
          align-items: center;
        }

        .home__features {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}

Home.getInitialProps = () => {
  const client = sanityClient({
    projectId: 'zs25h3xf',
    dataset: 'production',
    useCdn: true
  })

  return client.fetch('*[_type == "page"][0]')
}

export default Home
