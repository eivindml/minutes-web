const Features = () => {
  return (
    <>
      <div className='features'>
        <div className='features__illustration'>
          <picture>
            <source srcSet='/static/macos-app-wireframe.webp' type='image/webp' />
            <source srcSet='/static/macos-app-wireframe.png' type='image/png' />
            <img src='/static/macos-app-wireframe.png' alt='Early wireframe for Minutes.app' />
          </picture>
        </div>
        <div className='features__description'>
          <div className='features__title'>
            What to expect from the first version of the app.
          </div>
          <ul className='features__list'>
            <li className='features__list-item'>
              <img
                src='/static/bullet-icon.svg'
                alt='Bullet list icon'
              />
              <p>
                Fully native macOS app that respects the platform, yo and has all the inter grations you expects. Lorem ipsum doler sit amet, bla comming.
              </p>
            </li>
            <li className='features__list-item'>
              <img
                src='/static/bullet-icon.svg'
                alt='Bullet list icon'
              />
              <p>
                Fully native macOS app that respects the platform, yo and has all the inter grations you expects. Lorem ipsum doler sit amet, bla comming.
              </p>
            </li>
            <li className='features__list-item'>
              <img
                src='/static/bullet-icon.svg'
                alt='Bullet list icon'
              />
              <p>
                Fully native macOS app that respects the platform, yo and has all the inter grations you expects. Lorem ipsum doler sit amet, bla comming.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .features__illustration {
          max-width: 833px;
          margin: 0 auto;
          margin-bottom: 100px;
        }
        .features__illustration img {
          width: 100%;
        }

        .features__title {
          font-size: var(--title-font-size);
          font-weight: var(--title-font-weight);
          margin-bottom: 64px;
          /* text-align: center; */
          max-width: 500px;
        }

        .features__description {
          max-width: 700px;
          margin: 0 auto;
        }

        .features__list-item {
          display: flex;
          align-items: center;
        }
        .features__list-item:not(:last-of-type) {
          margin-bottom: 46px;
        }
        .features__list-item img {
          margin-right: 46px;
        }
      `}</style>
    </>
  )
}

export default Features
