import Button from '../components/Button'

const Hero = ({ name }) => {
  return (
    <>
      <div className='hero'>
        <div className='hero__illustration'>
          <img src='/static/minutes-macos-icon.png' />
        </div>
        <h2 className='hero__title'>
          Enjoyable time tracking. It can be done.
        </h2>
        <p className='hero__description'>
          We are creating a better native time tracking solution for macOS. This will be really cool. Should have about three lines of text here. Comming soon …
        </p>
        <div className='hero__action'>
          <Button />
        </div>
      </div>
      <style jsx>{`
        .hero {
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .hero__illustration {
          width: 120px;
          margin-bottom: 13px;
        }
        .hero__illustration img {
          max-width: 100%;
        }
        @media (min-width: 800px) {
          .hero__illustration {
            width: 160px;
          }
        }

        .hero__title {
          font-size: var(--large-title-font-size);
          font-weight: var(--large-title-font-weight);
          text-align: center;
          margin-bottom: 39px;
          line-height: 1.1em;
          letter-spacing: 0em;
          max-width: 700px;
        }

        .hero__description {
          max-width: 400px;
          text-align: center;
          line-height: 1.6em;
          margin-bottom: 26px;
        }

        .hero__action {}
      `}</style>
    </>
  )
}

export default Hero
